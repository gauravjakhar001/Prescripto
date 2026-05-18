import doctorModel from "../models/doctorModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import appointmentModel from "../models/appointmentModel.js";
import env from 'dotenv'
import { toDocIdString, emptyDoctorDashMetrics } from '../utils/aggregationHelpers.js';

const changeAvailability = async(req,res)=>{

    try {

        const {docId} = req.body;
         
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId,{available : !docData.available});

        res.json({
            success: true,
            message : 'Availability changed'
        });
        
    } catch (error) {
        console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        )
    }
}

const doctorList = async (req,res) =>{
    try {
        const { speciality, available } = req.query;
        const pipeline = [];

        const match = {};
        if (speciality) match.speciality = speciality;
        if (available !== undefined) {
            match.available = available === 'true';
        }
        if (Object.keys(match).length > 0) {
            pipeline.push({ $match: match });
        }

        pipeline.push({
            $project: {
                password: 0,
                email: 0
            }
        });

        const doctors = await doctorModel.aggregate(pipeline);

        res.json({
            success: true,
            doctors,
           
        })

    } catch (error) {
         console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        )
        
        
    }
}

//API for doctor Login 
const loginDoctor = async(req,res)=>{
    try {

        const {email, password} = req.body;

        const doctor = await doctorModel.findOne({email});

        if(!doctor){
            return res.json({
                success :false,
                message : 'Invalid credentials'
            })
        }

        const isMatch = await bcrypt.compare(password ,doctor.password);

        if(isMatch){
            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET);

            res.json({
                success: true,
                token
            });
        }else{
             return res.json({
                success :false,
                message : 'Invalid credentials'
            })

        }

        
    } catch (error) {
        console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
    }
}

//API to ge doctor appointments for doctor panel

const appointmentDoctor = async(req,res) =>{

    try {

        const {docId} = req.body;

        const appointments = await appointmentModel.find({docId});

        res.json({
            success :true,
            appointments
        });

        
    } catch (error) {
         console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
    }


}

//API to mark appointment as completed for doctor panel
const appoinmentComplete = async(req,res)=>{
    try {
        
        const {docId,appointmentId} = req.body;

        const appointmentData =await appointmentModel.findById(appointmentId);
        
        if(appointmentData && appointmentData.docId === docId){

            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted : true});
            
            res.json({
                success :true,
                message : 'Appointment completed'
            });
        }else{
            res.json({
                success :false,
                message : 'Mark Failed'
            });
        }
    }catch (error) {
         console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
}
}

//API to appointmet cancellation for doctor panel
const appoinmentCancel = async(req,res)=>{
    try {
        
        const {docId,appointmentId} = req.body;

        const appointmentData =await appointmentModel.findById(appointmentId);
        
        if(appointmentData && appointmentData.docId === docId){

            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled : true});
            
            res.json({
                success :true,
                message : 'Appointment Cancelled'
            });
        }else{
            res.json({
                success :false,
                message : 'Cancellation Failed'
            });
        }
    }catch (error) {
         console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
}
}

//API to get dashbaord data for doctor panel
const doctorDashboard = async(req,res)=>{
    try {

        const {docId} = req.body;
        const docIdStr = toDocIdString(docId);

        const [result] = await appointmentModel.aggregate([
            { $match: { docId: docIdStr } },
            {
                $facet: {
                    metrics: [
                        {
                            $group: {
                                _id: null,
                                earnings: {
                                    $sum: {
                                        $cond: [
                                            { $or: ['$isCompleted', '$payment'] },
                                            '$amount',
                                            0
                                        ]
                                    }
                                },
                                appointments: { $sum: 1 },
                                patients: { $addToSet: '$userId' }
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                earnings: 1,
                                appointments: 1,
                                patients: { $size: '$patients' }
                            }
                        }
                    ],
                    latestAppointments: [
                        { $sort: { date: -1 } },
                        { $limit: 5 }
                    ]
                }
            }
        ]);

        const metrics = result?.metrics?.[0] ?? emptyDoctorDashMetrics();

        const dashData = {
            earnings: metrics.earnings,
            appointments: metrics.appointments,
            patients: metrics.patients,
            latestAppointments: result?.latestAppointments ?? []
        };
        
        res.json({
            success :true,
            dashData
        });
    } catch (error) {
        console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
    }
}

//API to get the doctor profile for doctor panel

const doctorProfile = async(req,res)=>{

    try {

        const {docId} = req.body;

        const profileData  = await doctorModel.findById(docId).select(['-password']);

        res.json({
            success :true,
            profileData
        });
        
    } catch (error) {
        console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
    }
}

//API to update doctor profile for doctor panel

const updateDoctorProfile = async(req,res)=>{

    try {

        const {docId,fees ,address ,available} = req.body;

        await doctorModel.findByIdAndUpdate(docId,{fees ,address ,available});

        res.json({
            success :true,
            message : 'Profile Updated'
        });

        
    } catch (error) {
        console.log(error);
        res.json({
           success: false,
           message : error.message
         }
        );
        
    }

}



export {changeAvailability, 
    doctorList,loginDoctor,
    appointmentDoctor,appoinmentCancel,
    appoinmentComplete,doctorDashboard,
    doctorProfile,updateDoctorProfile};
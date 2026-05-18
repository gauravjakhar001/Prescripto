/** Normalize docId for appointment queries (stored as String in schema). */
export const toDocIdString = (docId) => String(docId);

/** Default doctor dashboard metrics when doctor has no appointments. */
export const emptyDoctorDashMetrics = () => ({
  earnings: 0,
  appointments: 0,
  patients: 0,
});

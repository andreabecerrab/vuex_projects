// get groupstatus
export const getStatusGroup = (state, statusgroups) => {
  state.statusgroups = statusgroups;
};
// qnumbers by head
export const getEmployeesByHeadQnumber = (state, qnumbers) => {
  state.employeesByHead = qnumbers;
};
// get bookings of manager
export const getBookingsManager = (state, bookings) => {
  // console.log(bookings);
  // state.bookings = [{ reasonId: { reason: "hola" }, bookingId: 1 }];
};
// get bookings of pool owner
export const getBookingsPoolOwner = (state, bookings) => {
  state.bookings.concat(bookings);
};
//edit bookings
export const editBooking = (state, id) => {
  let booking = state.bookings.PENDING.bookings.filter(
    booking => booking.bookingId == id
  );
  booking[0].reasonId.reason = "New Reason";
};

import AdminService from "../../../services/AdminService";

// get status groups form service
export const getStatusGroup = ({ commit }) => {
  AdminService.getBookingStatusGroups().then(res => {
    commit("getStatusGroup", res.data);
  });
};
// get employeesQnumber
export const getEmployeesByHeadQnumber = ({ commit }) => {
  AdminService.getEmployeesByHeadQnumber().then(res => {
    commit("getEmployeesByHeadQnumber", res.data);
  });
};
// get bookings of manager
export const getBookingsManager = ({ commit }, queryParams) => {
  AdminService.getBookingsManager(queryParams).then(res => {
    commit("getBookingsManager", res.data);
  });
};
// get bookings of poolowner
export const getBookingsPoolOwner = ({ commit }, queryParams) => {
  AdminService.getBookingsPoolOwner(queryParams).then(res => {
    console.log(res);
    commit("getBookingsPoolOwner", res.data);
  });
};
//edit one booking
export const editBooking = ({ commit }, id) => {
  //PUT
  commit("editBooking", id);
};

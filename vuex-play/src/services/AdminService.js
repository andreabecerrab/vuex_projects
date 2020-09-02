import Api_fleet from "./Api";
import Api_acount from "./Account";

const ID_NUMBER = "######";

export default {
  // get status groups
  getBookingStatusGroups() {
    return Api_fleet.get("statusgroup");
  },
  // get qnumbers
  getEmployeesByHeadQnumber() {
    return Api_acount.get(`employee/get-employees?qnumber=${ID_NUMBER}`);
  },
  async getBookingsManager(queryParams) {
    try {
      let qnumber = await this.getEmployeesByHeadQnumber();
      let arr = [];

      qnumber.data.forEach((e) => {
        arr.push(e.qnumber);
      });

      var bookings = await Api_fleet.post(
        `booking?${queryParams.queryParams}`,
        {
          qnumberSet: arr,
        }
      );
      return bookings;
    } catch (error) {
      return error.message;
    }
  },

  getBookingsPoolOwner(queryParams) {
    return Api_fleet.post(
      `booking/get-bookings?${queryParams}&qnumber=${ID_NUMBER}`
    );
  },
};

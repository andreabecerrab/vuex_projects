const kanban = {
  qnumbers: [],
  data: {
    PENDING: {
      group: {
        groupId: 1,
        groupName: "Pending",
        status: [
          {
            statusId: 1,
            bookingStatus: "Available",
            reasonId: { reason: "Conference" }
          },
          {
            statusId: 6,
            bookingStatus: "Edition"
          },
          {
            statusId: 3,
            bookingStatus: "Pending"
          }
        ]
      },
      bookings: [
        {
          bookingId: 1,
          agenda: "",
          applicant: "John",
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        },
        {
          bookingId: 2,
          agenda: "",
          applicant: "Sandy",
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        },

        {
          bookingId: 3,
          agenda: "",
          applicant: "Q506800",
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        },
        {
          bookingId: 4,
          agenda: "",
          applicant: "Q506800",
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        },
        {
          bookingId: 5,
          agenda: "",
          applicant: "Q506800",
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        },
        {
          bookingId: 6,
          agenda: "",
          applicant: "Q506800",
          approverActionRegistries: [{}],
          reasonId: {
            reasonId: 3,
            reason: "Conference",
            userSeniority: 0
          }
        }
      ]
    }
  }
};

export default kanban;

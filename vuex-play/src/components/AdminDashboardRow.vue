<template>
  <v-container v-if="bookings.length > 0">
    <v-card class="bkg-component" raised>
      <v-card-title
        :class="{ 'bkg-component-title': bookingDataReady }"
        class="py-0"
      >
        <v-row
          class="d-flex pa-0 flex-nowrap justify-space-between align-center"
        >
          <v-col class="d-flex justify-start flex-grow-0 py-0">
            <span class="title pb-1" style="width: 200px">{{ groupName }}</span>
          </v-col>
          <v-col class="d-flex justify-start flex-grow-0 py-2">
            <span
              class="text-right subtitle-1 font-weight-bold"
              style="width: 200px"
              >{{ groupId }}</span
            >
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text
        :class="{ 'bkg-component-light': !bookingDataReady }"
        class="pb-1"
        v-if="showBookingsCards"
      >
        <v-row :class="{ 'justify-space-around': !bookingDataReady }">
          <v-col v-for="booking in bookings" v-bind:key="booking.id">
            <admin-dashboard-card :booking-information="booking" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { mapGetters } from "vuex";

import AdminDashboardCard from "./AdminDashboardCard";
export default {
  name: "admin-dashboard-row",
  components: { AdminDashboardCard },
  props: {
    groupId: {
      type: Number,
      required: true
    },
    groupName: {
      type: String,
      required: true
    },
    bookings: {
      type: Array,
      required: true
    },
    statusArray: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      bookingDataReady: true,
      showBookingsCards: true,
      bookingsArray: [],
      queryParams: ""
    };
  },

  computed: {},
  methods: {
    // // get action from store
    ...mapActions({
      // getBookingsManager: "admindashboard/getBookingsManager",
      // getBookingsPoolOwner: "admindashboard/getBookingsPoolOwner"
    }),
    // create params for get bookings
    createParams() {
      this.statusArray.forEach((status, index, array) => {
        this.queryParams += `status=${status.statusId}`;
        if (index < array.length - 1) this.queryParams += "&";
      });
    },
    // get bookings
    getBookings() {
      this.getBookingsManager({ queryParams: this.queryParams });
    }
  },

  created() {
    // this.createParams();
    // this.getBookings();
  }
};
</script>

<style scoped>
.bkg-component {
  background-color: #ffffff;
  color: #000000;
}

.bkg-component-title {
  background-color: #384860;
  color: white;
}

.bkg-component-light {
  background-color: #526482;
}
</style>

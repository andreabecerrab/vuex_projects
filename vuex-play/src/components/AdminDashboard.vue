<template>
  <v-container>
    <div :key="group.id" v-for="group in bookings">
      <admin-dashboard-row
        :group-id="group.group.groupId"
        :group-name="group.group.groupName"
        :status-array="group.group.status"
        :bookings="group.bookings"
      />
    </div>
  </v-container>
</template>

<script>
import AdminDashboardRow from "./AdminDashboardRow";

import { mapState, mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "AdminDahsboard",
  components: { AdminDashboardRow },
  data() {
    return {};
  },
  created() {
    //async call for groups
  },

  computed: {
    ...mapState({
      statusgroups: state => state.admindashboard.statusgroups,
      bookings: state => state.admindashboard.bookings
    })
  },
  mounted() {
    this.getStatusGroup();
  },
  methods: {
    ...mapActions({
      getStatusGroup: "admindashboard/getStatusGroup"
    })
  }
};
</script>

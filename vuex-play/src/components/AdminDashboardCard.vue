<template>
  <v-card class="color-top-border" color="background" min-width="510px">
    <v-card-title class="py-0">
      <v-row class="text-left">
        <v-col class="flex-column py-1" cols="6">
          <v-row class="flex-column">
            <v-col class="pb-0 pt-1">
              <h6 class="grey--text text--darken-1" style="line-height: 15px">
                {{ "BKG-" + this.bookingInformation.bookingId }}
              </h6>
            </v-col>
            <v-col class="py-0">
              <h3>{{ this.bookingInformation.reasonId.reason }}</h3>
            </v-col>

            <v-col class="py-0">
              <v-chip color="#92a2bd" class="py-0" dark small>
                {{ this.bookingInformation.bookingId }}
              </v-chip>
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="editBooking(bookingId)"
                >aproove</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "admin-dashboard-card",
  props: {
    bookingInformation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      bookingId: -1
    };
  },
  created() {
    this.bookingId = this.bookingInformation.bookingId;
  },
  methods: {
    ...mapActions({
      editBooking: "admindashboard/editBooking"
    })
  }
};
</script>

<style scoped>
.color-top-border {
  border-style: none none none solid;
  border-left-width: 4px;
}

.text-left {
  text-align: left;
}

.text-dates {
  font-size: 0.6em;
  font-weight: 600;
  line-height: 150%;
}
</style>

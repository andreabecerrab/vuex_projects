<template>
  <v-main class="mx-auto">
    <v-row>
      <!-- first card -->
      <v-card class=" mx-auto my-8" color="#6595fd" dark max-width="400">
        <v-card-text class="headline font-weight-bold">
          {{ user.profile.bio }}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row style="justify-content:center;">
      <!-- second card -->
      <v-card
        class=" my-8"
        color="#8cb0fe"
        dark
        max-width="400"
        v-for="profile in profiles"
        :key="profile.id"
      >
        <v-card-text class="headline font-weight-bold">
          {{ profile.user.name }}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title>{{ profile.bio }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-main>
</template>

<script>
import User from "../classes/User";
import Profile from "../classes/Profile";
export default {
  data: () => ({
    //
  }),
  beforeMount() {
    User.insert({
      data: [
        {
          id: 21,
          name: "Andrea",
          email: "andy@gmail.com",

          // add obj profile

          profile: {
            id: 8,
            bio: "Hey ! I´m web dev!",
            life_goal: "be happy"
          }
        },
        {
          id: 22,
          name: "New one",
          email: "new@gmail.com",

          // add obj profile

          profile: {
            id: 9,
            bio: "Some random data",
            life_goal: "be happy"
          }
        },
        {
          id: 23,
          name: "new new",
          email: "neww@gmail.com",

          // add obj profile

          profile: {
            id: 10,
            bio: "super new person",
            life_goal: "be happy"
          }
        }
      ]
    });
  },
  computed: {
    user() {
      return User.query()
        .with("profile")
        .find(21);
    },
    profile() {
      return Profile.query()
        .with("user")
        .find(8);
    },

    profiles() {
      return Profile.query()
        .with("user")
        .get();
    }
  }
};
</script>

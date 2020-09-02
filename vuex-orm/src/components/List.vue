<template>
  <v-card max-width="700" class="mx-auto my-8">
    <v-system-bar color="#fe6702" dark>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar dark color="#fd8433">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ user.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            class="my-2"
            color="#fea366"
            dark
            v-for="list in user.lists"
            :key="list.id"
          >
            <v-card-title class="headline">{{ list.id }}</v-card-title>

            <v-card-subtitle>{{ list.title }}.</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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

          lists: [
            {
              id: 54,
              title: "shopping"
            },
            { id: 55, title: "tasks" },
            { id: 56, title: "friends" }
          ]
        }
      ]
    });
  },
  computed: {
    user() {
      return User.query()
        .with("lists")
        .find(21);
    }
  }
};
</script>

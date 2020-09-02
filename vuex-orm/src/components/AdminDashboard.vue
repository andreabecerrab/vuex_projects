<template>
  <v-container>
    <v-row style="width: 800px; margin:0 auto;"
      ><v-text-field v-model="form.body" color="#3f7bfe"></v-text-field>
      <v-btn class="ma-2" color="#a2ad00" style="color:white;" @click="addItem">
        Add item
      </v-btn></v-row
    >
    <v-card
      class="mx-auto"
      max-width="800"
      style="margin-bottom:4rem !important;"
    >
      <v-toolbar color="#c7ce66" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>My Items</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list two-line subheader>
        <v-list-item v-for="item in items" :key="item.$id">
          <v-list-item-content>
            <v-list-item-title v-text="item.body"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <!-- second part (one-to-one-->
    <span>Welcome second part! (one-to-one)</span>
    <User />
    <!-- thrid part (one - to - many )-->
    <span>Welcome thrid part! (one-to-many)</span>
    <List />
  </v-container>
</template>

<script>
import Item from "../classes/Item";
import User from "./User";
import List from "./List";

export default {
  name: "input-items",
  components: {
    User,
    List
  },
  data() {
    return {
      form: {
        body: ""
      }
    };
  },

  computed: {
    user() {
      User.find(21);
    },
    items() {
      return Item.all();
    },

    list() {
      List.query()
        .with("items")
        .with("owner")
        .get();
    }
  },
  methods: {
    addItem() {
      //update , delete
      Item.insert({ data: this.form });
    }
  }
};
</script>

import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';

import Post from '../classes/Post';
import Comment from '../classes/Comment';

// Setup Vuex
Vue.use(Vuex);

// Setup Vuex-ORM database
const database = new VuexORM.Database();
database.register(Post);
database.register(Comment);

import installVuexORMGraphQL from '@vuex-orm/plugin-graphql';
VuexORM.use(installVuexORMGraphQL, {
	database: database,
	debug: process.env.NODE_ENV !== 'production',
});

// Create Vuex Store and register the Vuex ORM plugin.
export default new Vuex.Store({
	plugins: [VuexORM.install(database)],
});

<template>
	<v-container>
		<div class="blog">
			<article v-for="post in posts" :key="post.id" class="blog__post">
				<h2>{{ post.title }}</h2>
				<small>{{ post.publishedAt }}</small>
				<p>{{ post.content }}</p>
				<a href="#" @click.prevent="destroy(post)">Delete this post</a>
			</article>
		</div>
	</v-container>
</template>

<script>
import Post from "../classes/Post";

export default {
	name: "HelloWorld",

	data: () => ({}),
	beforeMount() {
		Post.insert({
			data: [
				{
					id: 1,
					title: "Some title",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
					publishedAt: "May 1998",
					comments: [
						{
							id: 100,
							author: "Andrea",
							content: "first comment",
							publishedAt: "May 1998",
						},
					],
				},
				{
					id: 2,
					title: "Second title",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
					publishedAt: "May 1999",
					comments: [
						{
							id: 100,
							author: "Andrea",
							content: "first comment",
							publishedAt: "May 1998",
						},
					],
				},
			],
		});
	},
	computed: {
		posts: () => Post.all(),
	},

	methods: {
		// Deletes the post from Vuex Store and from the server.
		async destroy(post) {
			post.$deleteAndDestroy();
		},
	},
};
</script>

<template>
	<v-app>
		<v-app-bar app color="#fddf66">
			<h2>vuex orm + graphql</h2>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
	import HelloWorld from './components/HelloWorld';

	export default {
		name: 'App',

		components: {
			HelloWorld,
		},

		data: () => ({
			//
		}),
	};
</script>

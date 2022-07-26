<template>
	<div class="site">
		<navigation-panel />

		<router-view v-slot="{ Component }">
			<transition mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
	import NavigationPanel from "@/components/NavigationPanel.vue";

	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},
		},
		components: {
			NavigationPanel,
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/variables";

	* {
		font-family: "Open Sans", sans-serif;
	}

	h1 {
		font-size: 4rem;
		font-weight: 700;
	}
	h2 {
		font-size: 2.4rem;
		font-weight: 500;
	}
	h3 {
		font-size: 2rem;
		font-weight: 600;
	}
	p {
		font-size: 1.6rem;
	}

	.main {
		margin-left: 30rem;
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;

		background-color: rgba($light-blue, $alpha: 0.2);
		padding: 3rem;
		&__title {
			margin-bottom: 2rem;
		}
	}
</style>

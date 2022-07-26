<template>
	<div class="confirm-modal">
		<div class="confirm-modal__body">
			<p class="confirm-modal__text">{{ text }}</p>

			<v-button
				text="Подтвердить"
				color="blue"
				@click="this.$emit('action_confirm', data)"
			></v-button>
			<v-button
				text="Отменить"
				color="white"
				@click="this.$emit('close_modal')"
			></v-button>
		</div>
	</div>
</template>

<script>
	import vButton from "@/components/UI/v-button.vue";

	export default {
		name: "ConfirmModal",
		props: {
			text: {
				value: String,
				default: "Confirm text",
			},
			data: [Object, Array],
		},
		components: { vButton },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.confirm-modal {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba($black, $alpha: 0.5);
		z-index: 3;
		&__body {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 4rem 3rem;
			padding: 3rem 4rem;
			border-radius: 0.6rem;
			background-color: $white;
			max-width: 60rem;
		}

		&__text {
			text-align: center;
			font-size: 2.4rem;
			grid-column: 1/3;
			line-height: 1.2;
			white-space: pre-wrap;
		}
		.v-button {
			font-size: 2rem;
		}
	}
</style>

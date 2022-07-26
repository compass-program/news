<template>
	<button type="button" class="v-button" :class="color">{{ text }}</button>
</template>

<script>
	export default {
		name: "v-button",
		props: {
			color: {
				value: String,
				default: "blue",
			},
			text: {
				value: String,
				default: "Button",
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-button {
		font-size: 1.6rem;
		font-weight: 500;
		border-radius: 0.6rem;
		padding: 1rem 2rem;
		background-color: transparent;
		transition: all 0.3s ease;
		&:hover {
			transform: translateY(-0.5rem);
			transition: all 0.2s ease;
		}
		&:active {
			transform: translateY(-0.2rem);
			transition: all 0.2s ease;
		}
		&:disabled {
			cursor: default;
			opacity: 0.5;
			&:hover {
				transform: none;
			}
		}
		&.blue {
			background-color: $blue;
			color: $white;
			&:hover {
				background-color: $white;
				color: $blue;
			}
		}
		&.bordered {
			border: 0.1rem solid $blue;
			color: $blue;
		}
		&.white {
			background-color: $white;
			color: $blue;

			&:hover {
				background-color: $blue;
				color: $white;
			}
		}
		&.delete {
			background-color: transparent;
			color: $red;
			outline: 0.1rem solid transparent;
			&:hover {
				outline-color: $red;
			}
			&:active {
				background-color: rgba($red, $alpha: 0.99);
				color: $white;
			}
		}
	}
</style>

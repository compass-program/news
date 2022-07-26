<template>
	<label class="v-checkbox">
		<input
			type="checkbox"
			class="v-checkbox__real"
			:checked="isChecked"
			@input="this.$emit('update:modelValue', $event.target.checked)"
		/>
		<span class="v-checkbox__fake"></span>
		<p class="v-checkbox__description" v-if="description">
			{{ description }}
		</p>
	</label>
</template>

<script>
	export default {
		name: "v-checkbox",
		props: {
			isChecked: {
				value: Boolean,
				default: false,
			},
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-checkbox {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 1rem;
		&__real {
			display: none;
			&:checked {
				+ .v-checkbox {
					&__fake {
						border-color: $blue;
						&::before {
							transform: translate(-50%, -50%) scale(1);
							background-color: $blue;
						}
					}
				}
			}
		}
		&__fake {
			position: relative;
			display: block;
			width: 2.4rem;
			height: 2.4rem;
			border: 0.1rem solid $gray;
			border-radius: 0.5rem;
			&::before {
				content: "";
				position: absolute;
				left: 50%;
				top: 50%;
				width: 1.2rem;
				height: 1.2rem;
				transform: translate(-50%, -50%) scale(0.5);
				transition: all 0.2s ease;
				background-color: transparent;
			}
		}
	}
</style>

<template>
	<label class="v-radio">
		<input
			type="radio"
			class="v-radio__real"
			:name="radio_group"
			@input="this.$emit('update:modelValue', value)"
		/>
		<span class="v-radio__fake"></span>
		<p v-if="description">{{ description }}</p>
	</label>
</template>

<script>
	export default {
		name: "v-radio",
		props: {
			radio_group: String,
			value: [String, Object],
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-radio {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 1rem;
		&__real {
			display: none;
			&:checked {
				+ .v-radio {
					&__fake {
						border-color: $blue;
						&::before {
							background-color: $blue;
							transform: translate(-50%, -50%) scale(1);
						}
					}
				}
			}
		}
		&__fake {
			position: relative;
			width: 2.4rem;
			height: 2.4rem;
			border: 0.1rem solid $gray;
			border-radius: 0.5rem;
			&::before {
				content: "";
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%) scale(0.5);
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 0.2rem;
				background-color: transparent;
				transition: all 0.2s ease;
			}
		}
		&__description {
		}
	}
</style>

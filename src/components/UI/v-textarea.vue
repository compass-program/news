<template>
	<label class="v-textarea">
		<p class="v-textarea__counter">Символов: {{ symbol_counter }}</p>
		<textarea
			class="v-textarea__input"
			@input="
				value = $event.target.value;
				this.$emit('update:modelValue', value);
			"
		></textarea>
	</label>
</template>

<script>
	export default {
		name: "vTextarea",
		computed: {
			symbol_counter() {
				return this.value.length;
			},
		},
		data: () => ({ value: "" }),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-textarea {
		&__counter {
			text-align: right;
			color: $gray;
			margin-bottom: 1rem;
			font-size: 1.2rem;
		}
		&__input {
			width: 100%;
			resize: vertical;
			max-height: 30rem;
			min-height: 10rem;
			border: 0.1rem solid $gray;
			border-radius: 0.6rem;
			padding: 1.5rem 2rem;
			transition: all 0.2s ease;
			&:hover {
				border-color: $black;
			}
			&:focus {
				border-color: $blue;
			}
		}
	}
</style>

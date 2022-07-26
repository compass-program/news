<template>
	<input
		:type="type"
		class="v-input"
		:placeholder="placeholder"
		@input="this.$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "v-input",
		props: {
			type: {
				value: String,
				default: "text",
			},
			placeholder: {
				value: String,
				default: "input placeholder",
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-input {
		background-color: $white;
		border-radius: 0.6rem;
		border: 0.1rem solid $gray;
		transition: all 0.2s ease;
		padding: 1.5rem 2rem;
		font-size: 1.6rem;
		width: 100%;
		&:hover {
			border-color: $black;
		}
		&:focus {
			border-color: $blue;
		}
	}
</style>

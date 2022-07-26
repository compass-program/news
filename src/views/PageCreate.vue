<template>
	<div class="page-create main">
		<h1 class="page-create__title">Добавить запись</h1>

		<form
			class="page-create__form"
			@submit.prevent="submit_form"
			ref="form"
		>
			<fieldset>
				<v-input
					placeholder="Введите имя"
					v-model="new_news.name"
				></v-input>
				<v-input
					type="email"
					placeholder="Введите email"
					v-model="new_news.email"
				></v-input>

				<div class="page-create__radio-group">
					<h3 class="page-create__radio-group-description">Пол</h3>
					<v-radio
						value="male"
						radio_group="gender"
						v-model="new_news.gender"
						description="Мужской"
					></v-radio>
					<v-radio
						value="female"
						radio_group="gender"
						v-model="new_news.gender"
						description="Женский"
					></v-radio>
				</div>

				<v-textarea v-model="new_news.message"></v-textarea>

				<v-checkbox
					description="Согласен на обработку персональных данных"
					v-model="new_news.agree"
					:isChecked="new_news.agree"
				></v-checkbox>

				<v-button
					type="submit"
					color="bordered"
					text="Отправить"
					:disabled="!isFormValid"
				></v-button>
			</fieldset>
		</form>
		<div class="page-create__result" v-if="isResultVisible">
			<p class="page-create__result-key">name:</p>
			<p class="page-create__result-value">{{ save_new_news.name }}</p>

			<p class="page-create__result-key">email:</p>
			<p class="page-create__result-value">{{ save_new_news.email }}</p>

			<p class="page-create__result-key">gender:</p>
			<p class="page-create__result-value">{{ save_new_news.gender }}</p>

			<p class="page-create__result-key">message:</p>
			<p class="page-create__result-value">{{ save_new_news.message }}</p>

			<p class="page-create__result-key">agree:</p>
			<p class="page-create__result-value">{{ save_new_news.agree }}</p>
		</div>
	</div>
</template>

<script>
	import vInput from "@/components/UI/v-input.vue";
	import vRadio from "@/components/UI/v-radio.vue";
	import vTextarea from "@/components/UI/v-textarea.vue";
	import vCheckbox from "@/components/UI/v-checkbox.vue";
	import vButton from "@/components/UI/v-button.vue";

	export default {
		name: "PageCreate",
		components: {
			vInput,
			vRadio,
			vTextarea,
			vCheckbox,
			vButton,
		},
		computed: {
			isFormValid() {
				let result = false;

				if (
					this.new_news.name.length > 0 &&
					this.new_news.email.length > 0 &&
					this.new_news.gender.length > 0 &&
					this.new_news.message.length > 0 &&
					this.new_news.agree === true
				) {
					result = true;
				}
				return result;
			},
		},
		data: () => ({
			isResultVisible: false,
			new_news: {
				name: "",
				email: "",
				gender: "",
				message: "",
				agree: false,
			},
			save_new_news: {
				name: "",
				email: "",
				gender: "",
				message: "",
				agree: false,
			},
		}),
		methods: {
			submit_form() {
				this.isResultVisible = true;
				this.save_new_news = { ...this.new_news };
				this.reset_form();
			},
			reset_form() {
				this.$refs.form.reset();

				for (const key in this.new_news) {
					if (Object.hasOwnProperty.call(this.new_news, key)) {
						if (key !== "agree") {
							this.new_news[key] = "";
						} else {
							this.new_news[key] = false;
						}
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-create {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, max-content);
		grid-gap: 2rem 4rem;

		&__title {
			grid-column: 1/3;
		}

		&__form {
			background-color: $white;
			padding: 2rem 3rem;
			fieldset {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}
		}
		&__radio-group {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
			&-description {
				width: 100%;
			}
		}

		.v-button {
			margin-left: auto;
		}

		&__result {
			padding: 2rem 3rem;
			background-color: $white;
			border: 0.1rem solid $blue;
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-template-rows: repeat(5, max-content);
			grid-gap: 2rem 5rem;
			&-key {
				color: $gray;
			}
			&-value {
			}
		}
	}
</style>

<template>
	<div class="news-card" :class="{ expanded: isExpanded }">
		<img
			src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
			alt="image"
			class="news-card__img"
		/>

		<div class="news-card__col">
			<h2
				class="news-card__title"
				@click="
					isExpanded == true
						? (isExpanded = false)
						: (isExpanded = true)
				"
			>
				{{ news.title }}
			</h2>
			<p class="news-cart__author">Id автора: {{ news.userId }}</p>
		</div>

		<v-button
			color="delete"
			text="Удалить"
			@click="this.$emit('confirm_delete_post', news)"
		></v-button>

		<p class="news-card__text" v-if="isExpanded">{{ news.body }}</p>
	</div>
</template>

<script>
	import vButton from "@/components/UI/v-button.vue";

	export default {
		name: "NewsCard",
		components: {
			vButton,
		},
		props: {
			news: {
				value: Object,
				required: true,
			},
		},
		data: () => ({
			isExpanded: false,
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.news-card {
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		align-items: center;
		gap: 4rem;
		background-color: $white;
		padding: 2rem 3rem;
		border-bottom: 0.1rem solid $gray;

		&.expanded {
			.news-card {
				&__title {
					color: $blue;
				}
			}
		}

		&__col {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__img {
			height: 10rem;
			width: 10rem;
			object-fit: cover;
		}

		&__title {
			transition: all 0.2s ease;
			cursor: pointer;
			&:hover {
				color: $blue;
			}
		}

		&__delete {
			background-color: transparent;
			color: $red;
			font-size: 1.6rem;
			font-weight: 500;
		}

		&__text {
			grid-column: 2/3;
		}
	}
</style>

<template>
	<div class="page-home main">
		<h1 class="main__title">Все новости</h1>

		<div class="page-home__main">
			<v-loader v-if="!news_loaded"></v-loader>

			<div class="page-home__list" v-else-if="news_loaded">
				<news-card
					v-for="item in news"
					:key="item.id"
					:news="item"
					@confirm_delete_post="confirm_delete_post"
				></news-card>
			</div>
		</div>

		<confirm-modal
			:data="selected_post"
			v-if="isConfirmModalOpen"
			@action_confirm="remove_post"
			@close_modal="close_modal"
			:text="`Вы уверены что хотите удалить новость:\n«${selected_post.title}»`"
		></confirm-modal>
	</div>
</template>

<script>
	import vLoader from "@/components/UI/v-loader.vue";
	import NewsCard from "@/components/News/NewsCard.vue";
	import ConfirmModal from "@/components/ConfirmModal.vue";

	import { delete_news } from "@/api/news";
	import { mapState, mapMutations, mapActions } from "vuex";

	export default {
		name: "PageHome",
		components: {
			vLoader,
			NewsCard,
			ConfirmModal,
		},
		computed: {
			...mapState({
				news: (state) => state.news.news,
				news_loaded: (state) => state.news.news_loaded,
			}),
		},
		data: () => ({
			selected_post: null,
			isConfirmModalOpen: false,
		}),
		methods: {
			...mapActions(["getNews"]),
			...mapMutations(["CLEAR_NEWS", "REMOVE_DELETED_NEWS"]),

			confirm_delete_post(post) {
				this.selected_post = post;
				this.isConfirmModalOpen = true;
			},

			async remove_post(post) {
				try {
					const response = await delete_news(post.id);
					if (response.status === 200) {
						this.REMOVE_DELETED_NEWS(post.id);
						this.isConfirmModalOpen = false;
					}
				} catch (err) {
					throw new Error(err);
				}
			},
			close_modal() {
				this.isConfirmModalOpen = false;
			},
		},
		created() {
			this.getNews();
		},
		beforeUnmount() {
			this.CLEAR_NEWS();
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		position: relative;
	}
</style>

import axios from 'axios';
import store from '@/store';

const delete_news = async (post_id) => {
	try {
		const response = await axios.delete(`${store.state.baseURL}/posts/${post_id}`);

		return response;
	}
	catch (err) { throw new Error(err) }
}

export { delete_news }
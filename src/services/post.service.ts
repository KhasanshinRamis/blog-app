import { IPost } from '@/interfaces/post.interface';
import axios from 'axios';

class PostService {
	private URL = `http://localhost:3000/api/posts`;

	async getBySlug(slug: string) {
		return axios.get<IPost>(`${this.URL}/${slug}`);
	}

	async getAll(page: number | '', category: string | '') {
		return axios.get<IPost>(`${this.URL}?page=${page}&category=${category || ''}`);
	}

	async post(newPost) {
		return axios.post(`${this.URL}`, newPost);
	}
}

export default new PostService();
import { Model } from '@vuex-orm/core';
import Post from './Post';

export default class Comment extends Model {
	static entity = 'comments';

	static fields() {
		return {
			id: this.uid(null),
			author: this.attr(''),
			content: this.attr(''),
			publishedAt: this.attr(''),

			postId: this.number(null),
			post: this.belongsTo(Post, 'postId'),
		};
	}
}

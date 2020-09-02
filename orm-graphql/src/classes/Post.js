import { Model } from '@vuex-orm/core';
import Comment from './Comment';

export default class Post extends Model {
	static entity = 'posts';

	static eagerLoad = ['comments'];

	static fields() {
		return {
			id: this.uid(null),
			title: this.attr(''),
			content: this.attr(''),
			publishedAt: this.attr(''),
			// relationships
			comments: this.hasMany(Comment, 'postId'),
		};
	}
}

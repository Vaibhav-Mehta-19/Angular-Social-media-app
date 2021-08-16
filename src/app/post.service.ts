import { Injectable } from '@angular/core';
import { Post } from './post.model';
@Injectable({ providedIn: 'root' })
export class PostService {
  // array of objects
  listOfPosts: Post[] = [
    new Post(
      'Nature 1',
      'Nature is a British weekly scientific ',
      'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Hampi 2',
      'Hampi is an ancient village in the south Indian',
      'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
      'test@test.com',
      new Date()
    ),
  ];
  getPosts() {
    return this.listOfPosts;
  }
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

}

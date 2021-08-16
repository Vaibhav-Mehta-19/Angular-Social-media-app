import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  router: any;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      alert('PLease neter the details');
      return;
    }
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const ob = new Post(
      title,
      description,
      imagePath,
      'test@test.com',
      new Date()
    );
    this.postService.addPost(ob);
    this.router.navigate(['/post-list']);
  }
}

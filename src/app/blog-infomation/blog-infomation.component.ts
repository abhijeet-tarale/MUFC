import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-blog-infomation',
  templateUrl: './blog-infomation.component.html',
  styleUrls: ['./blog-infomation.component.css']
})
export class BlogInfomationComponent implements OnInit {
	
	constructor(private activatedRoute: ActivatedRoute) {}
	
	 ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params: Params) => {
        let blogId = params['id'];
      });
	 }

}

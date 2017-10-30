import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

	public totalBlogCount = [{
		name : "Burno Mars",
		category : "Music",
		image : "assets/images/mu logo 2.gif"

	},
	 {
		 name : "Manchester United",
		 category: "Sports",
		image : "assets/images/mu logo 2.gif"
	 },
	 {
		 name : "Manchester United",
		 category: "Sports",
		image : "assets/images/mu logo 2.gif"
	 },
	 {
		 name : "Manchester United",
		 category: "Sports",
		image : "assets/images/mu logo 2.gif"
	 }
	];
  	constructor() { }

	ngOnInit() {
	}

}

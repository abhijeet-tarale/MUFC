import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

	public slides = [
		{
			image : "./assets/images/mufc2.jpg",
			text : "MUFC 1"
		},
		{
			image : "./assets/images/mu logo 2.gif",
			text : "MUFC 2"
		}
	]
	
	constructor() { }

  	ngOnInit() {
  	}

}

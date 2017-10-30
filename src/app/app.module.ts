import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogInfomationComponent } from './blog-infomation/blog-infomation.component';


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path:'home',
		component: BlogsComponent
	},
	{
		path: 'BlogInfo',
		component: BlogInfomationComponent
	}
];


@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    BlogsComponent,
    BlogInfomationComponent
  ],
  imports: [
    BrowserModule,
	NgbModule.forRoot(),
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

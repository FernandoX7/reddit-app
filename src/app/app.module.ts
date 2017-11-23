import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Home} from '../pages/home/home';
import {HomeItemDetail} from '../pages/home-item-detail/home-item-detail';
import {ThumbnailImage} from "../pages/popups/thumbnail-image";
import {SortFeedPopover} from "../pages/home/sort-feed-popover";
import {UserSearch} from "../pages/user-search/user-search";
import {SortUserFeedPopover} from "../pages/user-search/sort-user-feed-popover";
import {CommentsList} from "../pages/comments/comments-list/comments-list";
import {MomentModule} from "angular2-moment";
import {Constants} from "../pages/util/Constants";
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {RedditService} from "../services/reddit-service";
import {ZoomPanDirective} from "../directives/zoom-pan";

@NgModule({
  declarations: [
    MyApp,
    Home,
    HomeItemDetail,
    ThumbnailImage,
    SortFeedPopover,
    UserSearch,
    SortUserFeedPopover,
    CommentsList,
    ZoomPanDirective
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {mode: 'md'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    HomeItemDetail,
    ThumbnailImage,
    SortFeedPopover,
    UserSearch,
    SortUserFeedPopover
  ],
  providers: [
    Constants,
    StatusBar,
    SplashScreen,
    RedditService
  ]
})

export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CapitalizePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

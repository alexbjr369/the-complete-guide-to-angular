import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './services/account/account.service';
import { LoggingService } from './services/logging/logging.service';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { UserService } from './services/UserService';
import { PageComponent } from './layout-editor/page/page.component';
import { RowComponent } from './layout-editor/row/row.component';
import { ColumnComponent } from './layout-editor/column/column.component';
import { WidgetComponent } from './layout-editor/widgets/widget/widget.component';
import { HeadingComponent } from './layout-editor/widgets/heading/heading.component';
import { ParagraphComponent } from './layout-editor/widgets/paragraph/paragraph.component';
import { WidgetToolbarComponent } from './layout-editor/widgets/widget-toolbar/widget-toolbar.component';
import Model from './models/Model';
import { ColumnToolbarComponent } from './column-toolbar/column-toolbar.component';
import LayoutService from './services/LayoutService';
import { WebsiteListComponent } from './website-list/website-list.component';
import WebsiteService from './services/WebsiteService';
import { PageListComponent } from './page-list/page-list.component';
import PageService from './services/PageService';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageRowComponent } from './page-row/page-row.component';
import { PageColumnComponent } from './page-column/page-column.component';
// import { WidgetEditorComponent } from './widget-editor/widget-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PageComponent,
    RowComponent,
    ColumnComponent,
    WidgetComponent,
    HeadingComponent,
    ParagraphComponent,
    WidgetToolbarComponent,
    ColumnToolbarComponent,
    WebsiteListComponent,
    PageListComponent,
    PageEditorComponent,
    PageRowComponent,
    PageColumnComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide:WebsiteService,useClass:WebsiteService},
    {provide:PageService,useClass:PageService},
    {provide:UserService,useClass:UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

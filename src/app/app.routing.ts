import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import {PageComponent} from './layout-editor/page/page.component';
import {WebsiteListComponent} from './website-list/website-list.component';
import {PageListComponent} from './page-list/page-list.component';
import {PageEditorComponent} from './page-editor/page-editor.component';
// import {WidgetEditorComponent} from './widget-editor/widget-editor.component';

const appRoutes: Routes = [
  { path: 'layout', component: PageComponent },
  // { path: 'layout/edit/widget/:wid', component: WidgetEditorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'websites', component: WebsiteListComponent},
  { path: 'websites/:websiteId/pages', component: PageListComponent},
  { path: 'websites/:websiteId/pages/:pageId', component: PageEditorComponent}
];
export const routing =
  RouterModule.forRoot(appRoutes);

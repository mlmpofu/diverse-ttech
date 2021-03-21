import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';



const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: 'about-page', component: AboutComponent },
  {path: 'faq', component: FaqComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(arg0: { path: string; component: any; }[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}

export const routingComponent = [
HomeComponent,  NavBarComponent, AboutComponent, FaqComponent, TeamComponent, ContactsComponent
]

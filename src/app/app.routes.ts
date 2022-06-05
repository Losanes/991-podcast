import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { ListComponent } from "./list/list.component";
import { PlayComponent } from "./play/play.component";

export const AppRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'play/:id', component: PlayComponent},
    {path: 'info', component: InfoComponent}
]
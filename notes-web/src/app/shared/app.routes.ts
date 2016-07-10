import {RouterConfig, provideRouter} from "@angular/router";
import {NaLoginComponent} from "../na-login/na-login.component";
import {NaNewAccountComponent} from "../na-new-account/na-new-account.component";

/**
 * Created by atilla8huno on 06/07/16.
 */

export const routes: RouterConfig = [
    {path: '', component: NaLoginComponent},
    {path: 'signin', component: NaLoginComponent},
    {path: 'signup', component: NaNewAccountComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
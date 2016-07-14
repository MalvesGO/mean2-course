import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {User} from "../model/user";
import {AuthService} from "../shared/auth.service";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-login',
    templateUrl: 'na-login.component.html',
    styleUrls: ['na-login.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NaLoginComponent {
    public user: User = new User(null, null, null, null);
    
    constructor(private authService: AuthService, private _router: Router) {}
    
    login() {
        this.authService.signIn(this.user).subscribe(() => {
            this._router.navigate(['/notes']);
        });
    }
}
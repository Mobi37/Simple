import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

interface IUser {
  name: string;
};

export class UserResolveService implements Resolve<IUser> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser>{
    return of( { name: "Tom" } );
  };

}

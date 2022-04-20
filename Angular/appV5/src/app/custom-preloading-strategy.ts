import { PreloadingStrategy, Route } from "@angular/router";
import { delay, Observable, of, switchMap } from "rxjs";

export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    
    preload(route: Route, fn: () => Observable<any>): Observable<any>{
        
        if( route.data && route.data["noreload"] ){
            return of(null);
        }
    
        return of( true ).pipe( delay(2000), switchMap( ( someValue: boolean ) => fn() ) )

    }
}
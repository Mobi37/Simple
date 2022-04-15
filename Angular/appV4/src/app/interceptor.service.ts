import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { observable, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ params: req.params.set("x", '5') });

    return next.handle(request).pipe(retry(2), catchError( error => {

      if(error.status === 401){
        console.log(error.error.message);
      }
      
      return throwError( () => error )
    } ) );
  }

}

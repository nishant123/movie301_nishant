import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * @param globalErrorHandler GlobalErrorHandler Service
  */
  constructor(  ) { }

  /**
    * @param next
    * Interceptor function to perform intermediary functions in request and responses
  **/

  // tslint:disable-next-line:cyclomatic-complexity
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-parameter-reassignment
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    return next.handle(req).do((response: HttpEvent<any>) => {
        //
    });
  }

}

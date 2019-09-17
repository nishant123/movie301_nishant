import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { SnackBarService } from '../Snack-Bar/snack-bar.service';
import { LogService } from '../../shared/service/log.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private snackbar: SnackBarService, private logger: LogService) { }
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const badRequest: RegExp = new RegExp('^[4][0-9][0-9]?$|^410$'); // 400 level errors
        // tslint:disable-next-line:cyclomatic-complexity
        return next.handle(request).catch((err: HttpErrorResponse) => {
            if (badRequest.test(err.status.toString())) {
                const statusCode = err.status;
                if (statusCode === 408) {
                    this.snackbar.error('Request Timeout');
                    return throwError('Request Timeout');
                } else if (statusCode === 404) {
                    const storageVal = {
                        warning: this.logger.warn(' Not found'),
                        information: this.logger.info(err.status + ' Not found'),
                        ErrorInfo: this.logger.error(err.status + ' Not found'),
                        fatal: this.logger.fatal(err.status + ' Not found'),
                        logger: this.logger.log(err.status)
                      };
                      sessionStorage.setItem('Error Logger defined', JSON.stringify(storageVal));
                    this.snackbar.error(err.status + ' Not found');
                    return throwError(err.status);
                } else if (statusCode === 406) {
                    return throwError(err.status);
                }
            }
        });
    }
}
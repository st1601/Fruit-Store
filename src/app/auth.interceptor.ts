import { FruitService } from './service/fruit.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private fruitService: FruitService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.fruitService.isLogIn()) {
      let authRequest = request.clone({
        setHeaders: {
          authorization: 'Bearer ' + this.fruitService.getToken(),
        },
      });

      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}

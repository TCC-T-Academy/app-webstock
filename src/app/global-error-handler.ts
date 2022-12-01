import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ErrorService } from "./error.service";
import { NotificationService } from "./notification.service";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
    
    constructor(private injector:Injector){}
    
    handleError(error: Error | HttpErrorResponse): void {
        const errorService = this.injector.get(ErrorService);
        const notifier = this.injector.get(NotificationService);

        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Server error
            message = errorService.getServerErrorMessage(error);
            //stackTrace = errorService.getServerErrorStackTrace(error);
            notifier.showError(message);
          } else {
            // Client Error
            message = errorService.getClientErrorMessage(error);
            notifier.showError(message);
            
          }
          // Always log errors
          console.error(error);
    }
}

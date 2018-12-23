import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  group: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {

  constructor(private http: HttpClient) { }

  createUser(user): Observable<void> {
   return this.http
   .post<any>(this.newMethod().create, user)
   .pipe(
     retry(2)
     );
  }

  private newMethod() {
    return environment.endpoint;
  }

  listUsers(): Promise<User[]> {
    return this.http.get<User[]>(environment.endpoint.users)
      .toPromise();
  }


}

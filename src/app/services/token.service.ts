import { Injectable } from '@angular/core';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token = '';
  public user: User;

  constructor() { }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private caminhoPadrao = "https://covid19-brazil-api.now.sh/api/report/v1";

  constructor(public http:HttpClient) { }
   
   public getCasoscv19(){
     return this.http.get(this.caminhoPadrao);
   }
}
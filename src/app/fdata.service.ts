import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FdataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://localhost:7135/api/Products')
  }
  postdata(datavalue:Data){
    this.http.post('https://localhost:7135/api/Products', datavalue).subscribe(
      res=>console.log(res),err=>console.log(err)
    )
   
  }
  delete(id:Number){
      this.http.delete(`https://localhost:7135/api/Products/${id}`).subscribe(obj=>console.log("data deleted"),err=>console.log("error occured")
      )
  }
}

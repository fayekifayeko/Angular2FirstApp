import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService{
    constructor(private http:Http){
console.log("service started");
    }
    getallposte(){
        return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res=>res.json());
    }
}

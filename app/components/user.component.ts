import { Component } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
    moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html'
  ,
  providers:[PostService],
  
})
export class UserComponent  { 
  name:string; 
email:string;
adress:adress;
hobbies:string[];
showhobbies:boolean;
posts:posts[];
constructor(private postservice:PostService){
    console.log("user run");
    this.name= 'Fayek'; 
this.email='fayekmir@gmail.com';
this.adress={
  street:'hedregatan',
  post:'23144',
  city:'Trelleborg'
};
this.hobbies=['Music','Sport','Poetry'];
this.showhobbies=false;
this.postservice.getallposte().subscribe(posts=>{
this.posts=posts;
});
}
ShowMyHobbies(){
    console.log(this.showhobbies);
    this.showhobbies=!this.showhobbies;
}
addhobby(hobby){
    this.hobbies.push(hobby);
}
deletehobby(i){
    this.hobbies.splice(i,1);
}
}
interface adress{
    street:string;
    post:string;
    city:string;
}
interface posts{
    id:number;
    title:string;
    body:string;
}
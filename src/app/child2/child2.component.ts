import { Component } from '@angular/core';
import { FdataService } from '../fdata.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component {
  p:number=0;
  removedlist:Array<any> = [];
 errorMessage:string="";
  flist:Array<any>=[];
  dir:string=''
  // Data = [
  //   {
  //     title: 'Topic1',
  //     children: [
  //       { title: 'Topic1.1', children: [] },
  //       {
  //         title: 'Topic1.2',
  //         children: [
  //           { title: 'Topic1.2.1', children: [] },
  //           {
  //             title: 'Topic1.2.2',
  //             children: [
  //               { title: 'Topic1.2.2.1', children: [] },
  //               { title: 'Topic1.2.2.2', children: [] },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Topic2',
  //     children: [
  //       { title: 'Topic2.1', children: [] },
  //       {
  //         title: 'Topic2.2',
  //         children: [
  //           { title: 'Topic2.2.1', children: [] },
  //           { title: 'Topic2.2.2', children: [] },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  filter={
    "Directors": ["Prabhu Deva", "Sidharth Anand", "Farhad Samji"],
  
    "Movies": [
      {
        "MovieID": 1,
  
        "MovieName": "Pathan"
      },
  
      {
        "MovieID": 2,
  
        "MovieName": "Dabang 3"
      },
  
      {
        "MovieID": 3,
  
        "MovieName": "Kisi Ka bhai Kisi ki Jaan"
      },
  
      {
        "MovieID": 4,
  
        "MovieName": "Any Body can Dance"
      }
    ],
  
    "Actors": [
      "Shahrukh Khan",
  
      "Deepika Padukone",
  
      "John Abraham",
  
      "Sonakshi Sinha",
  
      "Salman Khan",
  
      "Pooja Hegde",
  
      "Salman Khan",
  
      "Prabhu Deva",
  
      "Punit Pathak",
  
      "Ganesh Acharya",
  
      "Noorin sha"
    ]
  }
  movies=[
    {
      "MovieID": 1,
  
      "MovieName": "Pathan",
  
      "Details": {
        "DirectorName": "Sidharth Anand",
  
        "ActorsNames": ["Shahrukh Khan", "Deepika Padukone", "John Abraham"],
  
        "VideoLink": "https://tutorial.radixind.in/videos/Pathaan.mp4"
      }
    },
  
    {
      "MovieID": 2,
  
      "MovieName": "Dabang 3",
  
      "Details": {
        "DirectorName": "Prabhu Deva",
  
        "ActorsNames": ["Sonakshi Sinha", "Salman Khan"],
  
        "VideoLink": "https://tutorial.radixind.in/videos/KKBKKJ.mp4"
      }
    },
  
    {
      "MovieID": 3,
  
      "MovieName": "Kisi Ka bhai Kisi ki Jaan",
  
      "Details": {
        "DirectorName": "Farhad Samji",
  
        "ActorsNames": ["Pooja Hegde", "Salman Khan"],
  
        "VideoLink": "https://tutorial.radixind.in/videos/Dabaang3.mp4"
      }
    },
  
    {
      "MovieID": 4,
  
      "MovieName": "Any Body can Dance",
  
      "Details": {
        "DirectorName": "Prabhu Deva",
  
        "ActorsNames": [
          "Prabhu Deva",
  
          "Punit Pathak",
  
          "Ganesh Acharya",
  
          "Noorin sha"
        ],
  
        "VideoLink": "https://tutorial.radixind.in/videos/abcd.mp4"
      }
    }
  ]
  fun(val:string){

      this.flist=  this.movies.filter(obj=>obj.Details.DirectorName==val)
  }

  add(id:number){
    this.datarr.push(this.datarr.splice(this.removedlist.findIndex(obj=>obj.id==id),1))
  }
  datarr:Array<any>=[]
  datatopost!:FormGroup
  constructor(private data:FdataService,private fb:FormBuilder){
    this.data.getData().subscribe(data => this.datarr=data as any,(error) => {                           
      alert(error.message)
    });
    this.datatopost=this.fb.group({
      name: [""],
      price: [],
      status: [""],
      createdDate:[""]
    })
  }
  remove(id:number){
    this.removedlist.push(this.datarr.splice(this.datarr.findIndex(obj=>obj.id==id),1));
    this.data.delete(id)
    console.log(this.removedlist);
  }
  upload(){
    this.data.postdata(this.datatopost.value)
    this.datatopost.reset();
    this.data.getData().subscribe(data => this.datarr=data as any,(error) => {                           
      alert(error.message)
    });
  }
}

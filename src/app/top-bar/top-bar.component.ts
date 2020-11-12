import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const apiData = ajax('/api/data').pipe(
    //   retry(3),
    //   map(res => {
    //     if (!res.response) {
    //       throw new Error('Value expected!');
    //     }
    //     return res.response;
    //   }),
    //   catchError(err => {
    //     return of([])
    //   })
    // );
    
    // apiData.subscribe({
    //   next(x) { 
    //     console.log('data: ', x); 
    //   },
    //   error(err) { 
    //     console.log('errors already caught... will not run');
    //   }
    // });
  }

}
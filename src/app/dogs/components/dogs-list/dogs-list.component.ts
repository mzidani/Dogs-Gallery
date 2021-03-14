import { Component, OnInit, Input } from '@angular/core';
import {Dog, DogsList} from '../../entities/dogs.interface';

@Component({
  selector: 'dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

  @Input() dogsList: DogsList;
  dogsSlice: Dog[];
  start: number = 0;
  end: number = 4;

  constructor() { }

  ngOnInit(): void {
    this.getDogsSlice();
  }

  getDogsSlice(): void {
    this.dogsSlice = this.dogsList.dogs.slice(this.start,this.end);
  }

  moveSlide(num: number) {
    if (num > 0 && !(this.end >= this.dogsList.dogs.length)) {
      this.start++;
      this.end++;
    } else {
      if (this.start > 0) {
        this.start--;
        this.end--;
      }
    }
    this.getDogsSlice();
    console.log(this.start,this.end);
  }
}

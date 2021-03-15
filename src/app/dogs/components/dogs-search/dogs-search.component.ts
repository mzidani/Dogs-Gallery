import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../entities/dogs.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'dogs-search',
  templateUrl: './dogs-search.component.html',
  styleUrls: ['./dogs-search.component.css']
})
export class DogsSearchComponent implements OnInit {

  @Input() dogs: Dog[];
  height = 240;

  constructor() { }

  ngOnInit(): void {
  }

  getWidth(width: number, height: number): number {
    let dimension = (this.height * 100) / height;
    return width * dimension / 100;
  }

}

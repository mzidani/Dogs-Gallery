import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // holds information about the route to this instance
import { Location } from '@angular/common';
import {DogsService} from '../../dogs.service';
import {Image} from '../../entities/dogs.interface';
import {Subscription} from 'rxjs'; // is an Angular service for interacting with the browser

@Component({
  selector: 'app-dogs-detail',
  templateUrl: './dogs-detail.component.html',
  styleUrls: ['./dogs-detail.component.css']
})
export class DogsDetailComponent implements OnInit, OnDestroy {

  dogImage: Image;
  dogSubscribtion$: Subscription;
  width = 700;

  constructor(private route: ActivatedRoute, private location: Location, private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getDogImageDetails();
  }

  getDogImageDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dogSubscribtion$ = this.dogsService.getDog(id).subscribe(dog => this.dogImage = dog);
  }

  ngOnDestroy(): void {
    this.dogSubscribtion$.unsubscribe();
  }


  getHeight(): number {
    let dimension = (this.width * 100) / this.dogImage.width;
    return this.dogImage.height * dimension / 100;
  }

  /*
  getWidth(width: number, height: number): number {
    let dimension = (this.height * 100) / height;
    return width * dimension / 100;
  }*/

}

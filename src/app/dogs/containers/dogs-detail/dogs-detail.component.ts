import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // holds information about the route to this instance
import { Location } from '@angular/common';
import {DogsService} from '../../dogs.service';
import {Subscription} from 'rxjs';
import {Adopter, Image} from "../../entities/dogs.interface"; // is an Angular service for interacting with the browser

@Component({
  selector: 'app-dogs-detail',
  templateUrl: './dogs-detail.component.html',
  styleUrls: ['./dogs-detail.component.css']
})
export class DogsDetailComponent implements OnInit, OnDestroy {

  dogImage: Image;
  dogSubscribtion$: Subscription;
  width = 700;
  height = 600;
  count: number = 0;

  constructor(private route: ActivatedRoute, private location: Location, private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getDogImageDetails();

  }

  getDogImageDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dogSubscribtion$ = this.dogsService.getDog(id).subscribe(dog => {
      this.dogImage = dog;
      this.getAdoptersCount(dog);
    });
  }

  ngOnDestroy(): void {
    this.dogSubscribtion$.unsubscribe();
  }

  getAdoptersCount(dog: Image) {
    this.dogSubscribtion$ = this.dogsService.getAdopters().subscribe(adopters => {
      this.count = adopters.filter(a => a.dogId == dog.breeds[0].id).length;
      console.log("count : "+this.count);
    });
  }

  getHeight(): number {
    let dimension = (this.width * 100) / this.dogImage?.width;
    console.log(this.dogImage?.height * dimension / 100);
    return this.dogImage?.height * dimension / 100;
  }


  getWidth(): number {
    let dimension = (this.height * 100) / this.dogImage?.height;
    return this.dogImage?.width * dimension / 100;
  }

  addAdopter(adopter: Adopter) {
    this.dogSubscribtion$ = this.dogsService.addAdopter(adopter).subscribe();
    this.ngOnInit();
  }
}

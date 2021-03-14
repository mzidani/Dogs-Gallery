import {Component, OnDestroy, OnInit} from '@angular/core';
import {DogsService} from '../../dogs.service';
import {Dog, DogsList} from '../../entities/dogs.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'dogs-dashboard',
  templateUrl: './dogs-dashboard.component.html',
  styleUrls: ['./dogs-dashboard.component.css']
})
export class DogsDashboardComponent implements OnInit, OnDestroy {

  dogs: Dog[];
  dogsSubscribtion$: Subscription;
  dogSlice: Dog[];
  dogsLists : DogsList[] = [];
  breeds: string[] = [];
  start: number = 0;
  end: number = 3;

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.dogsSubscribtion$ = this.dogsService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
      dogs.map(dog => {
        if(this.breeds.indexOf(dog.breed_group) == -1 && dog.breed_group) {
          this.breeds.push(dog.breed_group);
        }
      });
      this.breeds.push("Not given");
      this.breeds.map(breed => this.dogsLists.push(
        {
          breed: breed,
          dogs: dogs.filter(dog => dog.breed_group == breed)
        }));

      this.dogsLists.filter(list => list.breed == "Not given")[0].dogs = dogs.filter(dog => !dog.breed_group);
    });
  }

  ngOnDestroy(): void {
    this.dogsSubscribtion$.unsubscribe();
  }

}

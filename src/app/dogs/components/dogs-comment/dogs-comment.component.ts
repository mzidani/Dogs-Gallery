import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Adopter} from "../../entities/dogs.interface";

@Component({
  selector: 'dogs-comment',
  templateUrl: './dogs-comment.component.html',
  styleUrls: ['./dogs-comment.component.css']
})
export class DogsCommentComponent implements OnInit {

  @Input() count: number;
  @Output() add: EventEmitter<Adopter> = new EventEmitter<Adopter>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    this.add.emit(f.value);
  }
}

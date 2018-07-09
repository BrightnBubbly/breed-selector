import { Component, OnInit } from '@angular/core';
import { Breed } from '../breed';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  breed: Breed = {
    name: 'Golden Retriever',
    type: 'Working Dog',
    weight: 50,
    height: 24,
    color: 'golden, red, cream',
    coat: 'long',
    kids: true,
    apartments: false,
    hot: false,
    cold: true,
    description: 'they are nice.',
  };

  constructor() {}

  ngOnInit() {}
}

import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit('Nota ' + this.rating);
  }

}

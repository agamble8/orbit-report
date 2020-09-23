import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  // debris: number = 0;
  // communication: number = 0;
  // probe: number = 0;
  // position: number = 0;
  // station: number = 0;
  // telescope: number = 0;

  public countsObject: Counts; 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.satCounts(this.satellites);
  }

  satCounts(satllites: object) : void {
    this.countsObject = new Counts();

    for(let i=0; i<this.satellites.length; i++) {
      let satType = this.satellites[i].type.toLowerCase();
      if (satType === "space debris") {
        this.countsObject.debris += 1;
      } else if (satType === "communication") {
        this.countsObject.communication += 1;
      } else if (satType === "probe") {
        this.countsObject.probe += 1;
      } else if (satType === "positioning") {
        this.countsObject.position += 1;
      } else if (satType === "space station") {
        this.countsObject.station += 1;
      } else if (satType === "telescope") {
        this.countsObject.telescope += 1;
      } else {
        return;
      }
    }
  }

}

export class Counts {
  debris: number = 0;
  communication: number = 0;
  probe: number = 0;
  position: number = 0;
  station: number = 0;
  telescope: number = 0;
}

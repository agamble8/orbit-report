import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  debris: number = 0;
  communication: number = 0;
  probe: number = 0;
  position: number = 0;
  station: number = 0;
  telescope: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.satCounts(this.satellites);
  }

  satCounts(satllites: object) : void {
    this.debris = 0;
    this.communication = 0;
    this.probe = 0;
    this.position = 0;
    this.station = 0;
    this.telescope = 0;
    for(let i=0; i<this.satellites.length; i++) {
      let satType = this.satellites[i].type.toLowerCase();
      if (satType === "space debris") {
        this.debris +=1;
      } else if (satType === "communication") {
        this.communication +=1;
      } else if (satType === "probe") {
        this.probe +=1;
      } else if (satType === "positioning") {
        this.position +=1;
      } else if (satType === "space station") {
        this.station +=1;
      } else if (satType === "telescope") {
        this.telescope +=1;
      } else {
        return;
      }
    }
  }


}

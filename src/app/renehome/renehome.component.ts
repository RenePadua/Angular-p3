import { Component, OnInit } from '@angular/core';
import { RenetimerService } from '../renetimer.service';

@Component({
  selector: 'app-renehome',
  templateUrl: './renehome.component.html',
  styleUrls: ['./renehome.component.css']
})
export class RenehomeComponent implements OnInit {

  constructor(public timer: RenetimerService) { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { RenetimerService } from '../renetimer.service';

@Component({
  selector: 'app-renehistory',
  templateUrl: './renehistory.component.html',
  styleUrls: ['./renehistory.component.css']
})
export class RenehistoryComponent implements OnInit {

  constructor(public timer: RenetimerService) { }

  ngOnInit() {
  }

}
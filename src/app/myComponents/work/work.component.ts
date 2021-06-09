import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}

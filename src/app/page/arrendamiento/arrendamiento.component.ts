import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arrendamiento',
  templateUrl: './arrendamiento.component.html',
  styleUrls: ['./arrendamiento.component.css']
})
export class ArrendamientoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

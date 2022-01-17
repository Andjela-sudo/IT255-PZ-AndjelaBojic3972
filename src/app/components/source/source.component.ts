import { Component, Input, OnInit } from '@angular/core';
import { Source } from 'src/app/models/source.model';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  @Input()
  public source: Source;
  constructor() { }

  ngOnInit(): void {
  }

}

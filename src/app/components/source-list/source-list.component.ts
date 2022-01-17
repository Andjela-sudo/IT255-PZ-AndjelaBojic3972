import { Component, OnInit } from '@angular/core';
import { Source } from 'src/app/models/source.model';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit {

  public sources:Source[] = [];
  constructor(private sourceService: SourceService) {
    this.sourceService.getSources().subscribe((sources)=>{
      console.log(sources);
      this.sources = sources;
      console.log(this.sources);
    });
  }

  ngOnInit(): void {
  }

}

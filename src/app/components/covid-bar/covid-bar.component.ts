import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/app/services/covid-api.service';

@Component({
  selector: 'app-covid-bar',
  templateUrl: './covid-bar.component.html',
  styleUrls: ['./covid-bar.component.css']
})
export class CovidBarComponent implements OnInit {

  public status: any ;
  constructor(private covidApiService:CovidApiService) {
    this.covidApiService.getStatus().subscribe((data)=>{
      

      this.status = data;
      console.log(this.status);
    });
   }

  ngOnInit(): void {
  }

}

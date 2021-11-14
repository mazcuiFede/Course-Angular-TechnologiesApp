import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  
  public technologies: Technology[] = [];

  constructor(public _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getTechnologies().subscribe((technologies: Technology[]) => {
      this.technologies = technologies["data"]
    })
  }

}

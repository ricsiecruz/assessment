import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessment';

  API_URL = 'assets/data.json'

  countries: any;
  sections: any;
  section_two: any;
  bottles: any;
  section_five: any;
  articles: any;
  carousel: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(res => {
      console.log('res', res, res.countries);
      this.countries = res.countries;
      this.sections = res.sections;
      this.section_two = res.section_two;
      this.bottles = res.bottles;
      this.section_five = res.section_five;
      this.articles = res.articles;
      this.carousel = res.carousel;
    });
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }

}

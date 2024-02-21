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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(res => {
      console.log('res', res, res.countries);
      this.countries = res.countries;
      this.sections = res.sections;
    });
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }

}

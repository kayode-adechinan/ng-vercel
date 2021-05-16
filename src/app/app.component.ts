import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-vercel';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .post('https://ng-vercel-peach.vercel.app/api', {
        message: 'hello',
      })
      .subscribe((res) => {
        console.log(res);

        this.http
          .get('https://ng-vercel-peach.vercel.app/api')
          .subscribe((r) => {
            console.log(r);
          });
      });
  }
}

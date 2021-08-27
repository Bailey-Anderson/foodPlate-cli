import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foodUrl: string = 'http://localhost:3004/foodItems';
  foodRequest = new HttpRequest('GET', this.foodUrl, {reportProgress: true});

  loadFood() {
    return this.http.get(this.foodUrl);
  }

  getFoodsProgress() {
    this.http.request(this.foodRequest).subscribe(event => {
      const totalBytes = 53370429;
      if(event.type === HttpEventType.DownloadProgress) {
        const percentDone = Math.round(100 * event.loaded / totalBytes);
        console.log(`File is ${percentDone} downloaded`);
      } else if (event instanceof HttpResponse) {
        console.log(`File is completely downloaded`)
      }
    });
  }

  constructor(private http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient){}

  getMovies(){
    return this.http.get("https://api.tvmaze.com/shows?page=1").pipe(
      map((response: any) => {
        return response.slice(0, 10).map((show: any) => ({
          id: show.id,
          title: show.name,
          description: show.summary ? show.summary.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : 'No description',
          price: 15, // Dummy price for tickets
          images: show.image ? show.image.medium : 'https://via.placeholder.com/300x200?text=No+Image',
          category: show.genres.join(', '),
          rating: { rate: show.rating.average || 4.5, count: 100 } // Rating
        }));
      })
    );
  }
}

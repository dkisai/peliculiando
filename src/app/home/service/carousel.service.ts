import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzUzODMxZDliMjFjNGQwZWQ0MTliOTY2ZGJjYWMxMiIsInN1YiI6IjY1NTZiZDBjYjU0MDAyMTRkMjdiOTEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aGuhMv2Ugod1T4zAnFxULk8t20z_qsTGhYSIPNwLECc';
  private headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${this.token}`
  }
  constructor(private httpClient: HttpClient) { }

  public async get(): Promise<any> {
    let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    return await lastValueFrom(this.httpClient.get(url, { observe: 'response', headers: this.headers }).pipe(map((response: any) => { return response })));
  }
}

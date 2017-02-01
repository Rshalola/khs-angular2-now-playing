import {Injectable} from "@angular/core";
import {Movie} from "./movie.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    nowPlaying(): Observable<Movie[]> {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6')
            .map(response => response.json().results as Movie[])
    }

    movie(id: number): Observable<Movie> {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6')
            .map(response => response.json() as Movie)
    }
}
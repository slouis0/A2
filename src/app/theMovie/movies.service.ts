import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private chave = "a288a7c3860731d5d854fbe548b1e695";
  private caminhoPadrao = "https://api.themoviedb.org/3";

  constructor(public http:HttpClient) { }

  public getPopularMovies(page = 1, language = "eng"){
    let filmes = `${this.caminhoPadrao}/movie/popular?page=${page}&language=${language}&api_key=${this.chave}`
    return this.http.get(filmes);
  }
}

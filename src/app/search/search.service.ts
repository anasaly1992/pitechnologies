import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MapType } from '@angular/compiler';
interface chars {
  results: [
    {
      birth_year: "",
      created: "",
      edited: "",
      eye_color: "",
      films: ["", "", "", ""],
      gender: "",
      hair_color: "",
      height: "",
      homeworld: "",
      mass: "",
      name: "",
      planet: "",
      skin_color: "",
      species: [],
      starships: ["", ""],
      url: "",
      vehicles: ["", ""]
    }
  ]

}


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'https://swapi.dev/api/people/';
  queryUrl: string = '?search=';
  data: any;
  constructor(private http: HttpClient) { }

  onEnterSearchValue(data) {
    this.data = data;
    return this.http.get<chars>(this.baseUrl + this.queryUrl + data).pipe(
      map((chars) => {
        console.log(typeof (chars.results))
        chars.results.map(person => this.http.get<any>(person.homeworld).subscribe(
          homeworld => {
            person.planet = homeworld.name;
          }
        ));
        return chars;
      })
    );
  }
}

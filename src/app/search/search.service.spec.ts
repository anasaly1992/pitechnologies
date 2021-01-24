import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
describe('SearchService', () => {
  let service: SearchService;
  let httpServiceCtrl: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(SearchService);
    httpServiceCtrl = TestBed.inject(HttpTestingController);
  });

  it('sholud retrive chars from the API via GET', (done: DoneFn) => {
    expect()
    let data = service.data;
    const testChars: chars = []
    service.onEnterSearchValue(data).subscribe((chars: chars) => {
      expect(chars).toEqual(chars)
    });
  })
});

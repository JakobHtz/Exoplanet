import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {
  private readonly EXODBWEB_ADDR: String = "localhost";
  private readonly EXODBWEB_PORT: number = 8081;

  constructor(private http: HttpClient) {}

  getPlanetData(planet: string | undefined): Observable<PlanetDataDto[]> {
    let searchString = "http://"+this.EXODBWEB_ADDR+":"+this.EXODBWEB_PORT+"/data";
    if (planet && planet != '') {
      searchString += "?planet=" + planet;
    }
    console.log("Fetch Data at " + searchString);
    return this.http.get<PlanetDataDto[]>(searchString)
      .pipe(
        map((response: PlanetDataDto[]) => {return response}),
      );
  }
}

export class PlanetDataDto {
  DID: number | undefined;
  RID: number | undefined;
  planet: String | undefined;
  scan_timestamp: String | undefined;
  temp: number | undefined;
  ground: String | undefined;
  x_pos: number | undefined;
  y_pos: number | undefined;
}

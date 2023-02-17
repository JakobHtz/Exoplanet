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

  getRobots(): Observable<PlanetDataDto[]> {
    return this.http.get<PlanetDataDto[]>("http://"+this.EXODBWEB_ADDR+":"+this.EXODBWEB_PORT+"/data")
      .pipe(
        map((response: PlanetDataDto[]) => {return response}),
      );
  }
}

export class PlanetDataDto {
  DID: number | undefined;
  RID: number | undefined;
  planet: String | undefined;
  timestamp: String | undefined;
  ground: String | undefined;
  temp: number | undefined;
  x_pos: number | undefined;
  y_pos: number | undefined;
}

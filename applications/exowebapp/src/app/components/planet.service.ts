import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private readonly EXODBWEB_ADDR: String = "localhost";
  private readonly EXODBWEB_PORT: number = 8081;

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<PlanetDto[]> {
    return this.http.get<PlanetDto[]>("http://"+this.EXODBWEB_ADDR+":"+this.EXODBWEB_PORT+"/planet")
      .pipe(
        map((response: PlanetDto[]) => {return response}),
      );
  }
}

export class PlanetDto {
  PID: number | undefined;
  planet_name: string | undefined;
  x_size: number | undefined;
  y_size: number | undefined;
}

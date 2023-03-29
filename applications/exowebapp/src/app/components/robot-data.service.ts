import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RobotDataService {
  private readonly EXODBWEB_ADDR: String = "localhost";
  private readonly EXODBWEB_PORT: number = 8081;

  constructor(private http: HttpClient) {}

  getRobots(planet: string | undefined): Observable<RobotDto[]> {
    let searchString = "http://"+this.EXODBWEB_ADDR+":"+this.EXODBWEB_PORT+"/robots";
    if (planet && planet != '') {
      searchString += "?planet=" + planet;
    }
    console.log("Fetch Data at " + searchString);
    return this.http.get<RobotDto[]>(searchString)
      .pipe(
        map((response: RobotDto[]) => {return response}),
      );
  }
}

export class RobotDto {
  RID: number | undefined;
  thread_id: number | undefined;
  planet: string | undefined;
  x_pos: number | undefined;
  y_pos: number | undefined;
  dir: 'NORTH'|'SOUTH'|'WEST'|'EAST' | undefined;
}

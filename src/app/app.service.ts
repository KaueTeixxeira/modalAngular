import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getTags(): Observable<{results}> {
        return this.httpClient.get<{results}>('https://rickandmortyapi.com/api/character');
    }

    

}
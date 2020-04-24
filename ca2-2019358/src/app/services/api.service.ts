import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get(`https://breakingbadapi.com/api/episodes`)
    }
    
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }

    /*getEpisodes() {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/episodes.json`)
    }

    getEpisode(id) {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/episodes.json`);
    }*/

    /* getCharacters() {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/characters.json`)
    }

    getCharacter(id) {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/characters.json`);
    }*/

     getCharacters() {
        return this.http.get(`https://breakingbadapi.com/api/characters`)
    }

    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }

    /* getQuotes() {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/quotes.json`)
    }

    getQuote(id) {
        return this.http.get(`https://8100-e3f99434-8966-4675-b828-865e613c5c27.ws-eu01.gitpod.io/assets/quotes.json`);
    }*/

    getQuotes() {
        return this.http.get(`https://breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
    }

     getDeaths() {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }

    /*getDeaths() {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }*/
}

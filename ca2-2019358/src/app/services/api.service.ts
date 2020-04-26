import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allQuotes: Array<any>;

    constructor(private http: HttpClient) { }


    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
    }

    
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters(limit: number, offset: number) {
        return this.http.get(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }
    
    getQuotes() {
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            this.allQuotes = data as Array<any>;
        });
        return this.http.get('https://breakingbadapi.com/api/quotes')
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }

    getQuoteSearch(author: string) {
        let selectedQuotes: any[] = [];
        for (let quote of this.allQuotes) {
            if (quote.author.toLowerCase().includes(author.toLowerCase())) {
                selectedQuotes.push(quote);
            }
        }
        return of(selectedQuotes);
    }

    getDeaths() {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }


}
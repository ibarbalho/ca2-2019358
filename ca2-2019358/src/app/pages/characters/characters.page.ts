import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {


    characters = [];
    limit = 15;
    offset = 0;
    maxCharacters = 63;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.loadCharacters();
    }

    openDetails(character) {
        let characterID = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterID}`);
    }

    loadCharacters(event?) {

        this.api.getCharacters(this.limit, this.offset)
            .subscribe(res => {
                this.characters = this.characters.concat(res);
                if (event) {
                    event.target.complete();
                }
            })
    }

    loadData(event?) {
        this.offset += 15;
        this.loadCharacters(event);
        if (this.offset > this.maxCharacters - 1) {
            event.target.disable = true;
        }
        
    }

}
import { FavouriteService } from '../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {

    character: any;
    characterId = null;
    isFavourite = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    //Load characteres
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });

        this.favouriteService.isFavouriteChar(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });

    }

    //Function favourite character by clik on the top bar
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    //Function unfavourite character by clik on the top bar
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }

}



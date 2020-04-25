import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY_CHAR = 'favouriteCharacters';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {

    constructor(private storage: Storage, private storageChar: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }

        getAllFavouriteCharacters() {
        return this.storageChar.get(STORAGE_KEY_CHAR);
    }

    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

        isFavouriteChar(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }

        favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storageChar.set(STORAGE_KEY_CHAR, result);
            } else {
                return this.storageChar.set(STORAGE_KEY_CHAR, [characterId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }

        unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storageChar.set(STORAGE_KEY_CHAR, result);
            }
        });
    }

}

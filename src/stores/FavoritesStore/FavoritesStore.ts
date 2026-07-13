import { type ChuckNorrisJokeData } from "../../api";
import { EventEmitter } from "../EventEmitter";

const LOCAL_STORAGE_KEY = 'FVTA_Favorites';

export class FavoritesStore {

    private static data: ChuckNorrisJokeData[] = this.readFromLocalStorage();
    private static eventEmitter: EventEmitter = new EventEmitter();

    public static getFavorites() {
        return [...this.data];
    }

    private static readFromLocalStorage(): ChuckNorrisJokeData[] {
        const localStorageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        return JSON.parse(localStorageData) || [];
    }

    private static writeToLocalStorage() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }

    public static addFavorite(joke: ChuckNorrisJokeData) {
        this.data.push(joke);
        this.writeToLocalStorage();
        this.eventEmitter.emit('change');
    }

    public static removeFavorite(joke: ChuckNorrisJokeData) {
        this.data = this.data.filter(j => j.id !== joke.id)
        this.writeToLocalStorage();
        this.eventEmitter.emit('change');
    }

    public static onChange(listener) {
        this.eventEmitter.on('change', listener);
    }

    public static offChange(listener) {
        this.eventEmitter.on('change', listener);
    }

}
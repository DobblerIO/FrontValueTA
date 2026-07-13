import { type ChuckNorrisJokeData } from "../../api";
import { Dialoguer } from "../../Utility";
import { EventEmitter } from "../EventEmitter";

const LOCAL_STORAGE_KEY = 'FVTA_Favorites';

type FavoritesStoreListener = () => void;

export class FavoritesStore {

    private static data: ChuckNorrisJokeData[] = this.readFromLocalStorage();
    private static eventEmitter: EventEmitter<'change', FavoritesStoreListener> = new EventEmitter();

    public static getFavorites() {
        return [...this.data];
    }

    private static readFromLocalStorage(): ChuckNorrisJokeData[] {
        const localStorageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!localStorageData) {
            return [];
        }
        return JSON.parse(localStorageData);
    }

    private static writeToLocalStorage() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }

    public static addFavorite(joke: ChuckNorrisJokeData) {
        if (this.data.length >= 10) {
            Dialoguer.open({
                text: 'Limit Reached. You can only favorite up to 10 jokes.',
            });
            return;
        }

        this.data.push(joke);
        this.writeToLocalStorage();
        this.eventEmitter.emit('change');
    }

    public static removeFavorite(joke: ChuckNorrisJokeData) {
        this.data = this.data.filter(j => j.id !== joke.id)
        this.writeToLocalStorage();
        this.eventEmitter.emit('change');
    }

    public static onChange(listener: FavoritesStoreListener) {
        this.eventEmitter.on('change', listener);
    }

    public static offChange(listener: FavoritesStoreListener) {
        this.eventEmitter.off('change', listener);
    }

}
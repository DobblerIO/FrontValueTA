import { useEffect, useState } from "react"
import { FavoritesStore } from "./FavoritesStore"
import type { ChuckNorrisJokeData } from "../../api";

export const useFavoritesStore = () => {

    const [data, setData] = useState(FavoritesStore.getFavorites());

    useEffect(() => {
        const updateData = () => setData(FavoritesStore.getFavorites());

        FavoritesStore.onChange(updateData);

        return () => {
            FavoritesStore.offChange(updateData);
        }
    }, []);

    return {
        favorites: data,
        addFavorite: (joke: ChuckNorrisJokeData) => FavoritesStore.addFavorite(joke),
        removeFavorite: (joke: ChuckNorrisJokeData) => FavoritesStore.removeFavorite(joke),
    };
}

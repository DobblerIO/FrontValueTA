import { useEffect, useState } from "react"
import { FavoritesStore } from "./FavoritesStore"

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
        addFavorite: (joke) => FavoritesStore.addFavorite(joke),
        removeFavorite: (joke) => FavoritesStore.removeFavorite(joke),
    };
}

import type { FC } from 'react';
import { JokeList } from '../components';
import { useFavoritesStore } from '../../stores/FavoritesStore';

export const Favorites:FC = () => {

    const { favorites } = useFavoritesStore();

    return (
        <JokeList jokes={favorites} />
    );
    
}

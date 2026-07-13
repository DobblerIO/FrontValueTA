import type { FC } from 'react';
import { HeartIcon } from 'lucide-react';
import { clsx } from 'clsx';

import { useFavoritesStore } from '../../../stores/FavoritesStore';

import styles from './JokeList.module.css';
import type { ChuckNorrisJokeData } from '../../../api';

export interface JokeListProps {
    jokes: ChuckNorrisJokeData[];
}

export const JokeList:FC<JokeListProps> = (props) => {
    const { jokes } = props;
    const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

    const handleFavoriteClick = (joke) => {
        if (favorites.some(fav => fav.id === joke.id)) {
            removeFavorite(joke);
            return;
        }
        addFavorite(joke);
    }

    if (!jokes.length) {
        return (<div>Loading...</div>);
    }

    return (
        <div className={styles.conatiner}>
            
            {jokes.map(joke => (
                <div
                    key={joke.id}
                    className={styles['joke-list-item']}
                >
                    <span>{ joke.value }</span>

                    <div
                        className={clsx(
                            styles['joke-list-item__favorite-control'],
                            {[styles['joke-list-item__favorite-control--checked']]: favorites.some(fav => fav.id === joke.id)}
                        )}
                        onClick={() => handleFavoriteClick(joke)}
                    >
                        <HeartIcon />
                    </div>
                </div>
            ))}

        </div>
    )
}

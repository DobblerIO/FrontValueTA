import { useState, type FC } from 'react';

import styles from './AppRoot.module.css';
import { Favorites } from './Favorites';
import { RandomJokes } from './RandomJokes';

export const AppRoot: FC = () => {

    const [activeRoute, setActiveRoute] = useState<'jokes'|'favorites'>('jokes')

    return (
        <div className={styles.container} >

            <div className={styles.nav} >
                <div onClick={() => setActiveRoute('jokes')} >Jokes List</div>
                <div onClick={() => setActiveRoute('favorites')} >Favorites</div>
            </div>

            {activeRoute === 'jokes' && <RandomJokes />}
            {activeRoute === 'favorites' && <Favorites />}

        </div>
    );
}

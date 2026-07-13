import { type FC } from 'react';
import { useJokesStore } from '../stores';

export const AppRoot: FC = () => {

    const jokesData = useJokesStore();

    return (
        <div>
            <pre>
                {JSON.stringify(jokesData, null, 2)}
            </pre>
        </div>
    );
}

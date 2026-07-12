import { useEffect, useState, type FC } from 'react';
import { getCategories, getJoke, getJokes } from '../api';

export const AppRoot: FC = () => {

    const [foo, setFoo] = useState<Record<string, any>>({});

    useEffect(() => {

        getJoke().then(jokeData => {
            console.log(jokeData);
            setFoo(curr => {
                curr.randomJoke = jokeData;
                return {...curr, randomJoke: jokeData};
            })
        });

        getJokes(10).then(jokesData => {
            setFoo(curr => {
                curr.randomJokes = jokesData;
                return {...curr, randomJokes: jokesData};
            })
        });

        getCategories().then(jokeCategories => {
            setFoo(curr => {
                curr.jokeCategories = jokeCategories;
                return {...curr, jokeCategories};
            })
        });

    }, []);

    return (
        <div>
            <pre>
                {JSON.stringify(foo, null, 2)}
            </pre>
        </div>
    );
}

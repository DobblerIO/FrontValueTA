import { JokeList } from "../components/JokeList";

import { useJokesStore } from '../../stores';

export const RandomJokes = () => {
    const jokes = useJokesStore();

    return (
        <div>
            <JokeList jokes={jokes} />
        </div>
    );
}

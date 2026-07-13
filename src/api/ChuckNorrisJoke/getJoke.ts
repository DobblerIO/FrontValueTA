import { ApiClient } from "../ApiClient";

export interface ChuckNorrisJokeData {
    id: string; // "FIc_JItqQxiqQSwcoU2hzg"
    value: string; // "When Chuck Norris goes clubbing, the authorities turn a blind eye on all the people he clubs to death."
    created_at: string; // "2020-01-05 13:42:26.194739"
    updated_at: string; // "2020-01-05 13:42:26.194739"
    
    /* Exist within the data, but redundant within the current scope */
    // icon_url: string; // "https://api.chucknorris.io/img/avatar/chuck-norris.png"
    // url: string; // "https://api.chucknorris.io/jokes/FIc_JItqQxiqQSwcoU2hzg"
}


/**
 * Get a single random Chuck Norris joke.
 */
export async function getJoke(): Promise<ChuckNorrisJokeData> {
    return ApiClient.get<ChuckNorrisJokeData>('https://api.chucknorris.io/jokes/random');
}

/**
 * Get n amount of random Chuck Norris jokes.
 */
export async function getJokes(count: number): Promise<ChuckNorrisJokeData[]> {
    const promiseArray = Array.from({ length: count }).map(() => {
        return getJoke();
    });

    return Promise.all(promiseArray);
}
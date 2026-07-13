import { getJoke, getJokes, type ChuckNorrisJokeData } from "../../api";
import { EventEmitter } from "../EventEmitter";

type JokesStoreListener = () => void;

export class JokesStore {

    private data: ChuckNorrisJokeData[];
    private eventEmitter: EventEmitter<'change', JokesStoreListener>;

    constructor() {
        this.data = [];
        this.eventEmitter = new EventEmitter();
        
        this.runFetch();
    }

    public getJokes() {
        return [...this.data];
    }

    private async runFetch() {
        await this.fetchInitial();
        this.runRefetchInterval();
    }

    private async fetchInitial() {
        this.data = await getJokes(10);
        this.eventEmitter.emit('change');
    }

    private async refetch() {
        const newJoke = await getJoke();

        // remove oldest joke
        const [oldestJoke] = this.data.toSorted((a, b) => {
            return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
        });
        this.data.splice(this.data.indexOf(oldestJoke), 1);

        // Push new joke
        this.data.push(newJoke);

        this.eventEmitter.emit('change');
    }

    private runRefetchInterval() {
        const intervalId = window.setInterval(() => {
            try {
                this.refetch();
            } catch(error) {
                window.clearInterval(intervalId);
                throw error;
            }
        }, 5000);
    }

    public onChange(listener: JokesStoreListener) {
        this.eventEmitter.on('change', listener);
    }

    public offChange(listener: JokesStoreListener) {
        this.eventEmitter.off('change', listener);
    }

}
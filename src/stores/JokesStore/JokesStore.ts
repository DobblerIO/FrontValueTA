import { getJoke, getJokes, type ChuckNorrisJokeData } from "../../api";
import { EventEmitter } from "../EventEmitter";

export class JokesStore {

    private data: ChuckNorrisJokeData[];
    private eventEmitter: EventEmitter;

    constructor() {
        this.data = [];
        this.eventEmitter = new EventEmitter();

        this.fetchInitial().then(() => {
            this.runRefetchInterval()
        });
    }

    public getJokes() {
        return [...this.data];
    }

    private async fetchInitial() {
        this.data = await getJokes(10);
        this.eventEmitter.emit('change');
    }

    private async refetch() {
        const newJoke = await getJoke();

        this.data.shift();
        this.data.push(newJoke);

        this.eventEmitter.emit('change');
    }

    private async runRefetchInterval() {
        window.setInterval(() => {
            this.refetch();
        }, 5000 * 3);
    }

    public onChange(listener) {
        this.eventEmitter.on('change', listener);
    }

    public offChange(listener) {
        this.eventEmitter.on('change', listener);
    }

}
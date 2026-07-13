import { EventEmitter } from "../../stores/EventEmitter";

export interface DialogueOptions {
    text: string;
}

type DialoguerListener = (options: DialogueOptions) => void;

export class Dialoguer {

    private static eventEmitter = new EventEmitter<'dialogue', DialoguerListener>();

    public static open(options: DialogueOptions) {
        this.eventEmitter.emit('dialogue', options);
    }

    public static onChange(listener: DialoguerListener) {
        this.eventEmitter.on('dialogue', listener);
    }

    public static offChange(listener: DialoguerListener) {
        this.eventEmitter.off('dialogue', listener);
    }

}
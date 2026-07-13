export class EventEmitter {

    private listeners = {};

    on(event, listener) {
        this.listeners[event] ??= [];
        this.listeners[event].push(listener);
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            return;
        }
        this.listeners[event].forEach(listener => listener(...args));
    }

}

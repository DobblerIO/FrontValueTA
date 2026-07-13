
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ListenerFn = (...args: any[]) => void;

export class EventEmitter<EventType extends string, Listener extends ListenerFn> {

    private listeners: Record<EventType, Listener[]> = {} as Record<EventType, Listener[]>;

    on(event: EventType, listener: Listener) {
        this.listeners[event] ??= [];
        this.listeners[event].push(listener);
    }

    off(event: EventType, listener: Listener) {
        this.listeners[event] = this.listeners[event].filter(i => i !== listener);
    }

    emit(event: EventType, ...args: Parameters<Listener>) {
        if (!this.listeners[event]) {
            return;
        }
        this.listeners[event].forEach(listener => listener(...args));
    }

}

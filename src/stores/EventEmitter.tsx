
type ListenerFn = (...args: unknown[]) => void;

export class EventEmitter<EventType extends string, Listener extends ListenerFn> {

    private listeners: Record<EventType, Listener[]> = {} as Record<EventType, Listener[]>;

    on(event: EventType, listener: Listener) {
        this.listeners[event] ??= [];
        this.listeners[event].push(listener);
    }

    emit(event: EventType, ...args: Parameters<Listener>) {
        if (!this.listeners[event]) {
            return;
        }
        this.listeners[event].forEach(listener => listener(...args));
    }

}

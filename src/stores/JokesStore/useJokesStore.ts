import { useEffect, useRef, useState } from "react"
import { JokesStore } from "./JokesStore"

export const useJokesStore = () => {

    const { current: store } = useRef(new JokesStore())
    const [data, setData] = useState(store.getJokes());

    useEffect(() => {
        const updateData = () => setData(store.getJokes());

        store.onChange(updateData);

        return () => {
            store.offChange(updateData);
        }
    }, []);

    return data;
}

import { useEffect, useRef, useState } from "react"
import { JokesStore } from "./JokesStore"

export const useJokesStore = () => {

    const storeRef = useRef(new JokesStore())
    const [data, setData] = useState(storeRef.current.getJokes());

    useEffect(() => {
        const updateData = () => setData(storeRef.current.getJokes());

        storeRef.current.onChange(updateData);

        return () => {
            storeRef.current.offChange(updateData);
        }
    }, []);

    return data;
}

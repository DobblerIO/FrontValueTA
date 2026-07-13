import { useEffect, useState } from "react";
import { Dialoguer, type DialogueOptions } from "./Dialoguer";

export const useDialoguer = () => {

    const [activeDialogue, setActiveDialogue] = useState<DialogueOptions | null>(null);

    useEffect(() => {
        const handleChange = (options: DialogueOptions) => setActiveDialogue(options);

        Dialoguer.onChange(handleChange);

        return () => {
            Dialoguer.offChange(handleChange);
        }
    }, []);

    return {
        activeDialogue,
        dismissDialogue: () => setActiveDialogue(null),
    };

};

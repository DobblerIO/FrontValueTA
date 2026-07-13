import type { FC } from "react";
import { useDialoguer } from "./useDialoguer";
import { Portal } from "../../app/components/Portal";

import styles from './DialogueContainer.module.css';

export const DialogueContainer:FC = () => {
    const {activeDialogue, dismissDialogue} = useDialoguer();

    if (!activeDialogue) {
        return null;
    }

    return (
        <Portal>
            <div
                className={styles.container}
                onClick={dismissDialogue}
            >
                {activeDialogue.text}
            </div>
        </Portal>
    )
};

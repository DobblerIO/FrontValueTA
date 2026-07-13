import type { FC } from "react";
import { createPortal } from "react-dom";

import styles from './Portal.module.css';

export interface PortalProps {
    children: React.ReactNode;
}

export const Portal:FC<PortalProps> = (props) => {

    const { children } = props;

    return createPortal(
        <div className={styles.container} >
            {children}
        </div>
    , document.body);

}

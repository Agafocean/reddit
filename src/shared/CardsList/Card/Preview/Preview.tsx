import * as React from 'react';
import styles from './preview.css';             
import { Props } from '../Card';

export function Preview({param}: Props) {
    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src={param.thumbnail}
                alt="... no image" />
        </div>
    );
}
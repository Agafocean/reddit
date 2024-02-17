import * as React from 'react';
import styles from './controls.css';
import { Karma } from './Karma/Karma';
import { Comment } from './Comment/Comment';
import { Actions } from './Actions/Actions';
import { Props } from '../Card';

export function Controls({param}: Props) {
    return (
        <div className={styles.controls}>
            <Karma param={param}/>
            <Comment />
            <Actions />
        </div>
    );
}
import * as React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent/TextContent';
import { Preview } from './Preview/Preview';
import { Menu } from './Menu/Menu';
import { Controls } from './Controls/Controls';

export type Props = {
    param: {
        id: number;
        title: string;
        author: string;
        created: string;
        num_comments: string;
        score: string;
        thumbnail: string;
        url: string;
    }   
}

export function Card({ param }: Props) {       
    return (
        <li className={styles.card}>
            <TextContent param={param}/>
            <Menu param={param}/>
            <Preview param={param}/>
            <Controls param={param}/>
        </li>
    );
}
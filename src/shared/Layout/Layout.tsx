import * as React from 'react';
//import {hot} from 'react-hot-loader/root';
import styles from './layout.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CardsList } from '../CardsList/CardsList';

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}
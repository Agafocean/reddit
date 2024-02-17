import * as React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown/Dropdown';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { Props } from '../Card';

export function Menu(param: Props) {
    return (
        <div className={styles.menu} >
            <Dropdown
                param={param}
                onClose={() => console.log('closed')}
                onOpen={() => console.log('opened')}

                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }>
            </Dropdown>
        </div>
    );
}
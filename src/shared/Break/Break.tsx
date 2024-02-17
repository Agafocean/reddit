import * as React from 'react';
import styles from './break.css';
import classNames from 'classnames';

type TBreakSize = 2 | 4 | 6 | 8 | 10 | 12;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {    
    size: TBreakSize;
    mobileSize?: TBreakSize;
    tabletSize?: TBreakSize;
    desktopSize?: TBreakSize;
    inline?: boolean;
    top?: boolean;
};

export function Break(props: IBreakProps) {
    const {
        inline = false,
        top = false,
        size,
        mobileSize,
        tabletSize,
        desktopSize
    } = props;

    return (
        <div
            className={classNames(
                styles[`s${size}`],
                { [styles.inline]: inline },
                { [styles.top]: top },
                { [styles[`mobile_s${mobileSize}`]]: mobileSize },
                { [styles[`tablet_s${tabletSize}`]]: tabletSize },
                { [styles[`desktop_s${desktopSize}`]]: desktopSize }
            )}
        />
    );
}
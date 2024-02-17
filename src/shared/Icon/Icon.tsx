import * as React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

type TSizes = 12 | 14 | 16;

interface IIconProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
    children?: React.ReactNode;
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
};

export function Icon(props: IIconProps) {
    const {
        As = 'div',  
        children,
        size, 
        mobileSize,
        tabletSize,
        desktopSize
    } = props;
    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize }
    );
    return (        
           <As className={classes}> {children} </As>       
    );
}
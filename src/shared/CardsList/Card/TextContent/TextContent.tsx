import * as React from 'react';
import styles from './textContent.css';
import stylesUL from './userLink.css';
import stylesTT from './title.css';
import ava from '../img/grishin.jpg';
import { Props } from '../Card';
import { Link} from 'react-router-dom';

export function TextContent({ param }: Props) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={stylesUL.userLink}>
                    <img className={stylesUL.avatar} src={ava} alt="avatar" />
                    <a href="#user-url" className={stylesUL.username}>{param.author}</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>
                        Posted
                    </span>
                    {Math.round((Math.trunc(Number(new Date()) / 1000) - Number(param.created)) / 3600)} hours ago</span>
            </div>
            <h2 className={stylesTT.title} >
                <Link to={`/posts/post/${param.id}`} className={stylesTT.postLink} >
                    {param.title}
                </Link>
            </h2>
        </div>
    );
}
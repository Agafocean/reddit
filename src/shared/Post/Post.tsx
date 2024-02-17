import React, { useEffect, useRef } from "react";
import styles from './post.css';
import ReactDOM from "react-dom";
import { CommentFormContainer } from "../CommentFormContainer/CommentFormContainer";
import { useHistory, useParams } from "react-router-dom";
import { Break } from "../Break/Break";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";

export interface PropsAuthor {
    author: string;
}

export function Post() {
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();
    const postID: Record<string, string> = useParams();
    const postsCurrent = useSelector<RootState, Array<any>>(state => state.posts);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                history.push('/posts');
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2 className={styles.title}>{postsCurrent[Number(postID.id)].data.title}</h2>
            <a href={postsCurrent[Number(postID.id)].data.url} target="_blank" className={styles.content}>
                {postsCurrent[Number(postID.id)].data.url}
            </a>
            <Break top size={10} />
            <CommentFormContainer author={postsCurrent[Number(postID.id)].data.author} />
        </div>
    ), node);
}
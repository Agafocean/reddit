import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from './postCommentsBlock.css';
import { Icon } from "../Icon/Icon";
import { Text, EColor } from "../Text/Text";
import { MenuImg1 } from "../Icons/MenuImg1";
import { Break } from "../Break/Break";
import { ReplyForm } from "../ReplyForm/ReplyForm";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { usePostCommentsData } from "../../hooks/usePostCommentsData";

export function PostCommentsBlock() {
    const [loading, setLoading] = useState(true);    
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();

    const commentId = useSelector<RootState, number>(state => state.commentId);    
    const [dataArray] = usePostCommentsData();
    const pad = 10;
    const img = MenuImg1();
    const copyArr = [false];
    dataArray.comments?.map((comment, ind) => copyArr[ind] = false);
    const [isCommentFormOpen, setIsCommentFormOpen] = useState([false]);

    useEffect(() => {
        function handleClick(event: Event) {
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

    function reply(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        copyArr[Number(e.currentTarget.id)] = !isCommentFormOpen[Number(e.currentTarget.id)];
        setIsCommentFormOpen(copyArr);
    }

    if (JSON.stringify(dataArray) !== '{}') {
        return ReactDOM.createPortal((
            <div className={styles.modal} ref={ref}>
                <div className={styles.modalBodyWrapper}>
                    <p> author: {dataArray.user?.author}</p>
                    <p style={{ fontSize: 20 }}>  {dataArray.user?.title}</p>
                    <p style={{ fontSize: 16 }}>  {dataArray.user?.text}</p>
                    <p style={{ textAlign: "center", backgroundColor: "grey" }}>===============================</p>

                    <ul>{dataArray.comments?.map((comment, ind) =>
                        <li style={{ paddingLeft: pad }} key={ind}>
                            <p>  author: {comment.author}</p>
                            <p style={{ fontSize: 16 }}> {comment.body}</p>
                            {isCommentFormOpen[ind] && <ReplyForm name={comment.author} />}
                            <div onClick={reply} id={ind.toString()} style={{
                                display: "flex", backgroundColor: "lightBlue",
                                width: 100, cursor: "pointer"
                            }} >
                                <Icon size={16} mobileSize={14}> {img} </Icon>
                                <Break size={12} />
                                <button  >
                                    <Text size={10} color={EColor.black} mobileSize={10}>Reply</Text>
                                </button>
                            </div>
                            <div style={{ textAlign: "center", backgroundColor: "grey", width: "100%", height: "1px" }} />
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        ), node
        );
    }
    else return ReactDOM.createPortal((
        <div className={styles.modal} >
            {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
        </div>
    ), node
    );
}

import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setPostsRedux } from '../../store/reducer';
import { generateRandomString } from '../../utils/react/GenerateRandomindex';
import { Break } from '../Break/Break';

export function CardsList() {
    const numberOfAutoLoad = 2;
    const token = useSelector<RootState, string>(state => state.token);
    const [posts, setPosts] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const bottomOfList = useRef<HTMLDivElement>(null);
    const [nextAfter, setNextAfter] = useState('');
    const [countLoads, setCountLoads] = useState(0);
    const [loadMoreN, setLoadMoreN] = useState(0);

    const dispatch = useDispatch<any>();
    let postsDispatch = new Array;

    useEffect(() => {
        if (postsDispatch) {
            dispatch(setPostsRedux(postsDispatch));
        }
    }
        , [postsDispatch]);

    function clickLoadMore() {
        setCountLoads(0);
        setLoadMoreN(loadMoreN + 1);
    }

    useEffect(() => {
        if (!token) return;
        if (nextAfter === null) return;

        async function load() {
            if (countLoads <= numberOfAutoLoad) {
                setErrorLoading('');
                try {
                    const { data: { data: { after, children } } } = await
                        axios.get('https://oauth.reddit.com/best',
                            {
                                headers: { Authorization: `bearer ${token}` },
                                params: { after: nextAfter, limit: 10 }
                            });
                    setNextAfter(after);
                    setPosts(prevChildren => prevChildren.concat(...children));
                }
                catch (error) {
                    setErrorLoading(String(error));
                };
                setLoading(false);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {

                if (countLoads > numberOfAutoLoad) {
                    setLoading(false);
                    setLoadingButton(true);
                }
                else {
                    setLoadingButton(false);
                    setLoading(true);
                    setCountLoads(countLoads + 1);
                };
                load();
            }
        },
            { rootMargin: '5px' }
        );

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        };

    }, [token, nextAfter, loadMoreN]);

    postsDispatch = posts;

    return ( 
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading &&
                <div style={{ textAlign: 'center' }}>No posts</div>}
            {posts.map((post, index) => <>
                <Card key={generateRandomString()}
                    param={ 
                        {
                            id: index, 
                            title: post.data.title,
                            author: post.data.author,
                            created: post.data.created,
                            num_comments: post.data.num_comments,
                            score: post.data.score,
                            thumbnail: post.data.thumbnail,
                            url: post.data.url
                        }
                    }
                />
                <Break top size={10} />
            </>
            )}

            <div ref={bottomOfList}></div>

            {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
            {loadingButton && <div style={{ textAlign: 'center' }}>
                <button style={{ padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }}
                    onClick={clickLoadMore}>More posts</button>
            </div>}

            {errorLoading && <div role='alert' style={{ textAlign: 'center' }}>{errorLoading}</div>}
        </ul>
    );
}
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface IUser {
    author?: string;
    title?: string;
    text?: string;
}

interface IComments {
    author?: string;
    body?: string;
    replies?: object;
}

interface IDataArray {
    user?: IUser;
    comments?: IComments[];
}

export function usePostCommentsData() {   
    const [dataArray, setData] = useState<IDataArray>({});    
    const commentId = useSelector<RootState, number>(state => state.commentId);

    let commentLink = '';   
    const postsRedux = useSelector<RootState, Array<any>>(state => state.posts);    
   if (postsRedux[commentId]) {    
        commentLink = postsRedux[commentId].data.permalink;        
    };    

    useEffect(() => { 
        if (commentLink) {
            axios.get(`https://api.reddit.com${commentLink}?sr_detail=true`)
                .then((resp) => {
                    const postUser = resp.data[0].data.children[0].data;
                    const postComments = resp.data[1].data.children.map((item: { data: IComments }) =>
                        ({ author: item.data.author, body: item.data.body, replies: item.data.replies }));

                    const postUserData: IUser = { author: postUser.author, title: postUser.title, text: postUser.selftext };
                    setData({ user: postUserData, comments: postComments });
                })
                .catch(console.log)
        }; 
    }, [] );    

    return [dataArray];
}
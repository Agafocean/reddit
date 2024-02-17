import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tpost {
    author?: string;
    title?: string;
    url?: string
}

export function usePostsData() {
    const [dataArray, setData] = useState<Tpost[]>([]);
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true')
            .then((resp) => {
                const postData = resp.data.data.children;
                const postArr = postData.map((item: { data: Tpost }) =>
                    ({ author: item.data.author, title: item.data.title, url: item.data.url }));
                setData(postArr);
            })
            .catch(console.log)
    }, []);
    return [dataArray]
}
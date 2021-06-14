import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/dom';

const Test5 = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState('css')

    useEffect(() => {
        getData()
    },[text]) //text  변경에 따라 업데이트해서 보여주기

    const getData = () => {
        axios.get(`https://hn.algolia.com/api/v1/search?query=${text}`)
        .then(res => {
            setData(res.data.hits) //데이터가 객체 안의 hits안에 들어있음
        })
    }
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            {
                data.map(item => <p key={item.id}>{item.title}</p>)
            }
        </div>
    );
};

export default Test5;
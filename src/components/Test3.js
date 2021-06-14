import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test3 = () => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [id, setId] = useState(1)

    useEffect( () => {
        getData()
    },[id]) // id가 바뀔때 업데이트 처리하기

    //입력된 타이틀 번호를 받아 해당 번호의 타이틀 데이터만 가져오기
    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setPost({})
                setLoading(true)
                setError('주소를 찾을 수 없습니다.')
            })
    }

    return (
        <div>
            <h2>해당번호의 타이틀만 출력하기</h2>
            <input type="text" onChange={(e) => setId(e.target.value)}/>
            {
                post && loading ? <h2>로딩중</h2> : <h2>{post.title}</h2>
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test3;
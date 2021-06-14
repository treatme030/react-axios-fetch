import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [data, setData] = useState([])

    //외부에서 데이터 가져올 때 : useEffect로 먼저 보여주고, fetch/axios로 데이터 불러오기
    useEffect( () => {
        getData1()
    }, [])

    const getData4 = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res1 = await res.json()
        setData(res1)
    }

    const getData2 = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json() ) //json에 해당하는 것만 res로 담기
        .then(res => setData(res))
    }

    const getData3 = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                // console.log(res) : 옵션 확인 가능
                setData(res.data)
            })
    }

    const getData1 = async() => {
        const res = await axios('https://jsonplaceholder.typicode.com/todos')
        setData(res.data)
    }
    

    return (
        <div>
            <h2> 데이터 불러오기 </h2>        
            {
                data.map(item => <p key={item.id} >
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test1;
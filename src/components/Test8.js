import React, { useMemo, useState } from 'react';

const Test8 = () => {
    const [ count, setCount] = useState(1)

    const fun = (cnt) => {
        console.log('test')
        let k = 0
        for(let i = 0; i < 10000000; i++){
            k++
        }
        return cnt * 10
    }

    //리액트에서는 전체적으로 함수가 동시 실행되어 일괄처리되기 때문에 
    //리턴되는 값을 전달해서 계산해줘야 하는 상황에는 useMemo가 리턴값을 기억해서 전달해줌 
    const reCount = useMemo(() => {
        return fun(count)
    },[count])

    return (
        <div>
            <h2>{count}</h2>
            <input type="text" onChange={(e) => setCount(e.target.value)}/>
            <hr/>
            <h1>{reCount}</h1>
        </div>
    );
};

export default Test8;
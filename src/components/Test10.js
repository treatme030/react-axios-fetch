import React, { useCallback, useState } from 'react';

const Test10 = () => {

    const [count, setCount] = useState(0)
    const ran = Math.random();

    //useCallback : 함수를 기억
    const increment = useCallback(() => {
        console.log(ran)
        setCount(count + 1)
    },[count])

    const decrement = useCallback(() => {
        console.log(ran)
        setCount(count - 1)
    },[count])

    return (
        <div>
            <h2>{ count }</h2>
            <button onClick={increment}>증가하기</button>
            <button onClick={decrement}>감소하기</button>
        </div>
    );
};

export default Test10;
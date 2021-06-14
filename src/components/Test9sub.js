import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log('getColor')
    switch(color){
        case 'red': return '빨강';
        case 'pink': return '분홍';
        case 'tomato': return '토마토';
        case 'yellow': return '노랑';
        default: return '없음';
    }
}

const getMovie = (movie) => {
    console.log('getMovie')
    switch(movie){
        case '미나리': return '한국 가족 이민영화';
        case '고질라': return '고질라 전쟁';
        case '크루엘라': return '내가 특별하단 걸';
        default: return '없음';
    }
}

const Test9sub = ({color, movie}) => {

    const colorInfo = useMemo(() => getColor(color), [color])
    const movieInfo = useMemo(() => getMovie(movie), [movie])
    
    return (
        <div>
            <h3>내가 좋아하는 색은 {color}이고, 컬러설명은 {colorInfo} 입니다.</h3>
            <h3>내가 좋아하는 영화는 {movie}이고, 설명은 {movieInfo} 입니다.</h3>
        </div>
    );
};

export default Test9sub;
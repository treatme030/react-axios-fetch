import React, { useState } from 'react';
import styled from 'styled-components'

const ImageSearch = styled.form`
    text-align: center; padding: 20px 0; 
    input {
        width: 400px; height: 45px; padding: 0 20px; box-sizing: border-box;
        vertical-align: top; margin-right: 15px;
    }
    button {
        width: 100px; height: 45px;
    }
`

const GalleryForm = ({onSearch}) => {
    const [text, setText] = useState('')
    
    //입력된 값에따라 관련된 이미지 나오게 입력된 값 전달
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text) 
    }



    return (
        <ImageSearch onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button>검색</button>
        </ImageSearch>
    );
};

export default GalleryForm;
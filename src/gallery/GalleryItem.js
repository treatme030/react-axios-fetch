import React from 'react';
import styled from 'styled-components'

const ImageBox = styled.article`
    margin-bottom: 35px; box-shadow: 2px 2px 5px #dcdcdc; border: 1px solid #efefef;
    img {
        width: 430px;
    }
    h3 {
        font-size: 25px; margin: 15px; color: salmon;
    }
    ul {
        margin: 15px;
        li {
            margin-bottom: 5px;
        }
    }
    p {
        margin: 15px;
        span {
            border-radius: 20px; padding: 5px 15px; display: inline-block;
            background-color: #efefef; margin-right: 10px;
        }
    }
`

const GalleryItem = ({item}) => {
    const {views, downloads, likes, tags, webformatURL, user} = item
    const tagsArr = tags.split(','); //tags 하나의 문자열로 되어있어서 배열화 해주고, map 돌리기
    return (
        <ImageBox>
            <img src={webformatURL} alt={user}/>
            <h3>{user}</h3>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p> 
                {
                    tagsArr.map((tag, index) => <span key={index}>#{tag}</span>)
                }
            </p>
        </ImageBox>
    );
};

export default GalleryItem;
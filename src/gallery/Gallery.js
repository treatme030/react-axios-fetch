import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import GalleryForm from './GalleryForm';
import GalleryList from './GalleryList';

const Container = styled.div`
    width: 1400px; margin: 0 auto; 
`

const Gallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        getData()
    },[text]) //text 변경될때마다 업데이트

    const getData = () => {
        const API_KEY = '22056599-ec09d92d185337dd58b77df32'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setData([])
                setLoading(true)
                setError('데이터를 찾을 수 없습니다.')
            })
    }

    const onSearch = (aa) => {
        setText(aa)
    }
    
    return (
        <Container>
            <GalleryForm onSearch={onSearch}/>
            { loading && data.length === 0 && (<h1>No Images Found</h1>) }
            { data && !loading && <GalleryList data={data} /> }
            { error ? error : null }
        </Container>
    );
};

export default Gallery;
import React, { useEffect, useState } from 'react'
import TranscriptList from './components/TranscriptList.js'
import Box from '@mui/material/Box'
import TranscriptDisplay from './components/TranscriptDisplay.js'
import Notes from './components/Notes.js'

function Interviews() {
    const [data, setData] = useState()
    const [selected, setSelected] = useState()

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get-data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []) 

    return (
        <Box sx={{ display: 'flex' }}>
            <TranscriptList data={data} selected={selected} setSelected={setSelected} />
            <TranscriptDisplay selected={selected} transcript={data && selected ? data[selected]["transcript"] : null} />
            <Notes selected={selected} notes={data && selected ? data[selected]["notes"] : null} />
        </Box>
    )
}

export default Interviews


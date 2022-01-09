import React, { useState } from 'react'
import TranscriptList from './components/TranscriptList.js'
import Box from '@mui/material/Box'
import TranscriptDisplay from './components/TranscriptDisplay.js'
import Notes from './components/Notes.js'

function Interviews(props) {
    const [selected, setSelected] = useState()

    return (
        <Box sx={{ display: 'flex' }}>
            <TranscriptList data={props.data} selected={selected} setSelected={setSelected} />
            <TranscriptDisplay selected={selected} transcript={props.data && selected ? props.data[selected]["transcript"] : null} />
            <Notes selected={selected} notes={props.data && selected ? props.data[selected]["notes"] : null} />
        </Box>
    )
}

export default Interviews


import React, { useEffect, useState } from 'react'
import AudioPlayer from './AudioPlayer.js'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function TranscriptDisplay(props) {

    const [transcript, setTranscript] = useState("")

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/get-transcript?filename=${props.selected}`)
        .then(response => response.text())
        .then(data => setTranscript(data))
    }, [props.selected])

    return (
        <Box sx={{ flexGrow: '1', marginTop: '2em', marginBottom: '2em', backgroundColor: '#fafafa', height: '70vh', padding: '2em'}}>
            <AudioPlayer selected={props.selected} />
            <Box sx={{ padding: '2em' }}>
                <Typography variant='body1'>
                    {transcript}
                </Typography>
            </Box>
        </Box>
    );
}
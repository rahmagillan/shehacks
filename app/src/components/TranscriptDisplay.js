import React, { useEffect } from 'react'
import AudioPlayer from './AudioPlayer.js'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';


export default function TranscriptDisplay(props) {

    // const [audioFile, setAudioFile] = useState()
    
    useEffect(() => {
        if (props.selected) {
            // fetch(`http://127.0.0.1:5000/get-audio-file?filename=${props.selected}`)
            //     .then(response => response.blob())
            //     .then(data => setAudioFile(data));
        }
    }, [props.selected])

    return (
        <Box sx={{ flexGrow: '1' }}>
            <AudioPlayer />
            <Box sx={{ padding: '2em' }}>
                <Typography variant='body1'>
                    {props.transcript}
                </Typography>
            </Box>
        </Box>
    );
}
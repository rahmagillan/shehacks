import AudioPlayer from './AudioPlayer.js'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function TranscriptDisplay(props) {
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
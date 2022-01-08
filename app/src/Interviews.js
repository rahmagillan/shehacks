import TranscriptList from './components/TranscriptList.js'
import Box from '@mui/material/Box'
import TranscriptDisplay from './components/TranscriptDisplay.js'
import Notes from './components/Notes.js'

function Interviews() {
    return (
        <Box sx={{ display: 'flex' }}>
            <TranscriptList />
            <TranscriptDisplay />
            <Notes />
        </Box>
    )
}

export default Interviews


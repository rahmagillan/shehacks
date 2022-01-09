import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';

export default function Notes(props) {
    const handleKeyDown = (event) => {
        if (event) {
            if (event.key === 'Enter') {
                fetch(`http://127.0.0.1:5000/add-note?filename=${props.selected}&newnote=${event.target.value}`)
                event.target.value = ""
            }
        }
    }

    function submitData() {
        fetch(`http://127.0.0.1:5000/add-interview?company=Google&date=January 9, 2021`)
            .then(() => window.location.reload(false))
    }

    return (
        <div style={{ backgroundColor: '#fafafa', height: '70vh', padding: '2em', margin: '2em' }}>
            <Box sx={{ margin: '1em' }}>
                <Typography variant="h6">New Audio</Typography>
                <TextField label="Company Name" variant="standard" />
                <TextField label="Date" variant="standard" />
                <Button style={{ margin: '1em', display: 'block' }} onClick={() => submitData()} variant="contained">Submit</Button>
            </Box>
            {props.notes && props.notes.length == 0 ? <Typography variant="body1" style={{ height: '30vh', maxWidth: 360, margin: '1em', minWidth: 360, bgcolor: 'background.paper'}}>No notes have been added (type and hit enter below to add notes) ✍ </Typography> : 
            <List sx={{ height: '30vh', maxWidth: 360, margin: '1em', minWidth: 360, bgcolor: 'background.paper', overflowY: 'scroll' }}>
                {props.notes ? props.notes.map((note, index) => {
                    return (
                        <ListItem 
                            key={index}
                            alignItems="flex-start"
                        >
                            <ListItemText
                                primary={note}
                            />
                        </ListItem>
                    )
                }) : null}
            </List>}
            <TextField
                label="Add Note"
                multiline
                rows={4}
                variant="standard"
                onKeyDown={handleKeyDown}
                style={{
                    width: '100%'
                }}
            />
        </div>
    )
}
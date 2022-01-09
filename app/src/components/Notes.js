import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import TextField from "@mui/material/TextField"

export default function Notes(props) {
    const handleKeyDown = (event) => {
        if (event) {
            if (event.key === 'Enter') {
                fetch(`http://127.0.0.1:5000/add-note?filename=${props.selected}&newnote=${event.target.value}`)
                event.target.value = ""
            }
        }
    }

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, minWidth: 360, bgcolor: 'background.paper', overflow: 'scroll', maxHeight: '60vh' }}>
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
            </List>
            <TextField
                label="New Note"
                multiline
                rows={4}
                variant="standard"
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}
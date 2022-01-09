import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';

export default function TranscriptList(props) {
  
    const handleListItemClick = (id) => {
        props.setSelected(id);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="search-input" label="Search" variant="standard" />
                <IconButton><FilterListIcon /></IconButton>
            </Box>
            <Button variant="outlined" startIcon={<AddCircleIcon />}>
                Add New Interview
            </Button>
            <List sx={{ width: '100%', maxWidth: 260, minWidth: 260, bgcolor: 'background.paper' }}>
                {props.data ? Object.keys(props.data).map((key) => { return (
                    <ListItem 
                        key={key}
                        alignItems="flex-start"
                        selected={props.selected === key}
                        onClick={() => handleListItemClick(key)}
                    >
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={props.data ? props.data[key]["avatar"] : null} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={props.data[key]["company"]}
                            secondary={props.data[key]["date"]}
                        />
                    </ListItem>
                )}) : null }
            </List>
        </div>
    );
}

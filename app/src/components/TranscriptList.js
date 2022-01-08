import React, { useState } from 'react';
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

export default function TranscriptList() {
  
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
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
            <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
                <ListItem 
                    alignItems="flex-start"
                    selected={selectedIndex === 0}
                    onClick={() => handleListItemClick(0)}
                >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Company A"
                    secondary="January 9, 2022"
                    />
                </ListItem>
                <ListItem 
                    alignItems="flex-start"
                    selected={selectedIndex === 1}
                    onClick={() => handleListItemClick(1)}
                >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Company B"
                    secondary="January 11, 2022"
                    />
                </ListItem>
                <ListItem 
                    alignItems="flex-start"
                    selected={selectedIndex === 2}
                    onClick={() => handleListItemClick(2)}
                >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Company C"
                    secondary="January 10, 2022"
                    />
                </ListItem>
            </List>
        </div>
    );
}

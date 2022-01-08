import Box from "@mui/material/Box"

export default function Notes(props) {
    return (
        <Box sx={{ padding: '1em', minWidth: 300 }}>
            {props.notes}
        </Box>
    )
}
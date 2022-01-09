import React, { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';

export default function AudioPlayer(props) {
    const [audio, setAudio] = useState()    
    const [duration, setDuration] = useState()

    useEffect(() => {
        if (props.selected) {
            fetch(`http://127.0.0.1:5000/get-audio-file?filename=${props.selected}`)
                .then(response => response.blob())
                .then(blob => {
                    const audio = new Audio()
                    const objectURL = URL.createObjectURL(blob);
                    audio.src = objectURL;
                    setAudio(audio)
                })
        }
    }, [props.selected])

    const theme = useTheme();
    const [position, setPosition] = useState(0)
    const [paused, setPaused] = useState(true)

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });

    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => {
                    if (paused) {
                        audio.play()
                        setDuration(audio.duration)
                    } else {
                        audio.pause()
                    }
                    setPaused(!paused)
                }}
            >
                {paused ? (
                <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                />
                ) : (
                <PauseRounded 
                    sx={{ fontSize: '3rem' }} 
                />
                )}
            </IconButton>
            <Box sx={{ width: '100%' }}>
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={duration ? duration : 0}
                    onChange={(_, value) => setPosition(value)}
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px ${
                            theme.palette.mode === 'dark'
                                ? 'rgb(255 255 255 / 16%)'
                                : 'rgb(0 0 0 / 16%)'
                            }`,
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                        },
                        '& .MuiSlider-rail': {
                        opacity: 0.28,
                        },
                    }}
                    />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                    >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration ? duration - position : 0)}</TinyText>
                </Box>
            </Box>
        </Box>
    )
}
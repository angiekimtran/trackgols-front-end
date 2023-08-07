import React from 'react'
import {
    createTheme,
    ThemeProvider,
    AppBar,
    Typography,
    Container,
} from '@mui/material'
import Board from './components/board/board'

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'revert',
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <header>
                <AppBar height={60} sx={{ background: '#c1c1c1' }}>
                    <Typography
                        variant="h3"
                        textAlign={'center'}
                        sx={{ flexGrow: 1 }}
                    >
                        TrackGols
                    </Typography>
                </AppBar>
            </header>
            <main
                style={{
                    height: 'calc(100vh - 60px)',
                    marginTop: 60,
                    background: '#f8ebeb',
                }}
            >
                <Container>
                    <Board />
                </Container>
            </main>
        </ThemeProvider>
    )
}

export default App

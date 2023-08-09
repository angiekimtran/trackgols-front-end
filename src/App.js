import {
    createTheme,
    ThemeProvider,
    AppBar,
    Typography,
    Container,
} from '@mui/material'
import Board from './components/board/board'
import { useState } from 'react'

function App() {
    const [boardTitle, setBoardTitle] = useState()

    const theme = createTheme({
        typography: {
            fontFamily: 'revert',
        },
    })

    const getBoardData = (title) => {
        setBoardTitle(title)
    }

    return (
        <ThemeProvider theme={theme}>
            <header>
                <AppBar height={60} sx={{ background: '#2a3eb1' }}>
                    <Typography
                        variant="h3"
                        textAlign={'center'}
                        sx={{ flexGrow: 1 }}
                        color={'#ededed'}
                    >
                        {boardTitle ? boardTitle : 'TrackGols'}
                    </Typography>
                </AppBar>
            </header>
            <main
                style={{
                    height: 'calc(100vh - 60px)',
                    marginTop: 60,
                    background: '#ffffff',
                }}
            >
                <Container sx={{ paddingTop: 5, margin: '0px 80px' }}>
                    <Board getBoardData={getBoardData} />
                </Container>
            </main>
        </ThemeProvider>
    )
}

export default App

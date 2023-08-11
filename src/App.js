import {
    createTheme,
    ThemeProvider,
    AppBar,
    Typography,
    Container,
} from '@mui/material'
import Board from './components/board/board'
import { useState } from 'react'
import logo from './assets/favicon.ico'

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
                <AppBar height={60} sx={{display: '-webkit-inline-box', background: '#002884'}}>
                    <Typography
                        fontSize={'x-large'}
                        textAlign={'left'}
                        color={'#eeeeee'}
                        marginTop={1}
                        marginLeft={2}>
                    <img src={logo} alt='logo' style={{width: 20, height: 20, paddingRight: 5}}/>
                    TrackGols
                    </Typography>
                    <Typography
                        variant="h3"
                        textAlign={'center'}
                        sx={{ flexGrow: 1 }}
                        color={'#eeeeee'}
                        marginRight={22}
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
                <Container sx={{ paddingTop: 3, margin: '0px 80px' }}>
                    <Board getBoardData={getBoardData} />
                </Container>
            </main>
        </ThemeProvider>
    )
}

export default App

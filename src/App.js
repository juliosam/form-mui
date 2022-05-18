import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createTheme, ThemeProvider} from '@mui/material'
import { green, purple } from '@mui/material/colors'
import TextField from '@mui/material/TextField';

const theme = createTheme({
    palette:{
      primary:{
        main: '#fefefe'
      },
      secondary: green
    },
    typography:{fontFamily:'Quicksand'}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;

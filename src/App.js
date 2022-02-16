
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AllTheme from './theme'
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";


function App() {
  const theme1 = AllTheme.greenTheme

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme1}>

          <GlobalStyles />
          <Switch>
            <Route exact path="/" >
              <Home theme={theme1} />

            </Route>

          </Switch >

        </ThemeProvider>


      </BrowserRouter >
    </>
  );
}

export default App;

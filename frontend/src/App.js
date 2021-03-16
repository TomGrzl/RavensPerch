import './App.css';
import AppHeader from "./components/AppHeader";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import LearningRessources from "./pages/LearningRessources";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";

function App() {
    return (
        <PageLayout>
            <Router>
                <GlobalStyle>
                    <AppHeader/>
                    <Switch>
                        <Route path="/learningresources">
                            <LearningRessources/>
                        </Route>
                    </Switch>
                </GlobalStyle>
            </Router>
        </PageLayout>
    );
}

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;`

export default App;

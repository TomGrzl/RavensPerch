import './App.css';
import AppHeader from "./components/AppHeader";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import LearningResources from "./pages/LearningResources";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";
import Konva from "./pages/Konva";

function App() {
    
    return (
        <PageLayout>
            <AppHeader/>
            <Router>
                <GlobalStyle/>
                <Switch>
                    <Route exact path="/learningresources">
                        <LearningResources/>
                    </Route>
                    <Route exact path="/konva">
                        <Konva/>
                    </Route>
                </Switch>
            </Router>
        </PageLayout>
    );
}

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;`

export default App;

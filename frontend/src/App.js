import './App.css';
import AppHeader from "./components/AppHeader";
import {Switch, Route} from "react-router-dom";
import LearningRessources from "./pages/LearningRessources";
import styled from "styled-components/macro";

function App() {
    return (
        <PageLayout>
            <AppHeader/>
            <Switch>
                <Route path="/learningresources">
                    <LearningRessources/>
                </Route>
            </Switch>
        </PageLayout>
    );
}

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;`

export default App;

import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import LearningResources from "./pages/LearningResources";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";
import Task from "./components/Task";
import React from 'react';
import LearningCard from "./pages/LearningCard";


function App() {

    return (
        <PageLayout>
            <Router>
                <GlobalStyle/>
                <Switch>
                    <Route exact path="/learningresources">
                        <LearningResources/>
                    </Route>
                    <Route exact path="/">
                        <LearningCard/>
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

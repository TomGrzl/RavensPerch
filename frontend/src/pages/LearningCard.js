import Task from "../components/Task";
import Solution from "../components/Solution";
import {useState} from "react";
import styled from "styled-components/macro";

export default function LearningCard() {

    const [showSolution, setShowSolution] = useState(false)

    const showAndScrollToSolution = () => {
        setShowSolution(true)
        window.scrollBy({top: window.innerHeight, behavior: "smooth"})
        console.log('Button Works')
    }

    return (
        <Wrapper>
            <Task onClickScroll={showAndScrollToSolution}/>
            <Solution showSolution={showSolution}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
            background:
            url('slide4.jpg')
            fixed;
            background-size: cover;
            `
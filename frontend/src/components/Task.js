import {Stage, Layer, Group} from 'react-konva';
import useLearningCard from "../customHooks/useLearningCard";
import Background from "./Background";
import {useEffect, useState} from "react"
import positionUtil from "../util/positionUtil";
import DraggableDefense from "./DraggableDefense";
import OLine from "./OLine";
import Quarterback from "./Quarterback";
import Runningback from "./RunningBack";
import WideReceiver from "./WideReceiver";
import SlotReceiver from "./SlotReceiver";
import TaskBoard from "./TaskBoard";


export default function Task({onClickScroll}) {

    const {backgroundDimensions} = positionUtil()

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const
        {
            defense,
            oLine,
            qb,
            rb,
            wr,
            sr,
            isLoaded,
            setIsLoaded,
            loadLearningCard,
            handleMouseDown,
        } = useLearningCard()


    useEffect(() => {
        if (!isLoaded) {
            loadLearningCard()
            setIsLoaded(true)
        }

    }, [isLoaded])

    window.onresize = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }

    const testHandler = (event) => {
        const Rect = event.target.x()
        console.log(Rect)
    }


    return (
        <Stage id={'Stage'} width={window.innerWidth}
               height={window.innerHeight}
               onMouseDown={handleMouseDown}>
            <Layer x={(windowWidth / 2) - (backgroundDimensions.width / 2)}
                   y={(windowHeight - backgroundDimensions.height) / 2}
                   width={backgroundDimensions.width}
                   height={backgroundDimensions.height}>
                <Background/>
                {defense.map((defender) => (
                    <DraggableDefense defender={defender} onClick={testHandler}/>))}
                <Group key={'Offense'}>
                    {oLine.map((lineman) => (
                        <OLine lineman={lineman}/>
                    ))}
                    {qb.map((q) => (
                        <Quarterback q={q}/>
                    ))}
                    {rb.map((r) => (
                        <Runningback r={r}/>
                    ))}
                    {wr.map((w) => (
                        <WideReceiver w={w}/>
                    ))}
                    {sr.map((s) => (
                        <SlotReceiver s={s}/>
                    ))}
                </Group>
                <TaskBoard onClickScroll={onClickScroll}/>
            </Layer>
        </Stage>
    )
}







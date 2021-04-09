import {Group, Layer, Rect, Stage, Text} from "react-konva";
import {useState} from "react"
import Background from "./Background";
import positionUtil from "../util/positionUtil";
import TaskBoard from "./TaskBoard";

export default function Solution({showSolution}) {

    const [solutionCircles, setSolutionCircles] = useState([])
    const [solutionRects, setSolutionRects] = useState([])
    const {rect, backgroundDimensions} = positionUtil()

    if (showSolution) {
        return (
            <div>
                <Stage id={'SolutionStage'} width={window.innerWidth}
                       height={window.innerHeight}>
                    <Layer x={(window.innerWidth / 2) - (backgroundDimensions.width / 2)}
                           y={(window.innerHeight - backgroundDimensions.height) / 2}
                           width={backgroundDimensions.width}
                           height={backgroundDimensions.height}>
                        <Background/>
                        {solutionRects.map((defender) => (
                            <Group>
                                <Rect/>
                                <Text/>
                            </Group>))}
                        <Group>
                            <TaskBoard/>
                            <Text x={25}
                                  y={5}
                                  text={" \n\ - 10 Personal \n\ \n\ - Double Twins"}
                                  height={125}
                                  width={225}
                                  align={'center'}
                                  fontFamily={'Roboto'}
                                  fontSize={15}
                                  verticalAlign={'top'}
                                  padding={15}
                                  fill={'#fff'}
                                  fontSize={13}
                            />
                            <Group>
                                <Group>
                                    <Rect x={50}
                                          y={95}
                                          height={25}
                                          width={75}
                                          cornerRadius={3}
                                          stroke={'#fff'}
                                          strokeWidth={1}
                                    />
                                    <Text text={'Correct'}
                                          height={25}
                                          width={75}
                                          x={50}
                                          y={95}
                                          align={'center'}
                                          verticalAlign={'middle'}
                                          fill={'#0a0'}
                                          fontSize={13}
                                    />
                                </Group>
                                <Group>
                                    <Rect x={150}
                                          y={95}
                                          height={25}
                                          width={75}
                                          cornerRadius={3}
                                          stroke={'#fff'}
                                          strokeWidth={1}
                                    />
                                    <Text text={'Wrong'}
                                          height={25}
                                          width={75}
                                          x={150}
                                          y={95}
                                          align={'center'}
                                          verticalAlign={'middle'}
                                          fill={'#a00'}
                                          fontSize={13}
                                    />
                                </Group>
                            </Group>
                        </Group>
                    </Layer>
                </Stage>
            </div>
        )
    }
    return (
        <></>)
}
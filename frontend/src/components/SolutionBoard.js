import {Group, Rect, Text} from "react-konva";
import TextCard from "./TextCard";

export default function SolutionBoard() {

    return (
        <Group>
            <TextCard/>
            <Text x={25}
                  y={5}
                  text={"- 10 Personell"}
                  height={125}
                  width={225}
                  align={'center'}
                  fontFamily={'Roboto'}
                  fontSize={13}
                  verticalAlign={'top'}
                  padding={15}
                  fill={'#fff'}

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
                    <Text text={'Richtig'}
                          height={25}
                          width={75}
                          x={50}
                          y={95}
                          align={'center'}
                          verticalAlign={'middle'}
                          fill={'#fff'}
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
                    <Text text={'Falsch'}
                          height={25}
                          width={75}
                          x={150}
                          y={95}
                          align={'center'}
                          verticalAlign={'middle'}
                          fill={'#fff'}
                          fontSize={13}
                    />
                </Group>
            </Group>
        </Group>
    )
}
import {Group, Image, Rect, Text} from "react-konva";
import TextCard from "./TextCard";

export default function TaskBoard({onClickScroll}) {


    return (
        <Group>
            <TextCard/>
            <Text x={25}
                  y={5}
                  text={"Benenne das Offense Personell und stelle eine Cover 2 aus der 3-Base gegen die Offense Formation"}
                  height={125}
                  width={225}
                  align={'center'}
                  fontFamily={'Roboto'}
                  fontSize={13}
                  verticalAlign={'top'}
                  padding={15}
                  fill={'#fff'}
                  lineHeight={1.2}
            />
            <Group onClick={onClickScroll} onTap={onClickScroll}>
                <Rect x={((225 - 25) / 2) - 15}
                      y={95}
                      height={25}
                      width={100}
                      cornerRadius={3}
                      stroke={'#fff'}
                      strokeWidth={1}
                />
                <Text text={'Lösung'}
                      height={25}
                      width={100}
                      x={((225 - 25) / 2) - 15}
                      y={95}
                      align={'center'}
                      verticalAlign={'middle'}
                      fill={'#fff'}
                      fontSize={13}
                />
            </Group>
        </Group>
    )
}
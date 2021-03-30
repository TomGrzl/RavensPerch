import {Group, Rect, Text} from "react-konva";

export default function Sam() {

    return (
        <Group draggable>
            <Rect
                id={'200'}
                x={200}
                y={200}
                fill={'#000'}
                width={50}
                height={50}
                key={'200'}
                rotation={45}
                shadowBlur={5}
                shadowColor={'#000'}
                shadowForStrokeEnabled={false}
            />
            <Text x={190} y={230} text={'Test'} fill={'#444'} fontStyle={'Bold'} fontSize={12}/>
        </Group>
    )
}
import {Circle, Group, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function WideReceiver({w}) {

    const {rect, wideReceiver, initCoordinates, fontSize} = positionUtil()

    return (
        <Group key={'G' + w.id}>
            <Circle
                {...w}
                key={w.id}
                x={initCoordinates.x + wideReceiver.offsetX * w.x}
                y={initCoordinates.y}
                radius={rect.rectDiagonal / 2}
                fill={'#C9E1F2'}
                shadowBlur={w.isSelected ? 10 : 5}
                shadowColor={w.isSelected ? '#999' : '#000'}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
            />
            <Text
                key={'t' + w.id}
                text={w.role}
                x={initCoordinates.x - (rect.rectDiagonal / 2) + wideReceiver.offsetX * w.x}
                y={initCoordinates.y - (rect.rectDiagonal / 2)}
                width={rect.rectDiagonal}
                height={rect.rectDiagonal}
                align={'center'}
                fontFamily={'Arial'}
                fontStyle={'bold'}
                fontSize={fontSize}
                verticalAlign={'middle'}
            />
        </Group>
    )
}
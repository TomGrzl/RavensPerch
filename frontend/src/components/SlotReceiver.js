import {Circle, Group, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function SlotReceiver({s}) {

    const {slotReceiver, initCoordinates, fontSize, rect} = positionUtil()

    return (
        <Group key={'G' + s.id}>
            <Circle
                {...s}
                key={s.id}
                x={initCoordinates.x + slotReceiver.offsetX * s.x}
                y={initCoordinates.y - slotReceiver.offsetY * s.y}
                radius={rect.rectDiagonal / 2}
                fill={'#C9E1F2'}
                shadowBlur={s.isSelected ? 10 : 5}
                shadowColor={s.isSelected ? '#999' : '#000'}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
            />
            <Text
                key={'t' + s.id}
                text={s.role}
                x={initCoordinates.x - (rect.rectDiagonal / 2) + slotReceiver.offsetX * s.x}
                y={initCoordinates.y - (rect.rectDiagonal / 2) - slotReceiver.offsetY * s.y}
                width={rect.rectDiagonal}
                height={rect.rectDiagonal}
                align={'center'}
                fontFamily={'Arial'}
                fontStyle={'bold'}
                fontSize={fontSize}
                verticalAlign={'middle'}
            />
        </Group>)

}
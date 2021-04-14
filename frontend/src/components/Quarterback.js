import {Circle, Group, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function Quarterback({q}) {

    const {rect, fontSize, initCoordinates, quarterback} = positionUtil()

    return (
        <Group key={'G' + q.id}>
            <Circle
                {...q}
                key={q.id}
                x={initCoordinates.x}
                y={initCoordinates.y - quarterback.offsetY}
                radius={rect.rectDiagonal / 2}
                fill={'#C9E1F2'}
                shadowBlur={q.isSelected ? 10 : 5}
                shadowColor={q.isSelected ? '#999' : '#000'}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}/>
            />
            <Text
                key={'t' + q.id}
                text={q.role}
                x={initCoordinates.x - (rect.rectDiagonal / 2)}
                y={initCoordinates.y - (rect.rectDiagonal / 2) - quarterback.offsetY}
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
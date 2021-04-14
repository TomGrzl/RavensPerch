import {Circle, Group, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function Runningback({r}) {

    const {rect, fontSize, runningBack, initCoordinates, oline, quarterback} = positionUtil()

    return (
        <Group key={'G' + r.id}>
            <Circle
                {...r}
                key={r.id}
                x={initCoordinates.x - runningBack.offsetX}
                y={initCoordinates.y - runningBack.offsetY}
                radius={rect.rectDiagonal / 2}
                fill={'#C9E1F2'}
                shadowBlur={r.isSelected ? 10 : 5}
                shadowColor={r.isSelected ? '#999' : '#000'}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
            />
            <Text
                key={'t' + r.id}
                text={r.role}
                x={initCoordinates.x - (rect.rectDiagonal / 2) - oline.splits - rect.rectDiagonal}
                y={initCoordinates.y - (rect.rectDiagonal / 2) - quarterback.offsetY - (oline.splits)}
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
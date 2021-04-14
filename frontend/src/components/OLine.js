import {Circle, Group, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function OLine({lineman}) {

    const {rect, oline, fontSize, initCoordinates} = positionUtil()

    return (
        <Group key={'G' + lineman.id}>
            <Circle
                {...lineman}
                id={lineman.id}
                key={lineman.id}
                x={initCoordinates.x + oline.offsetX * lineman.x}
                y={initCoordinates.y}
                radius={rect.rectDiagonal / 2}
                fill={'#C9E1F2'}
                shadowBlur={lineman.isSelected ? 10 : 5}
                shadowColor={lineman.isSelected ? '#999' : '#000'}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
            />
            <Text
                id={lineman.id}
                key={'t' + lineman.id}
                text={lineman.role}
                x={(initCoordinates.x - (rect.rectDiagonal / 2)) + ((rect.rectDiagonal + oline.splits) * lineman.x)}
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
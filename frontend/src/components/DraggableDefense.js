import {Group, Rect, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function DraggableDefense({defender}) {

    const {rect, defense, fontSize} = positionUtil()

    return (

        <Group draggable
               key={'G' + defender.id}
        >
            <Rect
                {...defender}
                key={defender.id}
                x={defense.initX + defense.offsetX * defender.x}
                y={defense.y + defense.offsetY * defender.y}
                width={rect.width}
                height={rect.height}
                rotation={45}
                fill={'#88AAF2'}
                shadowBlur={defender.isSelected ? 15 : 5}
                shadowColor={defender.isSelected ? '#fff' : '#000'}
                shadowForStrokeEnabled={false}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
            />
            <Text
                key={'t' + defender.id}
                text={defender.role}
                x={(defense.initX + defense.offsetX * defender.x) - rect.rectDiagonal / 2}
                y={(defense.y + defense.offsetY * defender.y) + rect.rectDiagonal / 2 - fontSize / 2}
                width={rect.rectDiagonal}
                height={rect.rectDiagonal}
                align={'center'}
                fontFamily={'Arial'}
                fontStyle={'bold'}
                fontSize={fontSize}
                verticalAlign={'top'}
            />
        </Group>
    )
}
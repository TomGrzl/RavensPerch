import {Group, Rect, Text} from "react-konva";
import positionUtil from "../util/positionUtil";
import TextRect from "./TextRect";

export default function DraggableDefense({defender, onClick}) {

    const {rect, defense, fontSize} = positionUtil()

    return (

        <Group draggable
               key={'G' + defender.id}
        >
            <TextRect onClick={onClick}
                      key={defender.id}
                      x={defense.initX + defense.offsetX * defender.x}
                      y={defense.y + defense.offsetY * defender.y}
                      shadowForStrokeEnabled={false}
                //onMouseDown={handleMouseDown}
                //onMouseUp={markSelectedObjectOnMouseUp}
                //onDragStart={markSelectedObjectOnMouseUp}
                //onDragEnd={setCoordinatesOnDragEnd}
                //onTouchStart={handleMouseDown}
                //onTouchEnd={markSelectedObjectOnMouseUp}
                      text={defender.role}
            />
        </Group>
    )
}
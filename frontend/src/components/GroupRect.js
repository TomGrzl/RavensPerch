import {Rect} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function GroupRect({x, y}) {

    const {rect} = positionUtil()

    return (
        <Rect
            x={x}
            y={y}
            height={rect.height}
            width={rect.width}
            rotation={45}
            fill={'#88AAF2'}
            shadowBlur={5}
            shadowColor={'#000'}
        />
    )
}
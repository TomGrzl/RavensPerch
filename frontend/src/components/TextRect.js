import GroupRect from "./GroupRect";
import GroupText from "./GroupText";
import {Group} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function TextRect({x, y, text}) {

    const {dline, rect, fontSize} = positionUtil()

    return (
        <Group>
            <GroupRect x={x}
                       y={y}
            />
            <GroupText text={text}
                       x={x - (rect.rectDiagonal / 2)}
                       y={y + rect.rectDiagonal / 2 - fontSize / 2}
            />
        </Group>
    )
}
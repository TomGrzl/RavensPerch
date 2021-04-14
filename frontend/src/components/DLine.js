import positionUtil from "../util/positionUtil";
import {Rect} from "react-konva";
import TextRect from "./TextRect";

export default function DLine({liner}) {

    const {dlinePos} = positionUtil()

    console.log(liner)

    if (liner.role === 'DT') {
        return (
            <TextRect
                x={dlinePos.threeTechStr}
                y={dlinePos.los}
                text={liner.role}
            />
        )
    } else if (liner.role === 'NT') {
        return (
            <TextRect
                x={dlinePos.oneTech}
                y={dlinePos.los}
                text={liner.role}
            />
        )
    } else if (liner.role === 'DE' && liner.x === -1) {
        return (
            <TextRect x={dlinePos.fiveTech}
                      y={dlinePos.los}
                      text={liner.role}
            />

        )
    } else if (liner.role === 'DE' && liner.x === 1) {
        return (
            <TextRect
                x={dlinePos.fiveTechStr}
                y={dlinePos.los}
                text={liner.role}
            />
        )
    }
    return (<Rect></Rect>)

}

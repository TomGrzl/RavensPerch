import {Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function GroupText({x, y, text}) {

    const {rect, fontSize} = positionUtil()

    return (
        <Text text={text}
              x={x}
              y={y}
              height={rect.rectDiagonal}
              width={rect.rectDiagonal}
              align={'center'}
              verticalAlign={'top'}
              fontSize={fontSize}
              fontFamily={'Arial'}
              fontStyle={'bold'}
        />
    )
}
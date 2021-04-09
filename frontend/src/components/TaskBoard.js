import useImage from "use-image";
import {Image} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function TaskBoard() {

    const [image] = useImage('/taskBoard.jpeg')
    const {backgroundDimensions} = positionUtil()

    return <Image x={25}
                  y={5}
                  height={125}
                  width={225}
                  image={image}
                  shadowBlur={10}
                  shadowColor={'#000'}
                  opacity={0.65}
    />
}
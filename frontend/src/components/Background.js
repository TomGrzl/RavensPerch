import useImage from "use-image";
import {Image} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function Background() {

    const [image] = useImage('/background.jpg')
    const {backgroundDimensions} = positionUtil()

    return <Image width={backgroundDimensions.width}
                  height={backgroundDimensions.height} image={image}
                  shadowBlur={0}
                  shadowColor={'#000'}
                  opacity={0.9}
    />
}
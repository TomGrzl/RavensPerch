import {Image} from "react-konva";
import useImage from "use-image";

export default function TaskCard() {

    const [image] = useImage('/taskBoard.jpeg')

    return (
        <Image x={25}
               y={5}
               height={125}
               width={225}
               image={image}
               shadowBlur={3}
               shadowColor={'#000'}
               opacity={0.65}
        />
    )
}
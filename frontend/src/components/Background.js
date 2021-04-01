import useImage from "use-image";
import {Image} from "react-konva";

export default function Background() {

    const [image] = useImage('/background.jpg')

    return <Image width={((window.innerHeight * 0.85) * 1.514)} height={window.innerHeight * 0.85} image={image}
                  shadowBlur={100}
                  shadowColor={'#000'}/>

}
import positionUtil from "../util/positionUtil";
import TextRect from "./TextRect";

export default function Linebacker({backer}) {

    const {linebackerPos} = positionUtil()
    console.log(backer)

    if (backer.role === 'S') {
        return (
            <TextRect x={linebackerPos.ninetyTechStrX}
                      y={linebackerPos.ninetyTechY}
                      text={backer.role}/>
        )
    } else if (backer.role === 'M') {
        return (
            <TextRect x={linebackerPos.shadeStrX}
                      y={linebackerPos.shadeY}
                      text={backer.role}
            />
        )
    } else if (backer.role === 'W') {
        return (
            <TextRect x={linebackerPos.fourtyInsideTechX}
                      y={linebackerPos.fourtyInsideTechY}
                      text={backer.role}
            />
        )
    }
    return (<></>)
}
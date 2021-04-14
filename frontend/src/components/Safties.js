import positionUtil from "../util/positionUtil";
import TextRect from "./TextRect";

export default function Safeties({safety}) {

    const {safetyPos} = positionUtil()


    if (safety.role === '$$') {
        return (
            <TextRect x={safetyPos.alignOnHashmarkStrX}
                      y={safetyPos.alignDeepY}
                      text={safety.role}
            />
        )
    } else if (safety.role === 'FS') {
        return (
            <TextRect x={safetyPos.alignOnHashmarkX}
                      y={safetyPos.alignDeepY}
                      text={safety.role}
            />
        )
    }
    return (<></>)
}

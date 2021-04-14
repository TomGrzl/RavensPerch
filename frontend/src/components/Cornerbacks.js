import positionUtil from "../util/positionUtil";
import TextRect from "./TextRect";

export default function Cornerbacks({cb}) {

    const {cornerbackPos} = positionUtil()

    return (
        <>
            <TextRect x={cornerbackPos.outsideLeverageX}
                      y={cornerbackPos.depthY}
                      text={cb.role}
            />
            <TextRect x={cornerbackPos.outsideLeverageStrX}
                      y={cornerbackPos.depthY}
                      text={cb.role}
            />
        </>
    )
}

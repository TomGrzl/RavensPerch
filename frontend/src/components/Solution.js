import {Group, Layer, Stage} from "react-konva";
import {useEffect} from "react"
import Background from "./Background";
import positionUtil from "../util/positionUtil";
import useSolution from "../customHooks/useSolution"
import DLine from "./DLine";
import Linebacker from "./Linebacker";
import Cornerbacks from "./Cornerbacks";
import Safeties from "./Safties";
import OLine from "./OLine";
import Quarterback from "./Quarterback";
import Runningback from "./RunningBack";
import WideReceiver from "./WideReceiver";
import SlotReceiver from "./SlotReceiver";
import SolutionBoard from "./SolutionBoard";

export default function Solution({showSolution}) {

    const {
        solutionOline,
        solutionQb,
        solutionRb,
        solutionWr,
        solutionSr,
        solutionDline,
        solutionLinebacker,
        solutionCornerbacks,
        solutionSafeties,
        isSolutionLoaded,
        setIsSolutionLoaded,
        loadSolution
    } = useSolution()

    const {backgroundDimensions} = positionUtil()


    useEffect(() => {
        if (!isSolutionLoaded) {
            loadSolution()
            setIsSolutionLoaded(true)
        }

    }, [isSolutionLoaded])

    if (showSolution) {
        return (
            <Stage id={'SolutionStage'} width={window.innerWidth}
                   height={window.innerHeight}>
                <Layer x={(window.innerWidth / 2) - (backgroundDimensions.width / 2)}
                       y={(window.innerHeight - backgroundDimensions.height) / 2}
                       width={backgroundDimensions.width}
                       height={backgroundDimensions.height}>
                    <Background/>
                    <Group key={'Offense'}>
                        {solutionOline.map((lineman) => (
                            <OLine lineman={lineman}/>
                        ))}
                        {solutionQb.map((q) => (
                            <Quarterback q={q}/>
                        ))}
                        {solutionRb.map((r) => (
                            <Runningback r={r}/>
                        ))}
                        {solutionWr.map((w) => (
                            <WideReceiver w={w}/>
                        ))}
                        {solutionSr.map((s) => (
                            <SlotReceiver s={s}/>
                        ))}
                    </Group>
                    {solutionDline.map((liner) =>
                        <DLine liner={liner}/>
                    )}
                    {solutionLinebacker.map((backer) =>
                        <Linebacker backer={backer}/>
                    )}
                    {solutionCornerbacks.map((cb) =>
                        <Cornerbacks cb={cb}/>
                    )}
                    {solutionSafeties.map((safety) =>
                        <Safeties safety={safety}/>
                    )}
                    <SolutionBoard/>
                </Layer>
            </Stage>
        )
    }
    return (<></>)


}
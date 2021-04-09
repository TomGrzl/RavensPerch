import {Group, Rect, Text} from "react-konva";
import positionUtil from "../util/positionUtil";

export default function Linebacker({linebacker}) {

    const {rect, linebackerPos, fontSize} = positionUtil()

    linebacker.map((backer) => {
            if (backer.role === 'Sam') {
                return (
                    <Group>
                        <Rect x={linebackerPos.ninetyTechX}
                              y={linebackerPos.ninetyTechY}
                              height={rect.height}
                              width={rect.width}
                              rotation={45}
                              fill={'#C9E1F2'}
                        />
                        <Text text={backer.role}
                              x={linebackerPos.ninetyTechX}
                              y={linebackerPos.ninetyTechY}
                              height={rect.rectDiagonal}
                              width={rect.rectDiagonal}
                              align={'center'}
                              verticalAlign={'middle'}
                              fill={'#0a0'}
                              fontSize={fontSize}
                        />
                    </Group>
                )
            } else if (backer.role === 'Mike') {
                return (
                    <Group>
                        <Rect x={linebackerPos.tenTechX}
                              y={linebackerPos.tenTechY}
                              height={rect.height}
                              width={rect.width}
                              rotation={45}
                              fill={'#C9E1F2'}
                        />
                        <Text text={backer.role}
                              x={linebackerPos.tenTechX}
                              y={linebackerPos.tenTechY}
                              height={rect.height}
                              width={rect.width}
                              align={'center'}
                              verticalAlign={'middle'}
                              fill={'#0a0'}
                              fontSize={13}
                        />
                    </Group>
                )
            } else if (backer.role === 'Will') {
                return (
                    <Group>
                        <Rect x={linebackerPos.fourtyInsideTechX}
                              y={linebackerPos.fourtyInsideTechY}
                              height={rect.height}
                              width={rect.width}
                              rotation={45}
                              fill={'#C9E1F2'}
                        />
                        <Text text={backer.role}
                              x={linebackerPos.fourtyInsideTechX}
                              y={linebackerPos.fourtyInsideTechY}
                              height={rect.height}
                              width={rect.width}
                              rotation={45}
                              align={'center'}
                              verticalAlign={'middle'}
                              fill={'#0a0'}
                              fontSize={13}
                        />
                    </Group>
                )
            } else return (<></>)
        }
    )

}
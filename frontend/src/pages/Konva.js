import {Stage, Layer, Rect, Circle, Text, Group} from 'react-konva';
import useLearningCard from "../customHooks/useLearningCard";
import Background from "../components/Background";
import {useEffect} from "react"
import positionUtil from "../util/positionUtil";


export default function Konva() {

    const {rect} = positionUtil()

    const
        {
            defense,
            oLine,
            qb,
            rb,
            wr,
            sr,
            isLoaded,
            setIsLoaded,
            loadLearningCard,
            handleMouseDown,
            markSelectedObjectOnMouseUp,
            setCoordinatesOnDragEnd,
        } = useLearningCard()

    useEffect(() => {
        if (!isLoaded) {
            loadLearningCard()
            setIsLoaded(true)
        }

    },)

    //The following constants are set to define relative dimensions and positions depending on the display size
    const fieldWidth = 53.33 //yards
    const fieldHeight = 35 //yards
    const aspectRatio = fieldWidth / fieldHeight
    const cropFactor = 0.85

    const rectWidth = window.innerHeight * cropFactor * aspectRatio / fieldWidth //1 yard
    const rectHeight = window.innerHeight * cropFactor / fieldHeight //1 yard
    const rectDiagonal = rectHeight * Math.sqrt(2) //used to set radius of circles and to center text in rects

    const initX = (window.innerHeight * cropFactor * aspectRatio) / 2
    const initY = ((window.innerHeight * cropFactor) / 3.5) - (rectDiagonal / 2) //initY starts 10 yard from the top, therefore with factor 3.5
    const splits = (window.innerHeight * cropFactor * aspectRatio) / (fieldWidth) //0.5 yard
    const olineOffset = rectDiagonal + splits


    const wrOffset = (window.innerHeight * cropFactor * aspectRatio / fieldWidth) * 20

    const srOffsetX = (wrOffset + ((rectDiagonal + splits) * 2)) / 2
    const srOffsetY = rectDiagonal

    const qbGunOffsetY = ((window.innerHeight * cropFactor * aspectRatio / fieldWidth) * 5)

    const rbOffsetX = splits + rectDiagonal
    const rbOffsetY = qbGunOffsetY + splits

    const initDefenseX = (window.innerHeight * cropFactor * aspectRatio) - ((window.innerHeight * cropFactor * aspectRatio))
    const initDefenseY = window.innerHeight * 0.75
    const DefenseOffsetX = rectDiagonal
    const DefenseOffsetY = rectDiagonal

    const fontSize = 10


    return (
        <div>
            <Stage id={'Stage'} width={((window.innerHeight) * aspectRatio)} height={window.innerHeight}
                   onMouseDown={handleMouseDown}>
                <Layer>
                    <Background/>
                    {defense.map((defender) => (
                        <Group draggable
                               key={'G' + defender.id}
                        >
                            <Rect
                                {...defender}
                                key={defender.id}
                                x={initDefenseX + DefenseOffsetX * defender.x}
                                y={initDefenseY + DefenseOffsetY * defender.y}
                                width={rect.width}
                                height={rect.height}
                                rotation={45}
                                fill={'#C9E1F2'}
                                shadowBlur={defender.isSelected ? 15 : 5}
                                shadowColor={defender.isSelected ? '#fff' : '#000'}
                                shadowForStrokeEnabled={false}
                                onMouseDown={handleMouseDown}
                                onMouseUp={markSelectedObjectOnMouseUp}
                                onDragStart={markSelectedObjectOnMouseUp}
                                onDragEnd={setCoordinatesOnDragEnd}
                                onTouchStart={handleMouseDown}
                                onTouchEnd={markSelectedObjectOnMouseUp}
                            />
                            <Text
                                key={'t' + defender.id}
                                text={defender.role}
                                x={(initDefenseX + DefenseOffsetX * defender.x) - rectDiagonal / 2}
                                y={(initDefenseY + DefenseOffsetY * defender.y) + rectDiagonal / 2 - fontSize / 2}
                                width={rectDiagonal}
                                height={rectDiagonal}
                                align={'center'}
                                fontFamily={'Arial'}
                                fontStyle={'bold'}
                                fontSize={fontSize}
                                verticalAlign={'top'}
                            />
                        </Group>))}
                    <Group key={'Offense'}>
                        {oLine.map((lineman) => (
                            <Group key={'G' + lineman.id}>
                                <Circle
                                    {...lineman}
                                    id={lineman.id}
                                    key={lineman.id}
                                    x={initX + olineOffset * lineman.x}
                                    y={initY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={lineman.isSelected ? 10 : 5}
                                    shadowColor={lineman.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}
                                />
                                <Text
                                    id={lineman.id}
                                    key={'t' + lineman.id}
                                    text={lineman.role}
                                    x={(initX - (rectDiagonal / 2)) + ((rectDiagonal + splits) * lineman.x)}
                                    y={initY - (rectDiagonal / 2)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>
                        ))}
                        {qb.map((q) => (
                            <Group key={'G' + q.id}>
                                <Circle
                                    {...q}
                                    key={q.id}
                                    x={(initX)}
                                    y={initY - qbGunOffsetY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={q.isSelected ? 10 : 5}
                                    shadowColor={q.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + q.id}
                                    text={q.role}
                                    x={initX - (rectDiagonal / 2)}
                                    y={initY - (rectDiagonal / 2) - qbGunOffsetY}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>
                        ))}
                        {rb.map((r) => (
                            <Group key={'G' + r.id}>
                                <Circle
                                    {...r}
                                    key={r.id}
                                    x={initX - rbOffsetX}
                                    y={initY - rbOffsetY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={r.isSelected ? 10 : 5}
                                    shadowColor={r.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + r.id}
                                    text={r.role}
                                    x={initX - (rectDiagonal / 2) - splits - rectDiagonal}
                                    y={initY - (rectDiagonal / 2) - qbGunOffsetY - (splits)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                        {wr.map((w) => (
                            <Group key={'G' + w.id}>
                                <Circle
                                    {...w}
                                    key={w.id}
                                    x={initX + wrOffset * w.x}
                                    y={initY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={w.isSelected ? 10 : 5}
                                    shadowColor={w.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + w.id}
                                    text={w.role}
                                    x={initX - (rectDiagonal / 2) + wrOffset * w.x}
                                    y={initY - (rectDiagonal / 2)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                        {sr.map((s) => (
                            <Group key={'G' + s.id}>
                                <Circle
                                    {...s}
                                    key={s.id}
                                    x={initX + srOffsetX * s.x}
                                    y={initY - srOffsetY * s.y}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={s.isSelected ? 10 : 5}
                                    shadowColor={s.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + s.id}
                                    text={s.role}
                                    x={initX - (rectDiagonal / 2) + srOffsetX * s.x}
                                    y={initY - (rectDiagonal / 2) - srOffsetY * s.y}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                    </Group>
                </Layer>
            </Stage>
            <Stage id={'Solution'} width={((window.innerHeight) * aspectRatio)} height={window.innerHeight}
                   onMouseDown={handleMouseDown}>
                <Layer>
                    <Background/>
                    {defense.map((defender) => (
                        <Group draggable
                               key={'G' + defender.id}
                        >
                            <Rect
                                {...defender}
                                key={defender.id}
                                x={initDefenseX + DefenseOffsetX * defender.x}
                                y={initDefenseY + DefenseOffsetY * defender.y}
                                width={rect.width}
                                height={rect.height}
                                rotation={45}
                                fill={'#C9E1F2'}
                                shadowBlur={defender.isSelected ? 15 : 5}
                                shadowColor={defender.isSelected ? '#fff' : '#000'}
                                shadowForStrokeEnabled={false}
                                onMouseDown={handleMouseDown}
                                onMouseUp={markSelectedObjectOnMouseUp}
                                onDragStart={markSelectedObjectOnMouseUp}
                                onDragEnd={setCoordinatesOnDragEnd}
                                onTouchStart={handleMouseDown}
                                onTouchEnd={markSelectedObjectOnMouseUp}
                            />
                            <Text
                                key={'t' + defender.id}
                                text={defender.role}
                                x={(initDefenseX + DefenseOffsetX * defender.x) - rectDiagonal / 2}
                                y={(initDefenseY + DefenseOffsetY * defender.y) + rectDiagonal / 2 - fontSize / 2}
                                width={rectDiagonal}
                                height={rectDiagonal}
                                align={'center'}
                                fontFamily={'Arial'}
                                fontStyle={'bold'}
                                fontSize={fontSize}
                                verticalAlign={'top'}
                            />
                        </Group>))}
                    <Group key={'Offense'}>
                        {oLine.map((lineman) => (
                            <Group key={'G' + lineman.id}>
                                <Circle
                                    {...lineman}
                                    id={lineman.id}
                                    key={lineman.id}
                                    x={initX + olineOffset * lineman.x}
                                    y={initY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={lineman.isSelected ? 10 : 5}
                                    shadowColor={lineman.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}
                                />
                                <Text
                                    id={lineman.id}
                                    key={'t' + lineman.id}
                                    text={lineman.role}
                                    x={(initX - (rectDiagonal / 2)) + ((rectDiagonal + splits) * lineman.x)}
                                    y={initY - (rectDiagonal / 2)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>
                        ))}
                        {qb.map((q) => (
                            <Group key={'G' + q.id}>
                                <Circle
                                    {...q}
                                    key={q.id}
                                    x={(initX)}
                                    y={initY - qbGunOffsetY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={q.isSelected ? 10 : 5}
                                    shadowColor={q.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + q.id}
                                    text={q.role}
                                    x={initX - (rectDiagonal / 2)}
                                    y={initY - (rectDiagonal / 2) - qbGunOffsetY}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>
                        ))}
                        {rb.map((r) => (
                            <Group key={'G' + r.id}>
                                <Circle
                                    {...r}
                                    key={r.id}
                                    x={initX - rbOffsetX}
                                    y={initY - rbOffsetY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={r.isSelected ? 10 : 5}
                                    shadowColor={r.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + r.id}
                                    text={r.role}
                                    x={initX - (rectDiagonal / 2) - splits - rectDiagonal}
                                    y={initY - (rectDiagonal / 2) - qbGunOffsetY - (splits)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                        {wr.map((w) => (
                            <Group key={'G' + w.id}>
                                <Circle
                                    {...w}
                                    key={w.id}
                                    x={initX + wrOffset * w.x}
                                    y={initY}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={w.isSelected ? 10 : 5}
                                    shadowColor={w.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + w.id}
                                    text={w.role}
                                    x={initX - (rectDiagonal / 2) + wrOffset * w.x}
                                    y={initY - (rectDiagonal / 2)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                        {sr.map((s) => (
                            <Group key={'G' + s.id}>
                                <Circle
                                    {...s}
                                    key={s.id}
                                    x={initX + srOffsetX * s.x}
                                    y={initY - srOffsetY * s.y}
                                    radius={rectDiagonal / 2}
                                    fill={'#C9E1F2'}
                                    shadowBlur={s.isSelected ? 10 : 5}
                                    shadowColor={s.isSelected ? '#999' : '#000'}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}/>
                                <Text
                                    key={'t' + s.id}
                                    text={s.role}
                                    x={initX - (rectDiagonal / 2) + srOffsetX * s.x}
                                    y={initY - (rectDiagonal / 2) - srOffsetY * s.y}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'middle'}
                                />
                            </Group>))}
                    </Group>
                </Layer>
            </Stage>
        </div>
    )
}





import {Stage, Layer, Rect, Circle, Text, Group} from 'react-konva';
import useKonvaObjects from "../components/useKonvaObjects";
import Background from "../components/Background";

export default function Konva() {

    //onContentMouseOver für select von mehreren Objekten?

    const
        {
            rects,
            oLine,
            qb,
            rb,
            addRect,
            addCircle,
            removeObject,
            clearBoard,
            saveState,
            loadState,
            loadOffense,
            handleMouseDown,
            markSelectedObjectOnMouseUp,
            setCoordinatesOnDragEnd,
        } = useKonvaObjects()

    //The following constants are set to define relative dimensions and positions depending on the display size
    const fieldWidth = 53.33 //yards
    const fieldHeight = 35 //yards
    const aspectRatio = fieldWidth / fieldHeight
    const cropFactor = 0.85

    const rectWidth = window.innerHeight * cropFactor * aspectRatio / fieldWidth //1 yard
    const rectHeight = window.innerHeight * cropFactor / fieldHeight //1 yard
    const rectDiagonal = rectHeight * Math.sqrt(2) //used to set radius of circles and to center text in rects
    const initOLineX = (window.innerHeight * cropFactor * aspectRatio) / 2
    const initOLineY = ((window.innerHeight * cropFactor) / 3.5) - (rectDiagonal / 2) //initOLineY starts 10 yard from the top, therefore with factor 3.5
    const splits = (window.innerHeight * cropFactor * aspectRatio) / (fieldWidth) //0.5 yard

    const fontSize = 10


    return (
        <div>
            <button onClick={loadOffense}>Load Offense</button>
            <Stage id={'Stage'} width={((window.innerHeight) * aspectRatio)} height={window.innerHeight}
                   onMouseDown={handleMouseDown}>
                <Layer>
                    <Background/>
                    <Group draggable>
                        {rects.map((rect) => (
                            <Group id={rect.id}
                            >
                                <Rect
                                    {...rect}
                                    key={rect.id}
                                    x={initOLineX + (rect.x * (rectWidth + splits))}
                                    y={initOLineY}
                                    width={rectWidth}
                                    height={rectHeight}
                                    rotation={45}
                                    fill={'#C9E1F2'}
                                    shadowBlur={rect.isSelected ? 15 : 5}
                                    shadowColor={rect.isSelected ? '#fff' : '#000'}
                                    shadowForStrokeEnabled={false}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={markSelectedObjectOnMouseUp}
                                    onDragStart={markSelectedObjectOnMouseUp}
                                    onDragEnd={setCoordinatesOnDragEnd}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={markSelectedObjectOnMouseUp}
                                />
                                <Text
                                    key={'t' + rect.id}
                                    text={rect.role}
                                    x={(initOLineX + (rect.x * (rectWidth + splits))) - (rectDiagonal / 2)}
                                    y={initOLineY + (rectDiagonal / 2) - (fontSize / 2)}
                                    width={rectDiagonal}
                                    height={rectDiagonal}
                                    align={'center'}
                                    fontFamily={'Arial'}
                                    fontStyle={'bold'}
                                    fontSize={fontSize}
                                    verticalAlign={'top'}
                                />
                            </Group>))}
                    </Group>
                    <Group draggable>
                        {oLine.map((lineman) => (
                            <Group>
                                <Circle
                                    {...lineman}
                                    key={lineman.id}
                                    x={(initOLineX + (lineman.x * (rectDiagonal + splits)))}
                                    y={initOLineY}
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
                                    key={'t' + lineman.id}
                                    text={lineman.role}
                                    x={(initOLineX - (rectDiagonal / 2)) + ((rectDiagonal + splits) * lineman.x)}
                                    y={initOLineY - (rectDiagonal / 2)}
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
                    </Group>
                    <Group>
                        {qb.map((q) => (
                            <Group>
                                <Circle
                                    {...q}
                                    key={q.id}
                                    x={(initOLineX)}
                                    y={initOLineY - rectDiagonal - splits}
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
                                    x={initOLineX - (rectDiagonal / 2)}
                                    y={initOLineY - (rectDiagonal / 2) - rectDiagonal - splits}
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
                    </Group>
                    <Group>
                        {rb.map((r) => (
                            <Group>
                                <Circle
                                    {...r}
                                    key={r.id}
                                    x={initOLineX + 10}
                                    y={initOLineY}
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
                                    x={initOLineX - (rectDiagonal / 2)}
                                    y={initOLineY - (rectDiagonal / 2) - rectDiagonal - splits}
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





import {Stage, Layer, Rect, Circle} from 'react-konva';
import useKonvaObjects from "../components/useKonvaObjects";

export default function Konva() {

    const
        {
            rects,
            circles,
            addRect,
            addCircle,
            removeObject,
            clearBoard,
            saveState,
            loadState,
            handleMouseDown,
            markSelectedObjectOnMouseUp,
            setCoordinatesOnDragEnd
        } = useKonvaObjects()


    return (
        <div>
            <button onClick={addRect}>Add Rect</button>
            <button onClick={addCircle}>Add Circle</button>
            <button onClick={removeObject}>Remove</button>
            <button onClick={clearBoard}>Clear Board</button>
            <button onClick={saveState}>Save State</button>
            <button onClick={loadState}>Load State</button>
            <Stage width={window.innerHeight * 1.514} height={window.innerHeight} onMouseDown={handleMouseDown}>
                <Layer onMouseDown={handleMouseDown}>
                    {rects.map((rect) => (
                        <Rect
                            {...rect}
                            key={rect.id}
                            shadowBlur={rect.isSelected ? 15 : 5}
                            shadowColor={rect.isSelected ? '#fff' : '#000'}
                            shadowForStrokeEnabled={false}
                            draggable
                            onMouseDown={handleMouseDown}
                            onMouseUp={markSelectedObjectOnMouseUp}
                            onDragStart={markSelectedObjectOnMouseUp}
                            onDragEnd={setCoordinatesOnDragEnd}
                            onTouchStart={handleMouseDown}
                            onTouchEnd={markSelectedObjectOnMouseUp}
                        />))}
                    {circles.map((circle) => (
                        <Circle
                            {...circle}
                            key={circle.id}
                            shadowBlur={circle.isSelected ? 15 : 5}
                            shadowColor={circle.isSelected ? '#fff' : '#000'}
                            draggable
                            onMouseDown={unmarkSelectedObjectOnMouseDown}
                            onMouseUp={markSelectedObjectOnMouseUp}
                            onDragStart={markSelectedObjectOnMouseUp}
                            onDragEnd={setCoordinatesOnDragEnd}
                            onTouchStart={unmarkSelectedObjectOnMouseDown}
                            onTouchEnd={markSelectedObjectOnMouseUp}
                        />))}
                </Layer>
            </Stage>
        </div>
    )
}





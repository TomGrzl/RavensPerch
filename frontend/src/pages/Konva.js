import React, {useState, useEffect} from 'react';
import {Stage, Layer, Rect, Circle, Image} from 'react-konva';
import useKonvaObjects from "../components/useKonvaObjects";
import {getState, postState} from "../services/AxiosService";


export default function Konva() {

    const isSelected = false;
    const [
        rects,
        circles,
        rectId,
        circleId,
        addRect,
        addCircle,
        removeObject,
        clearBoard,
        saveState,
        loadState,
        loadOffense,
        log,
        setRectDeletionIdOnMouseDown,
        setCircleDeletionIdOnMouseDown,
        markSelectedCircleOnMouseUp,
        markSelectedRectOnMouseUp,
        setCircleCoordinatesOnDragEnd,
        setRectCoordinatesOnDragEnd
    ] = useKonvaObjects()


    return (
        <div>
            <button onClick={addRect}>Add Rect</button>
            <button onClick={addCircle}>Add Circle</button>
            <button onClick={removeObject}>Remove</button>
            <button onClick={clearBoard}>Clear Board</button>
            <button onClick={saveState}>Save State</button>
            <button onClick={loadState}>Load State</button>
            <button onClick={log}>Log</button>
            <button onClick={loadOffense}>Load Offense</button>
            <Stage width={window.innerHeight * 1.514} height={window.innerHeight}>
                <Layer>
                    {rects.map((rect) => (
                        <Rect
                            {...rect}
                            key={rect.id}
                            shadowBlur={rect.isSelected ? 15 : 5}
                            shadowColor={rect.isSelected ? '#fff' : '#000'}
                            shadowForStrokeEnabled={false}
                            draggable
                            onMouseDown={setRectDeletionIdOnMouseDown}
                            onMouseUp={markSelectedRectOnMouseUp}
                            onDragStart={markSelectedRectOnMouseUp}
                            onDragEnd={setRectCoordinatesOnDragEnd}
                            onTouchStart={setRectDeletionIdOnMouseDown}
                            onTouchEnd={markSelectedRectOnMouseUp}
                        />))}
                    {circles.map((circle) => (
                        <Circle
                            {...circle}
                            key={circle.id}
                            shadowBlur={circle.isSelected ? 15 : 5}
                            shadowColor={circle.isSelected ? '#fff' : '#000'}
                            draggable
                            onMouseDown={setCircleDeletionIdOnMouseDown}
                            onMouseUp={markSelectedCircleOnMouseUp}
                            onDragStart={markSelectedCircleOnMouseUp}
                            onDragEnd={setCircleCoordinatesOnDragEnd}
                            onTouchStart={setCircleDeletionIdOnMouseDown}
                            onTouchEnd={markSelectedCircleOnMouseUp}
                        />))}
                </Layer>
            </Stage>
        </div>
    )
}





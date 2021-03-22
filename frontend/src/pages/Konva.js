import React, {useState} from 'react';
import {Stage, Layer, Rect, Circle} from 'react-konva';

export default function Konva() {
    const [rects, setRects] = useState([]);
    const [circles, setCircles] = useState([])
    const [rectId, setRectId] = useState(1)
    const [circleId, setCircleId] = useState(1)

    const addRect = () => {
        setRects([...rects, {
            id: rectId.toString(),
            x: 60,
            y: 60,
            width: 30,
            height: 30,
            fill: '#C9E1F2',
            stroke: '#000',
            strokeWidth: 1,
            shadowBlur: 10,
        }
        ])
        setRectId(rectId + 1);
    }

    const addCircle = () => {
        setCircles([...circles, {
            id: circleId.toString(),
            x: 60,
            y: 60,
            radius: 15,
            fill: '#C9E1F2',
            stroke: '#000',
            strokeWidth: 1,
            shadowBlur: 10
        }
        ])
        setCircleId(circleId + 1);
    }


    const handleDragStart = (e) => {
        const id = e.target.id();
        const x = e.target.x();
        const y = e.target.y();

        console.log(
            'ID: ' + id + '  ' +
            'X: ' + x + '  ' +
            'Y: ' + y)
    }

    const setRectCoordinatesOnDragEnd = (e) => {
        const id = e.target.id();
        const x = e.target.x();
        const y = e.target.y();

        setRects(
            rects.map((rect) => {
                if (rect.id === id) {
                    return {
                        ...rect,
                        x: x,
                        y: y,
                        isDragging: false,
                        width: 30,
                        height: 30,
                        shadowBlur: 10,
                        fill: '#C9E1F2', shadowOffsetX: 5, shadowOffsetY: 5
                    }
                } else {
                    return {...rect}
                }
            }))

        console.log(
            'ID: ' + id + '  ' +
            'X: ' + x + '  ' +
            'Y: ' + y)
    }

    const setCircleCoordinatesOnDragEnd = (e) => {
        const id = e.target.id();
        const x = e.target.x();
        const y = e.target.y();

        setCircles(
            circles.map((circle) => {
                if (circle.id === id) {
                    return {
                        ...circle,
                        x: x,
                        y: y,
                    }
                } else {
                    return {...circle}
                }
            }))
        
        console.log(
            'ID: ' + id + '  ' +
            'X: ' + x + '  ' +
            'Y: ' + y)
    }

    const logRects = () => {
        console.log(rects)
    }

    const logCircles = () => {
        console.log(circles)
    }

    return (
        <>
            <button onClick={addRect}>Add Rect</button>
            <button onClick={addCircle}>Add Circle</button>
            <button onClick={logRects}>Log Rects</button>
            <button onClick={logCircles}>Log Circles</button>
            <Stage width={window.innerWidth} height={window.innerHeight} background={'#fff'}>
                <Layer>
                    {rects.map((rect) => (
                        <Rect
                            key={rect.id}
                            id={rect.id}
                            x={rect.x}
                            y={rect.y}
                            width={rect.width}
                            height={rect.height}
                            fill={rect.fill}
                            stroke={rect.stroke}
                            strokeWidth={rect.strokeWidth}
                            shadowBlur={rect.shadowBlur}
                            draggable
                            isDragging={false}
                            onDragStart={handleDragStart}
                            onDragEnd={setRectCoordinatesOnDragEnd}
                        />))}
                    {circles.map((circle) => (
                        <Circle
                            key={circle.id}
                            id={circle.id}
                            x={circle.x}
                            y={circle.y}
                            radius={circle.radius}
                            fill={circle.fill}
                            stroke={circle.stroke}
                            strokeWidth={circle.strokeWidth}
                            shadowBlur={circle.shadowBlur}
                            draggable
                            onDragStart={handleDragStart}
                            onDragEnd={setCircleCoordinatesOnDragEnd}
                        />))}
                </Layer>
            </Stage>
        </>
    )
}

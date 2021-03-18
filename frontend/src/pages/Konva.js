import React, {useState, useEffect} from 'react';
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
            width: 60,
            height: 60,
            fill: '#C9E1F2',
            stroke: '#000',
            strokeWidth: 1,
            shadowBlur: 10
        }
        ])
        setRectId(rectId + 1);
    }

    const addCircle = () => {
        setCircles([...circles, {
            id: circleId.toString(),
            x: 60,
            y: 60,
            radius: 30,
            fill: '#c9e1f2',
            stroke: '#000',
            strokeWidth: 1,
            shadowBlur: 10
        }
        ])
        setCircleId(circleId + 1);
    }

    return (
        <>
            <button onClick={addRect}>Add Rect</button>
            <button onClick={addCircle}>Add Circle</button>
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
                        />))}
                </Layer>
            </Stage>
        </>
    )
}

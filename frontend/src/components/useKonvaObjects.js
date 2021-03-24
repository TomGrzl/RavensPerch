import {useState} from "react";
import {postState, getState} from "../services/AxiosService";
import axios from "axios";

export default function useKonvaObjects() {
    const [rects, setRects] = useState([])
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
            shadowBlur: 5,
            shadowColor: '#000',
            isSelected: false
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
            shadowBlur: 5,
            shadowColor: '#000',
            isSelected: false
        }
        ])
        setCircleId(circleId + 1);
    }

    const setRectDeletionIdOnMouseDown = (e) => {
        if (!e.target.isSelected) {
            setRects(
                rects.map((rect) => {
                    return {
                        ...rect,
                        isSelected: false
                    }
                }))

            setCircles(
                circles.map((circle) => {
                    return {
                        ...circle,
                        isSelected: false
                    }
                }))
        }

    }

    const markSelectedRectOnMouseUp = (e) => {
        setRects(
            rects.map((rect) => {
                if (rect.id === e.target.id()) {
                    return {
                        ...rect,
                        isSelected: true
                    }
                } else {
                    return rect
                }

            }))
    }

    const setRectCoordinatesOnDragEnd = (e) => {
        const id = e.target.id();
        const newX = e.target.x();
        const newY = e.target.y();

        setRects(
            rects.map((rect) => {
                if (rect.name === id) {
                    return {
                        ...rect,
                        x: newX,
                        y: newY,
                    }
                } else {
                    return rect
                }
            }))
    }

    const setCircleDeletionIdOnMouseDown = () => {
        setCircles(
            circles.map((circle) => {
                return {
                    ...circle,
                    isSelected: false
                }

            }))

        setRects(
            rects.map((rect) => {
                return {
                    ...rect,
                    isSelected: false
                }

            }))
    }

    const markSelectedCircleOnMouseUp = (e) => {
        setCircles(
            circles.map((circle) => {
                if (circle.id === e.target.id()) {
                    return {
                        ...circle,
                        isSelected: true
                    }
                } else {
                    return circle
                }
            }))
    }

    const setCircleCoordinatesOnDragEnd = (e) => {
        const id = e.target.id();
        const newX = e.target.x();
        const newY = e.target.y();

        setCircles(
            circles.map((circle) => {
                if (circle.id === id) {

                    return {
                        ...circle,
                        x: newX,
                        y: newY,
                    }
                } else {
                    return circle
                }
            }))
    }

    const removeObject = () => {
        setRects(rects.filter(rect => !rect.isSelected))
        setCircles(circles.filter(circle => !circle.isSelected))
    }

    const clearBoard = () => {
        setRects([])
        setRectId(0)
        setCircles([])
        setCircleId(0)
    }

    const saveState = () => {
        postState({rects, rectId, circles, circleId})
    }

    const loadState = () => {
        getState()
            .then((response) =>
                (
                    setRects(response.data.rects),
                        setRectId(response.data.rectId),
                        setCircles(response.data.circles),
                        setCircleId(response.data.circleId)
                ))

    }

    const log = () => {
        console.log(rects)
        console.log(circles)
        console.log(circleId)
        console.log(rectId)
    }

    return [
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
        log,
        setRectDeletionIdOnMouseDown,
        setCircleDeletionIdOnMouseDown,
        markSelectedCircleOnMouseUp,
        markSelectedRectOnMouseUp,
        setCircleCoordinatesOnDragEnd,
        setRectCoordinatesOnDragEnd
    ]
}
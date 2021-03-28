import {useState} from "react";
import {postState, getState, getOffense} from "../services/AxiosService";

export default function useKonvaObjects() {
    const [rects, setRects] = useState([])
    const [circles, setCircles] = useState([])
    const [rectIndex, setRectIndex] = useState(1)
    const [circleIndex, setCircleIndex] = useState(1)

    const addRect = () => {
        setRects([...rects, {
            id: 'r' + rectIndex.toString(),
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
        setRectIndex(rectIndex + 1);
    }

    const addCircle = () => {
        setCircles([...circles, {
            id: 'c' + circleIndex.toString(),
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
        setCircleIndex(circleIndex + 1);
    }

    const unmarkSelectedObject = () => {
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

    const handleMouseDown = (e) => {
        const id = e.target.id()

        if (id === "") {
            unmarkSelectedObject()
        }
        unmarkSelectedObject()
    }

    const markSelectedObjectOnMouseUp = (e) => {
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

    const setCoordinatesOnDragEnd = (e) => {
        const id = e.target.id();
        const newX = e.target.x();
        const newY = e.target.y();

        setRects(
            rects.map((rect) => {
                if (rect.id === id) {
                    return {
                        ...rect,
                        x: newX,
                        y: newY,
                    }
                } else {
                    return rect
                }
            }))

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
        setRectIndex(0)
        setCircles([])
        setCircleIndex(0)
    }

    const saveState = () => {
        postState({rects, rectId: rectIndex, circles, circleId: circleIndex})
    }

    const loadState = () => {
        getState()
            .then((response) =>
                (
                    setRects(response.data.rects),
                        setRectIndex(response.data.rectId),
                        setCircles(response.data.circles),
                        setCircleIndex(response.data.circleId)
                ))

    }

    const loadOffense = () => {
        getOffense()
            .then((response) =>
                (
                    setRects(response.data.rects),
                        setRectIndex(response.data.rectId),
                        setCircles(response.data.circles),
                        setCircleIndex(response.data.circleId)
                ))
    }

    const buttun = (e) => {
        const id = e.target.id()
        console.log(id)
    }

    return {
        rects,
        circles,
        addRect,
        addCircle,
        removeObject,
        clearBoard,
        loadState,
        loadOffense,
        saveState,
        handleMouseDown,
        markSelectedObjectOnMouseUp,
        setCoordinatesOnDragEnd,
        buttun
    }
}
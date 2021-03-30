import {useState} from "react";
import {postState, getState, getOffense} from "../services/AxiosService";

export default function useKonvaObjects() {
    const [rects, setRects] = useState([])
    const [oLine, setOLine] = useState([])
    const [qb, setQb] = useState([])
    const [rb, setRb] = useState([])
    const [rectIndex, setRectIndex] = useState(1)
    const [circleIndex, setCircleIndex] = useState(1)


    const addRect = () => {
        setRects([...rects, {
            id: 'r' + rectIndex.toString(),
            x: 60,
            y: 60,
            fill: '#C9E1F2',
            shadowBlur: 5,
            shadowColor: '#000',
            isSelected: false,
            text: 'NT'
        }
        ])
        setRectIndex(rectIndex + 1);
    }

    const addCircle = () => {
        setOLine([...oLine, {
            id: 'c' + circleIndex.toString(),
            x: 60,
            y: 60,
            radius: 2,
            fill: '#C9E1F2',
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

        setOLine(
            oLine.map((circle) => {
                return {
                    ...circle,
                    isSelected: false
                }
            }))
    }

    const handleMouseDown = (e) => {
        const isSelected = e.target.getAttr('isSelected')

        if (isSelected) {
            return
        } else {
            unmarkSelectedObject()
        }
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

        setOLine(
            oLine.map((circle) => {
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

        setOLine(
            oLine.map((circle) => {
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
        setOLine(oLine.filter(circle => !circle.isSelected))
    }

    const clearBoard = () => {
        setRects([])
        setRectIndex(0)
        setOLine([])
        setCircleIndex(0)
    }

    const saveState = () => {
        postState({rects, rectId: rectIndex, circles: oLine, circleId: circleIndex})
    }

    const loadState = () => {
        getState()
            .then((response) =>
                (
                    setRects(response.data.rects),
                        setRectIndex(response.data.rectId),
                        setOLine(response.data.circles),
                        setCircleIndex(response.data.circleId)
                ))

    }

    const loadOffense = () => {
        getOffense()
            .then((response) =>
                (
                    setOLine(response.data.circles),
                        setQb(response.data.qb),
                        setRb(response.data.rb)
                ))
    }

    return {
        rects,
        oLine,
        qb,
        rb,
        addRect,
        addCircle,
        removeObject,
        clearBoard,
        loadState,
        loadOffense,
        saveState,
        handleMouseDown,
        markSelectedObjectOnMouseUp,
        setCoordinatesOnDragEnd
    }
}
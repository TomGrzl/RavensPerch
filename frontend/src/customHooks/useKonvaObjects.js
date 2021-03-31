import {useState} from "react";
import {getState, postState} from "../services/AxiosService";

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
            fill: '#C9E1F2',
            shadowBlur: 5,
            shadowColor: '#000',
            isSelected: false,
        }
        ])
        setRectIndex(rectIndex + 1);
    }

    const addCircle = () => {
        setCircles([...circles, {
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
        postState({rects: rects, rectId: rectIndex, circles: circles, circleId: circleIndex})
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
}
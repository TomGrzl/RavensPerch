import {useState} from "react";
import {getLearningCard} from "../services/AxiosService";

export default function useLearningCard() {
    const [defense, setDefense] = useState([])
    const [oLine, setOLine] = useState([])
    const [qb, setQb] = useState([])
    const [rb, setRb] = useState([])
    const [wr, setWr] = useState([])
    const [sr, setSr] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const unmarkSelectedObject = () => {
        setDefense(
            defense.map((rect) => {
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
        setDefense(
            defense.map((rect) => {
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

        setDefense(
            defense.map((rect) => {
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

    const loadLearningCard = () => {
        getLearningCard()
            .then((response) =>
                (
                    setDefense(response.data.draggableDefense),
                        setOLine(response.data.offenseFormation.oline),
                        setQb(response.data.offenseFormation.qb),
                        setRb(response.data.offenseFormation.rb),
                        setWr(response.data.offenseFormation.wr),
                        setSr(response.data.offenseFormation.wr)
                ))
    }

    return {
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

    }
}
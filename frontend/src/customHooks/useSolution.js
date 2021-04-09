import {useState} from "react";
import {getLearningCard} from "../services/AxiosService";

export default function useLearningCard() {
    const [solutionDefense, setSolutionDefense] = useState([])
    const [solutionOline, setSolutionOline] = useState([])
    const [solutionQb, setSolutionQb] = useState([])
    const [SolutionRb, setSolutionRb] = useState([])
    const [solutionWr, setSolutionWr] = useState([])
    const [solutionSr, setSolutionSr] = useState([])
    const [isSolutionLoaded, setIsSolutionLoaded] = useState(false)

    const unmarkSelectedObject = () => {
        setSolutionDefense(
            solutionDefense.map((rect) => {
                return {
                    ...rect,
                    isSelected: false
                }
            }))

        setSolutionOline(
            solutionOline.map((circle) => {
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
        setSolutionDefense(
            solutionDefense.map((rect) => {
                if (rect.id === e.target.id()) {
                    return {
                        ...rect,
                        isSelected: true
                    }
                } else {
                    return rect
                }
            }))

        setSolutionOline(
            solutionOline.map((circle) => {
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

        setSolutionDefense(
            solutionDefense.map((rect) => {
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

        setSolutionOline(
            solutionOline.map((circle) => {
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

    const loadSolution = () => {
        getLearningCard()
            .then((response) =>
                (
                    setSolutionDefense(response.data.defense),
                        setSolutionOline(response.data.oline),
                        setSolutionQb(response.data.qb),
                        setSolutionRb(response.data.rb),
                        setSolutionWr(response.data.wr),
                        setSolutionSr(response.data.sr)
                ))
    }

    return {
        solutionDefense,
        solutionOline,
        solutionQb,
        SolutionRb,
        solutionWr,
        solutionSr,
        isSolutionLoaded,
        setIsSolutionLoaded,
        loadSolution,
        handleMouseDown,
        markSelectedObjectOnMouseUp,
        setCoordinatesOnDragEnd,

    }
}
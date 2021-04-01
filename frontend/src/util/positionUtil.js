export default function positionUtil() {

    //The following constants are set to define relative dimensions and positions depending on the display size
    const fieldWidth = 53.33 //yards
    const fieldHeight = 35 //yards
    const aspectRatio = fieldWidth / fieldHeight
    const cropFactor = 0.85

    const rectWidth = window.innerHeight * cropFactor * aspectRatio / fieldWidth //1 yard
    const rectHeight = window.innerHeight * cropFactor / fieldHeight //1 yard
    const rectDiagonal = rectHeight * Math.sqrt(2) //used to set radius of circles and to center text in rects

    const initX = (window.innerHeight * cropFactor * aspectRatio) / 2
    const initY = ((window.innerHeight * cropFactor) / 3.5) - (rectDiagonal / 2) //initY starts 10 yard from the top, therefore with factor 3.5
    const splits = (window.innerHeight * cropFactor * aspectRatio) / (fieldWidth) //0.5 yard
    const olineOffset = rectDiagonal + splits


    const wrOffset = (window.innerHeight * cropFactor * aspectRatio / fieldWidth) * 20

    const srOffsetX = (wrOffset + ((rectDiagonal + splits) * 2)) / 2
    const srOffsetY = rectDiagonal

    const qbGunOffsetY = ((window.innerHeight * cropFactor * aspectRatio / fieldWidth) * 5)

    const rbOffsetX = splits + rectDiagonal
    const rbOffsetY = qbGunOffsetY + splits

    const initDefenseX = (window.innerHeight * cropFactor * aspectRatio) - ((window.innerHeight * cropFactor * aspectRatio))
    const initDefenseY = window.innerHeight * 0.75
    const DefenseOffsetX = rectDiagonal
    const DefenseOffsetY = rectDiagonal

    const fontSize = 10

    return {
        rect: {width: rectWidth, height: rectHeight, rectDiagonal: rectDiagonal}

    }
}
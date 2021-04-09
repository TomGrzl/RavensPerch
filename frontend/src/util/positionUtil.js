export default function positionUtil() {

    //The following constants are set to define relative dimensions and positions depending on the display size
    const fieldWidth = 53.33 //yards
    const fieldHeight = 35 //yards

    const aspectRatio = fieldWidth / fieldHeight
    const cropFactor = 0.95

    const fieldRelativeWidth = window.innerHeight * cropFactor * aspectRatio
    const fieldRelativeHeight = window.innerHeight * cropFactor

    const oneYardX = fieldRelativeWidth / fieldWidth
    const oneYardY = fieldRelativeHeight / fieldHeight

    const rectWidth = oneYardX
    const rectHeight = oneYardY
    const rectDiagonal = rectHeight * Math.sqrt(2) //used to set radius of circles and to center text in rects


    const initX = fieldRelativeWidth / 2
    const initY = (fieldRelativeHeight / 3.5) - (rectDiagonal / 2) //initY starts 10 yard from the top, therefore with factor 3.5
    const olineSplits = oneYardX //1 yard
    const olineOffsetX = rectDiagonal + olineSplits


    const wrOffset = oneYardX * 20

    const srOffsetX = (wrOffset + ((rectDiagonal + olineSplits) * 2)) / 2
    const srOffsetY = rectDiagonal

    const qbGunOffsetY = ((window.innerHeight * cropFactor * aspectRatio / fieldWidth) * 5)

    const rbOffsetX = olineSplits + rectDiagonal
    const rbOffsetY = qbGunOffsetY + olineSplits

    const initDefenseX = (window.innerHeight * cropFactor * aspectRatio) - ((window.innerHeight * cropFactor * aspectRatio))
    const initDefenseY = window.innerHeight * 0.75
    const defenseOffsetX = rectDiagonal
    const defenseOffsetY = rectDiagonal

    const alignOffsetX = rectDiagonal / 2
    const alignOffsetY = oneYardY * 5

    const neutralZone = oneYardY / 3.27 // approx. 11 inches
    const lineOfScrimmage = initY + rectDiagonal / 2 + neutralZone
    const zeroTechX = initX
    const shadeX = initX + alignOffsetX
    const oneTechX = zeroTechX + alignOffsetX + olineSplits
    const twoTechX = oneTechX + alignOffsetX
    const threeTechX = twoTechX + alignOffsetX
    const fourInsideTechX = threeTechX + olineSplits
    const fourTechX = fourInsideTechX + alignOffsetX
    const fiveTechX = fourTechX + alignOffsetX
    const sevenTechX = fiveTechX + olineSplits
    const sixTechX = sevenTechX + alignOffsetX
    const nineTechX = sixTechX + alignOffsetX


    const tenTechX = oneTechX
    const tenTechY = lineOfScrimmage + alignOffsetY
    const twentyTechX = twoTechX
    const twentyTechY = lineOfScrimmage + alignOffsetY
    const thirtyTechX = threeTechX
    const thirtyTechY = lineOfScrimmage + alignOffsetY
    const fourtyInsideTechX = fourTechX
    const fourtyInsideTechY = lineOfScrimmage + alignOffsetY
    const fourtyTechX = fourTechX
    const fourtyTechY = lineOfScrimmage + alignOffsetY
    const fiftyTechX = fiveTechX
    const fiftyTechY = lineOfScrimmage + alignOffsetY
    const seventyTechX = sevenTechX
    const seventyTechY = sevenTechX
    const sixtyTechX = sixTechX
    const sixtyTechY = sixTechX
    const ninetyTechX = nineTechX
    const ninetyTechY = lineOfScrimmage + alignOffsetY

    const cbInsideLeverageX = wrOffset + alignOffsetX
    const cbOutsideLeverageX = wrOffset - alignOffsetX
    const cbDepthY = oneYardY

    const safetyHashmarksX = initX + oneTechX * 6.166667
    const safetyMidfieldX = initX
    const safetyDeepY = oneYardY * 12
    const safetyUnderneathY = oneYardY * 7

    const fontSize = 10

    return {
        rect:
            {
                width: rectWidth,
                height: rectHeight,
                rectDiagonal: rectDiagonal
            },
        initCoordinates:
            {
                x: initX,
                y: initY
            },

        oline:
            {
                offsetX: olineOffsetX,
                splits: olineSplits
            },

        quarterback:
            {
                offset: qbGunOffsetY
            },

        runningBack:
            {
                offsetX: rbOffsetX,
                offsetY: rbOffsetY
            },

        wideReceiver:
            {
                offset: wrOffset
            },

        slotReceiver:
            {
                offsetX: srOffsetX,
                offsetY: srOffsetY
            },

        defense:
            {
                x: initDefenseX,
                y: initDefenseY,
                offsetX: defenseOffsetX,
                offsetY: defenseOffsetY
            },

        fontSize,

        backgroundDimensions:
            {
                height: fieldRelativeHeight,
                width: fieldRelativeWidth
            },
        linebackerPos:
            {
                tenTechX: tenTechX,
                tenTechY: tenTechY,
                twentyTechX: twentyTechX,
                twentyTechY: twentyTechY,
                thirtyTechX: thirtyTechX,
                thirtyTechY: thirtyTechY,
                fourtyInsideTechX: fourtyInsideTechX,
                fourtyInsideTechY: fourtyInsideTechY,
                fourtyTechX: fourtyTechX,
                fourtyTechY: fourtyTechY,
                fiftyTechX: fiftyTechX,
                fiftyTechY: fiftyTechY,
                seventyTechX: seventyTechX,
                seventyTechY: seventyTechY,
                sixtyTechX: sixtyTechX,
                sixtyTechY: sixtyTechY,
                ninetyTechX: ninetyTechX,
                ninetyTechY: ninetyTechY

            },
        cornerbackPos:
            {
                outsideLeverageX: cbOutsideLeverageX,
                insideLeverageX: cbInsideLeverageX,
                depthY: cbDepthY
            },
        safety:
            {
                alignOnHashmarkX: safetyHashmarksX,
                alignMidfieldX: safetyMidfieldX,
                alignDeepY: safetyDeepY,
                alignUnderneathY: safetyUnderneathY
            }
    }
}
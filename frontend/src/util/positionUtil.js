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

    const alignOffsetX = (rectDiagonal / 2)
    const alignOffsetY = oneYardY * 4.4

    const neutralZone = oneYardY / 3.27 // approx. 11 inches
    const lineOfScrimmage = initY + rectDiagonal / 2 + neutralZone
    const zeroTechX = initX
    const shadeX = initX - alignOffsetX
    const shadeStrX = initX + alignOffsetX
    const oneTechX = zeroTechX - alignOffsetX - olineSplits
    const oneTechStrX = zeroTechX + alignOffsetX + olineSplits
    const twoTechX = oneTechX - alignOffsetX
    const twoTechStrX = oneTechStrX + alignOffsetX
    const threeTechX = twoTechX - alignOffsetX
    const threeTechStrX = twoTechStrX + alignOffsetX
    const fourInsideTechX = threeTechX - olineSplits
    const fourInsideTechStrX = threeTechStrX + olineSplits
    const fourTechX = fourInsideTechX - alignOffsetX
    const fourTechStrX = fourInsideTechStrX + alignOffsetX
    const fiveTechX = fourTechX - alignOffsetX
    const fiveTechStrX = fourTechStrX + alignOffsetX
    const sevenTechX = fiveTechX - olineSplits
    const sevenTechStrX = fiveTechStrX + olineSplits
    const sixTechX = sevenTechX - alignOffsetX
    const sixTechStrX = sevenTechStrX + alignOffsetX
    const nineTechX = sixTechX - alignOffsetX
    const nineTechStrX = sixTechStrX + alignOffsetX


    const tenTechX = oneTechX
    const tenTechStrX = oneTechStrX
    const tenTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const shadeY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const twentyTechX = twoTechX
    const twentyTechStrX = twoTechStrX
    const twentyTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const thirtyTechX = threeTechX
    const thirtyTechStrX = threeTechStrX
    const thirtyTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const fourtyInsideTechX = fourInsideTechX
    const fourtyInsideTechStrX = fourInsideTechStrX
    const fourtyInsideTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const fourtyTechX = fourTechX
    const fourtyTechStrX = fourTechStrX
    const fourtyTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const fiftyTechX = fiveTechX
    const fiftyTechStrX = fiveTechStrX
    const fiftyTechY = (lineOfScrimmage - neutralZone) + alignOffsetY
    const seventyTechX = sevenTechX
    const seventyTechStrX = sevenTechStrX
    const seventyTechY = sevenTechX
    const sixtyTechX = sixTechX
    const sixtyTechStrX = sixTechStrX
    const sixtyTechY = sixTechX
    const ninetyTechX = nineTechX
    const ninetyTechStrX = nineTechStrX
    const ninetyTechY = (lineOfScrimmage - neutralZone) + alignOffsetY

    const cbInsideLeverageX = initX + wrOffset + alignOffsetX
    const cbInsideLeverageStrX = initX - wrOffset - alignOffsetX
    const cbOutsideLeverageX = initX + wrOffset + alignOffsetX
    const cbOutsideLeverageStrX = initX - wrOffset - alignOffsetX
    const cbDepthY = (lineOfScrimmage - neutralZone) + oneYardY * 4

    const safetyHashmarksX = initX + (oneYardX * 6.9)
    const safetyHashmarksStrX = initX - (oneYardX * 6.9)
    const safetyMidfieldX = initX
    const safetyDeepY = (lineOfScrimmage - neutralZone) + oneYardY * 12
    const safetyUnderneathY = oneYardY * 7

    const fontSize = rectDiagonal / 2.5

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
                offsetY: qbGunOffsetY
            },

        runningBack:
            {
                offsetX: rbOffsetX,
                offsetY: rbOffsetY
            },

        wideReceiver:
            {
                offsetX: wrOffset
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
                offsetY: defenseOffsetY,
                initX: initX,
            },

        fontSize,

        backgroundDimensions:
            {
                height: fieldRelativeHeight,
                width: fieldRelativeWidth
            },
        dlinePos:
            {
                zeroTech: zeroTechX,
                shade: shadeX,
                shadeStr: shadeStrX,
                oneTech: oneTechX,
                oneTechStr: oneTechStrX,
                twoTech: twoTechX,
                twoTechStr: twoTechStrX,
                threeTech: threeTechX,
                threeTechStr: threeTechStrX,
                fourInsideTech: fourInsideTechX,
                fourInsideTechStr: fourInsideTechStrX,
                fourTech: fourInsideTechX,
                fourTechStr: fourInsideTechStrX,
                fiveTech: fiveTechX,
                fiveTechStr: fiveTechStrX,
                sevenTech: sevenTechX,
                sevenTechStr: sevenTechStrX,
                sixTech: sixTechX,
                sixTechStr: sixTechStrX,
                nineTech: nineTechX,
                nineTechStr: nineTechStrX,
                los: lineOfScrimmage


            },
        linebackerPos:
            {
                tenTechX: tenTechX,
                tenTechStrX: tenTechStrX,
                tenTechY: tenTechY,
                shadeX: shadeX,
                shadeStrX: shadeStrX,
                shadeY: shadeY,
                twentyTechX: twentyTechX,
                twentyTechStrX: twentyTechStrX,
                twentyTechY: twentyTechY,
                thirtyTechX: thirtyTechX,
                thirtyTechStrX: thirtyTechStrX,
                thirtyTechY: thirtyTechY,
                fourtyInsideTechX: fourtyInsideTechX,
                fourtyInsideTechStrX: fourtyInsideTechStrX,
                fourtyInsideTechY: fourtyInsideTechY,
                fourtyTechX: fourtyTechX,
                fourtyTechStrX: fourtyTechStrX,
                fourtyTechY: fourtyTechY,
                fiftyTechX: fiftyTechX,
                fiftyTechStrX: fiftyTechStrX,
                fiftyTechY: fiftyTechY,
                seventyTechX: seventyTechX,
                seventyTechStrX: seventyTechStrX,
                seventyTechY: seventyTechY,
                sixtyTechX: sixtyTechX,
                sixtyTechStrX: sixtyTechStrX,
                sixtyTechY: sixtyTechY,
                ninetyTechX: ninetyTechX,
                ninetyTechStrX: ninetyTechStrX,
                ninetyTechY: ninetyTechY

            },
        cornerbackPos:
            {
                outsideLeverageX: cbOutsideLeverageX,
                outsideLeverageStrX: cbOutsideLeverageStrX,
                insideLeverageX: cbInsideLeverageX,
                insideLeverageStrX: cbInsideLeverageStrX,
                depthY: cbDepthY
            },
        safetyPos:
            {
                alignOnHashmarkX: safetyHashmarksX,
                alignOnHashmarkStrX: safetyHashmarksStrX,
                alignMidfieldX: safetyMidfieldX,
                alignDeepY: safetyDeepY,
                alignUnderneathY: safetyUnderneathY
            }
    }
}
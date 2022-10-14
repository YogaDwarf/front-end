const startWidthArea = 300;
const startHeightArea = 300;

const history = [];

const arts = {circle: 0, triangle: 1, rectangle: 2} // In type

const card_maker = {
    localHistory: history,
    canvas
}

const canvas = {
    id: 0,
    objects: [text, image, art_object],
    backgroundColor: 'white',
    backgroundImage: null,
    canvasWidth: 800,
    canvsasHeight: 600,
}

const object = {
    id: 0,
    x: canvas.canvasWidth / 2,
    y: canvas.canvasHeight / 2,
    layerIndex: 1,
    transparency: 100
}

const text = {
    ...object,
    color: 'black',
    font: startFont,
    weight: textWeight,
    borderColor: 'white',
    content: "text",
}

const image = {
    ...object,
    path: '',
    width: startWidthArea,
    height: startHeightArea,
}

const art_object = {
    ...object,
    color: 'white',
    outlineColor: 'black',
}

const circle = {
    ...art_object,
    radius: startHeightArea,
}

const rectangle = {
    ...art_object,
    width: startWidthArea,
    height: startHeightArea,
}

const triangle = {
    ...art_object,
    width: startWidthArea,
    height: startHeightArea,
}


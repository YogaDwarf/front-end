export type card_maker = {
    localHistory: [],
    canvas: canvas,
}

type canvas = {
    id: number,
    objects: objects,
    backgroundColor: color,
    backgroundImage: string,
    canvasWidth: number,
    canvasHeight: number,
}

type objects = {
    id: number,
    x: number,
    y: number,
    layerIndex: number,
    transparency: number,
    objectsContent: objectsContent,
}

type text = {
    color: color,
    borderColor: color,
    font: number,
    weight: number,
    content: string,
}

type image = {
    path: string,
    weight: number,
    height: number,
}

type art_object = {
    color: color,
    outlineColor: color,
    primitive: primitive,
}

type objectsContent =
    text |
    image |
    art_object

type primitive =
    'circle' |
    'triangle' |
    'rectangle'

type color =
    'white' |
    'gray' |
    'black' |
    'yellow' |
    'orange' |
    'blue' |
    'cyan' |
    'red' |
    'pink' |
    'green' |
    'brown' |
    'golden' |
    'silver'

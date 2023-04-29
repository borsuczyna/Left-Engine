const defaultBuffers = {
    positions: [
        0, 0,
        0, 1,
        1, 0,
        1, 0,
        0, 1,
        1, 1,
    ],
    texCoords: [
        0, 0,
        0, 1,
        1, 0,
        1, 0,
        0, 1,
        1, 1,
    ]
};

export default class Buffers {
    position: WebGLBuffer;
    texCoord: WebGLBuffer;

    constructor(context: WebGLRenderingContext) {
        let position = context.createBuffer();
        let texCoord = context.createBuffer();
        if(!position || !texCoord) throw new Error('Error setting up Render, failed to create buffers!');

        this.position = position;
        this.texCoord = texCoord;

        context.bindBuffer(context.ARRAY_BUFFER, position);
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(defaultBuffers.positions), context.STATIC_DRAW);

        context.bindBuffer(context.ARRAY_BUFFER, texCoord);
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(defaultBuffers.texCoords), context.STATIC_DRAW);
    }
}
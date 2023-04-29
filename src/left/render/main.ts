import Buffers from "./buffer";

export default class Render {
    canvas: HTMLCanvasElement;
    context: WebGL2RenderingContext;
    buffers: Buffers;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('webgl2') || (() => { throw new Error('WebGL2 not supported'); })();

        //  Buffers
        this.buffers = new Buffers(this.context);
    }
}
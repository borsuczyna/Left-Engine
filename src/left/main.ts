import Render from "./render/main";

export default class LeftEngine {
    render: Render;

    constructor(canvas: HTMLCanvasElement) {
        this.render = new Render(canvas);
    }
}
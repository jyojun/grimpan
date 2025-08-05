export default class GrimpanMenu {
    grimpan;
    constructor(grimpan) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트를 입력하세요");
        }
    }
    static getInstance() { }
}
//# sourceMappingURL=AbstractGrimpanMenu.js.map
import Grimpan from "./AbstractGrimpan";
declare class IEGrimpan extends Grimpan {
    private static instance;
    initialize(): void;
    initializeMenu(): void;
    static getInstance(): Grimpan;
}
export default IEGrimpan;
//# sourceMappingURL=IEGrimpan.d.ts.map
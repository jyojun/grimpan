import type Grimpan from "./AbstractGrimpan.js";
import type IEGrimpan from "./IEGrimpan.js";
import type ChromeGrimpan from "./ChromeGrimpan.js";
export declare abstract class GrimpanMenu {
    grimpan: Grimpan;
    dom: HTMLElement;
    protected constructor(grimpan: Grimpan, dom: HTMLElement);
    abstract initialize(types: BtnType[]): void;
    static getInstance(grimpan: Grimpan, dom: HTMLElement): void;
}
type BtnType = "pen" | "circle" | "rectangle" | "eraser" | "back" | "forward" | "save" | "pipette" | "color";
export declare class ChromeGrimpanMenu extends GrimpanMenu {
    private static instance;
    initialize(types: BtnType[]): void;
    drawButtonByType(type: BtnType): any;
    static getInstance(grimpan: ChromeGrimpan, dom: HTMLElement): ChromeGrimpanMenu;
}
export declare class IEGrimpanMenu extends GrimpanMenu {
    private static instance;
    initialize(types: BtnType[]): void;
    static getInstance(grimpan: IEGrimpan, dom: HTMLElement): IEGrimpanMenu;
}
export {};
//# sourceMappingURL=GrimpanMenu.d.ts.map
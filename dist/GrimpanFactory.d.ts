import type Grimpan from "./AbstractGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory.js";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import IEGrimpan from "./IEGrimpan.js";
export declare abstract class AbstractGrimpanFactory {
    static createGrimpan(): void;
    static createGrimpanMenu(grimpan: Grimpan, dom: HTMLElement): void;
    static createGrimpanHistory(grimpan: Grimpan): void;
}
export declare class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan(): ChromeGrimpan;
    static createGrimpanMenu(grimpan: ChromeGrimpan, dom: HTMLElement): ChromeGrimpanMenu;
    static createGrimpanHistory(grimpan: ChromeGrimpan): ChromeGrimpanHistory;
}
export declare class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan(): IEGrimpan;
    static createGrimpanMenu(grimpan: IEGrimpan, dom: HTMLElement): IEGrimpanMenu;
    static createGrimpanHistory(grimpan: IEGrimpan): IEGrimpanHistory;
}
//# sourceMappingURL=GrimpanFactory.d.ts.map
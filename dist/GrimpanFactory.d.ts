import type Grimpan from "./AbstractGrimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu";
import IEGrimpan from "./IEGrimpan";
export declare abstract class AbstractGrimpanFactory {
    static createGrimpan(): void;
    static createGrimpanMenu(grimpan: Grimpan): void;
    static createGrimpanHistory(grimpan: Grimpan): void;
}
export declare class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan(): ChromeGrimpan;
    static createGrimpanMenu(grimpan: ChromeGrimpan): ChromeGrimpanMenu;
    static createGrimpanHistory(grimpan: ChromeGrimpan): ChromeGrimpanHistory;
}
export declare class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan(): IEGrimpan;
    static createGrimpanMenu(grimpan: IEGrimpan): IEGrimpanMenu;
    static createGrimpanHistory(grimpan: IEGrimpan): IEGrimpanHistory;
}
//# sourceMappingURL=GrimpanFactory.d.ts.map
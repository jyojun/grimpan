import type Grimpan from "./AbstractGrimpan";
import type IEGrimpan from "./IEGrimpan";
import type ChromeGrimpan from "./ChromeGrimpan";
export declare abstract class GrimpanMenu {
    grimpan: Grimpan;
    protected constructor(grimpan: Grimpan);
    abstract initialize(): void;
    static getInstance(grimpan: Grimpan): void;
}
export declare class ChromeGrimpanMenu extends GrimpanMenu {
    private static instance;
    initialize(): void;
    static getInstance(grimpan: ChromeGrimpan): ChromeGrimpanMenu;
}
export declare class IEGrimpanMenu extends GrimpanMenu {
    private static instance;
    initialize(): void;
    static getInstance(grimpan: IEGrimpan): IEGrimpanMenu;
}
//# sourceMappingURL=GrimpanMenu.d.ts.map
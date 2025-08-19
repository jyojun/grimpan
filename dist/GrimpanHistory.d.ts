import type Grimpan from "./AbstractGrimpan.js";
import type IEGrimpan from "./IEGrimpan.js";
import type ChromeGrimpan from "./ChromeGrimpan.js";
export declare abstract class GrimpanHistory {
    grimpan: Grimpan;
    protected constructor(grimpan: Grimpan);
    abstract initialize(): void;
    static getInstance(grimpan: Grimpan): void;
}
export declare class ChromeGrimpanHistory extends GrimpanHistory {
    private static instance;
    initialize(): void;
    static getInstance(grimpan: ChromeGrimpan): ChromeGrimpanHistory;
}
export declare class IEGrimpanHistory extends GrimpanHistory {
    private static instance;
    initialize(): void;
    static getInstance(grimpan: IEGrimpan): IEGrimpanHistory;
}
//# sourceMappingURL=GrimpanHistory.d.ts.map
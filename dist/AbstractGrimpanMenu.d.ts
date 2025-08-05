export default abstract class GrimpanMenu {
    grimpan: Grimpan;
    protected constructor(grimpan: Grimpan);
    abstract initialize(): void;
    abstract initializeMenu(): void;
    static getInstance(): void;
}
//# sourceMappingURL=AbstractGrimpanMenu.d.ts.map
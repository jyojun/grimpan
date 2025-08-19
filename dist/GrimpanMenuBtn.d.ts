import type { GrimpanMenu } from "./GrimpanMenu.js";
export declare abstract class GrimpanMenuElement {
    private menu;
    private name;
    private type;
    private onClick?;
    private value?;
    private constructor();
    draw(): void;
    static Builder: {
        new (menu: GrimpanMenu, name: string, type: string): {
            btn: GrimpanMenuBtn;
            setName(name: string): /*elided*/ any;
            setType(type: string): /*elided*/ any;
            setOnClick(onClick: () => void): /*elided*/ any;
            setOnChange(onChange: () => void): /*elided*/ any;
            setActive(active: boolean): /*elided*/ any;
            setValue(value: string): /*elided*/ any;
            build(): GrimpanMenuBtn;
        };
    };
}
//# sourceMappingURL=GrimpanMenuBtn.d.ts.map
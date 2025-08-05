import Grimpan from "./AbstractGrimpan";

abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  } // 추상 클래스로 정의해야함.
}

export default AbstractGrimpanFactory;

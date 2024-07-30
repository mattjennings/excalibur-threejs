import * as ex from "excalibur";
import { Object3D } from "three";

export class ThreeActor<T extends Object3D> extends ex.Entity {
  
  constructor(obj: T) {
    super();

    this.addComponent(new ThreeComponent(obj));
  }

  public get obj(): T {
    return this.get(ThreeComponent)?.obj as T
  }
}


export class ThreeComponent extends ex.Component {
  obj: Object3D;

  constructor(obj: Object3D) {
    super();
    this.obj = obj;
  }
}
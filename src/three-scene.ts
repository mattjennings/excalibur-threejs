import * as ex from 'excalibur';
import * as THREE from 'three';
import { ThreeComponent } from './three-actor';
import { ThreeSystem } from './systems';

export class ThreeScene extends ex.Scene {
  threeScene: THREE.Scene;
  threeCamera!: THREE.Camera

  constructor() {
    super();
    this.world.systemManager.clear(); 
    this.threeScene = new THREE.Scene();    
  }

  onInitialize(engine: ex.Engine): void {
    this.world.systemManager.addSystem(new ThreeSystem(engine));
  }

  add(thing: any) {
    super.add(thing);
    
    if (thing instanceof ex.Entity) {
      let obj = thing.get(ThreeComponent)?.obj;
      if (obj) {
        this.threeScene.add(obj);
      }
    }
  }

  remove(thing: any)  {
    super.remove(thing);

    if (thing instanceof ex.Entity) {
      let obj = thing.get(ThreeComponent)?.obj;
      if (obj) {
        this.threeScene.remove(obj);
      }
    }
  }
}
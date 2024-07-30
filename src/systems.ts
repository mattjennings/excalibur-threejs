import * as ex from 'excalibur';
import * as THREE from 'three';
import { ThreeScene } from './three-scene';

export class ThreeSystem extends ex.System {
  systemType: ex.SystemType = ex.SystemType.Draw;  
  renderer: THREE.WebGLRenderer; 
  priority = 0;

  constructor(public engine: ex.Engine) {
    super()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.engine.canvas,
    });
  }
  
  update(elapsedMs: number): void {
    const scene = this.engine.currentScene as ThreeScene
    this.renderer.render(scene.threeScene, scene.threeCamera);    
  }
}

import './style.css'
import * as ex from 'excalibur'
import * as THREE from 'three'
import { ThreeScene } from './three-scene'
import { ThreeActor } from './three-actor'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

class Level1 extends ThreeScene {
  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine)
    this.threeCamera = new THREE.PerspectiveCamera(
      75,
      engine.drawWidth / engine.drawHeight,
      0.1,
      1000
    )
    this.threeCamera.position.z = 5

    const cube = new ThreeActor(
      new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({ color: 0x00ff00 })
      )
    )
    this.add(cube)

    cube.onPreUpdate = (_, delta) => {
      cube.obj.rotation.x += 0.001 * delta
      cube.obj.rotation.y += 0.001 * delta
    }

    const light = new ThreeActor(new THREE.DirectionalLight(0x404040))
    light.obj.intensity = 30
    light.obj.position.set(0, 0, 5)

    this.add(light)

    new OrbitControls(this.threeCamera, engine.canvas)
  }
}

const game = new ex.Engine({
  scenes: {
    level1: Level1,
  },
  width: 800,
  height: 600,
  displayMode: ex.DisplayMode.FitScreen,
})

game.start()
game.goToScene('level1')

import.meta.hot?.accept(() => {
  window.location.reload()
})

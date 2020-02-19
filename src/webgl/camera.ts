import { PerspectiveCamera } from 'three'
import { nullVector } from '~/webgl/constants'

export class Camera extends PerspectiveCamera {
  public constructor() {
    super()
    this.position.set(0, 10, 15)
    this.lookAt(nullVector)
  }

  public setSize(width: number, height: number): void {
    this.aspect = width / height
    this.updateProjectionMatrix()
  }
}

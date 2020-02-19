import * as THREE from 'three'
import { PerspectiveCamera, OrthographicCamera } from 'three'
import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

export class Controls extends CameraControls {
  public constructor(
    camera: PerspectiveCamera | OrthographicCamera,
    element: HTMLElement
  ) {
    super(camera, element)

  }

  public update(delta: number): boolean {
    return super.update(delta / 1000)
  }
}

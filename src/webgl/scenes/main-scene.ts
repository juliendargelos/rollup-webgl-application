import {
  AmbientLight,
  PointLight,
  GridHelper,
  PointLightHelper,
} from 'three'

import { Scene } from '~/webgl/scene'

export class MainScene extends Scene {
  protected ambientLight: AmbientLight = new AmbientLight()
  protected pointLight: PointLight = new PointLight()

  public constructor() {
    super()

    this.pointLight.position.set(5, 5, 0)

    this.add(
      this.ambientLight,
      this.pointLight
    )

    if (process.env.development) {
      this.add(
        new GridHelper(10, 10),
        new PointLightHelper(this.pointLight)
      )
    }
  }
}

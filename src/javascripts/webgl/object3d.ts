import { Object3D as BaseObject3D, } from 'three'
import { Clock } from '~/clock'

export abstract class Object3D extends BaseObject3D {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(clock: Clock): void {

  }

  public dispose(): void {

  }
}

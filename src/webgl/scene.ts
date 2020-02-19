import { Scene as BaseScene, } from 'three'
import { Clock } from '~/clock'

export abstract class Scene extends BaseScene {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(clock: Clock): void {

  }

  public dispose(): void {

  }
}

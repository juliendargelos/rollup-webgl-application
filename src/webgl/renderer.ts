// @ts-nocheck https://github.com/vanruesc/postprocessing/issues/166

import { WebGLRenderer, Scene, Camera } from 'three'

import {
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAPreset
} from 'postprocessing'

export class Renderer extends EffectComposer {
  protected renderPass: RenderPass
  protected effectPass: EffectPass
  protected smaaEffect: SMAAEffect
  public element: HTMLCanvasElement

  public constructor(scene: Scene, camera: Camera) {
    const renderer = new WebGLRenderer()
    super(renderer)

    this.element = renderer.domElement

    this.smaaEffect = new SMAAEffect(
      Object.assign(new Image, { src: SMAAEffect.searchImageDataURL }),
      Object.assign(new Image, { src: SMAAEffect.areaImageDataURL }),
      SMAAPreset.ULTRA
    )

    this.renderPass = new RenderPass(scene, camera)
    this.renderPass.renderToScreen = false

    this.effectPass = new EffectPass(camera,
      this.smaaEffect
    )

    this.effectPass.renderToScreen = true

    this.addPass(this.renderPass)
    this.addPass(this.effectPass)
  }

  public render(delta: number): void {
    super.render(delta / 1000)
  }

  public dispose!: () => void
  public setSize!: (width: number, height: number) => void
}

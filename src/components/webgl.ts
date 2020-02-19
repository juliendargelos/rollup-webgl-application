import {
  Component,
  TemplateResult,
  customElement,
  html,
  css,
  property
} from '~/component'

import { Loop } from '~/loop'
import { Scene, Camera, Renderer, Controls } from '~/webgl'
import { MainScene } from '~/webgl/scenes/main-scene'

@customElement('x-webgl') export class WebGL extends Component {
  @property({ type: Boolean, reflect: true }) public autoplay: boolean = true
  @property({ type: Boolean, reflect: true }) public autosize: boolean = true
  public scene: Scene = new MainScene()
  public camera: Camera = new Camera()
  public renderer: Renderer = new Renderer(this.scene, this.camera)
  public controls: Controls = new Controls(this.camera, this.renderer.element)
  public loop: Loop = new Loop().add((clock) => {
    this.controls.update(clock.delta)
    this.scene.update(clock)
    this.renderer.render(clock.delta)
  })

  protected resize = (): void => {
    this.renderer.setSize(this.offsetWidth, this.offsetHeight)
    this.camera.setSize(this.offsetWidth, this.offsetHeight)
  }

  public dispose(): void {
    this.disconnectedCallback()
    this.scene.dispose()
    this.controls.dispose()
    this.renderer.dispose()
  }

  public connectedCallback(): void {
    super.connectedCallback()
    this.autosize && addEventListener('resize', this.resize)
    this.autoplay && requestAnimationFrame(() => {
      this.autosize && this.resize()
      this.loop.start()
    })
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback()
    removeEventListener('resize', this.resize)
    this.loop.stop()
  }

  public render(): TemplateResult {
    return html`${this.renderer.element}`
  }

  public static styles = css`
    ${Component.styles}

    :host {
      width: 100%;
      height: 100%;
    }
  `
}

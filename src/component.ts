export * from 'lit-element'
import { LitElement, css } from 'lit-element'

export abstract class Component<
  Events extends { [event: string]: Event } = {}
> extends LitElement {
  public on<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    useCapture?: boolean
  ): this

  public on<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    options?: AddEventListenerOptions
  ): this

  public on<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    useCaptureOrOptions?: boolean | AddEventListenerOptions
  ): this {
    this.addEventListener(
      event as string,
      callback as () => void,
      useCaptureOrOptions
    )

    return this
  }

  public off<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    useCapture?: boolean
  ): this

  public off<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    options?: AddEventListenerOptions
  ): this

  public off<T extends keyof Events>(
    event: T,
    callback: (event: Events[T]) => void,
    useCaptureOrOptions?: boolean | AddEventListenerOptions
  ): this {
    this.removeEventListener(
      event as string,
      callback as () => void,
      useCaptureOrOptions
    )

    return this
  }

  public static styles = css`
    :host {
      display: block;
    }
  `
}

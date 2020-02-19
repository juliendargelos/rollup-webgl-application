import { Clock } from '~/clock'

export class Loop extends Set<(clock: Clock) => void> {
  protected request?: number
  public clock: Clock

  public constructor(fixed: number = 0) {
    super()
    this.clock = new Clock(fixed)
  }

  protected run = (): void => {
    this.tick()
    this.request = requestAnimationFrame(this.run)
  }

  public start(): this {
    this.stop()
    this.clock.reset()
    this.run()
    return this
  }

  public stop(): this {
    cancelAnimationFrame(this.request!)
    return this
  }

  public tick(): this {
    this.clock.tick()
    this.forEach(handler => handler(this.clock))
    return this
  }

  public reset(): this {
    this.clock.reset(true)
    return this
  }
}

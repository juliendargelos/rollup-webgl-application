export class Clock {
  protected date!: number
  public elapsed: number = 0
  public delta: number = 0
  public fixed: number

  constructor(fixed: number = 0) {
    this.fixed = fixed
  }

  public tick(): this {
    this.delta = this.fixed || -this.date + this.update().date
    this.elapsed += this.delta
    return this
  }

  public reset(elapsed: boolean = false): this {
    if (elapsed) this.elapsed = 0
    this.delta = 0
    return this.update()
  }

  public update(): this {
    this.date = Date.now()
    return this
  }
}

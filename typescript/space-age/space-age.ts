class SpaceAge {
  seconds: number
  constructor(seconds: number) {
    this.seconds = seconds
  }

  private toEarthYears() {
    const secondsPerYear = 60 * 60 * 24 * 365.25
    return this.seconds / secondsPerYear
  }

  private toYears(factor: number): number {
    return this.toEarthYears() / factor
  }

  onMercury() {
    return this.toYears(0.2408467)
  }

  onVenus() {
    return this.toYears(0.61519726)
  }

  onEarth() {
    return this.toEarthYears()
  }

  onMars() {
    return this.toYears(1.8808158)
  }

  onSaturn() {
    return this.toYears(29.447498)
  }

  onUranus() {
    return this.toYears(84.016846)
  }

  onJupiter() {
    return this.toYears(11.862615)
  }

  onNeptune() {
    return this.toYears(164.79132)
  }
}

export default SpaceAge
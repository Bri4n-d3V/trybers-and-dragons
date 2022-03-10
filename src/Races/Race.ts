export default abstract class Race {
  public readonly name: string;
  public readonly dexterity: number;

  constructor(n: string, d: number) {
    this.name = n;
    this.dexterity = d;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
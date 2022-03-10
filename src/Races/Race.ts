export default abstract class Race {
  public readonly name: string;
  public readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
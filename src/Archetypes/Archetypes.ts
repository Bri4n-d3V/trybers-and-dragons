import { EnergyType } from '../Energy';

export default abstract class Archetype {
  public readonly name: string;
  public readonly special: number;
  public readonly cost: number;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
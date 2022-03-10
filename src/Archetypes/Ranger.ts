import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  public energyType: EnergyType;
  private static rangerInstances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.addRangerInstances();
  }

  private static addRangerInstances(): void {
    this.rangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangerInstances;
  }
}
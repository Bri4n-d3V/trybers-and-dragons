import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  public energyType: EnergyType;
  private static mageInstances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Mage.addMageInstances();
  }

  private static addMageInstances(): void {
    this.mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.mageInstances;
  }
}
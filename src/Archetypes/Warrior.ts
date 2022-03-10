import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  public energyType: EnergyType;
  private static warriorInstances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addWarriorInstances();
  }

  private static addWarriorInstances(): void {
    this.warriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorInstances;
  }
}
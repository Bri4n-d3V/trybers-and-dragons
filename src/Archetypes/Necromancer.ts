import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  public energyType: EnergyType;
  private static necromancerInstances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.addNecromancerInstances();
  }

  private static addNecromancerInstances(): void {
    this.necromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.necromancerInstances;
  }
}
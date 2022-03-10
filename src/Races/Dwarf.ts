import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  private static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.addDwarfInstances();
  }

  private static addDwarfInstances(): void {
    this.dwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.dwarfInstances;
  }
}
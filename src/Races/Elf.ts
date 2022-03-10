import Race from './Race';

export default class Elf extends Race {
  public maxLifePoints: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.addElfInstances();
  }

  private static addElfInstances(): void {
    this.elfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.elfInstances;
  }
}
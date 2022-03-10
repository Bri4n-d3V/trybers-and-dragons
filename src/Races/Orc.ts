import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  private static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.addOrcInstances();
  }

  private static addOrcInstances(): void {
    this.orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.orcInstances;
  }
}
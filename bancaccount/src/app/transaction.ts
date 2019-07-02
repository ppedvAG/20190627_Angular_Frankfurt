export class Transaction {
  constructor(
    public description: string,
    public date: Date,
    public amount: number
  ) {}
}

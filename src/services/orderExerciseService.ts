import { OrderExercise } from "@models/orderExercise";

 export default class OrderExerciseService implements OrderExercise {
  // private exercise: string[] = [];
  keys: string[] = [];
  solution: string[] = [];

  constructor(exercise: string) {
    this.createKeys(exercise);
  }

  public checkSolution(answers: string[]) {
    return answers.toString() === this.keys.toString();
  }

  private createKeys(exercise: string): void {
    const regex = /\[([^\]]+)]/g;
    let match;
    while ((match = regex.exec(exercise)) !== null) {
      this.keys.push(match[1]);
    }
    console.log('this.keys created: ', this.keys)
  }

  get exercise() {
    const array: string [] = [...this.keys]
    for (let i = array.length - 1; i > 0; i--) {
      // Генерируем случайный индекс от 0 до i
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Меняем местами текущий элемент и случайный
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
  }
}

export default class OmissionExercise {
  constructor(exercise: string) {
    this.createKeys(exercise);
    this.splitToUI(exercise);
  }

  private createKeys(text: string) {
    let match;
    const regex = /\[(.*?)]/g;
    while ((match = regex.exec(text)) !== null) {
      this.keys.push(match[1]);
    }
  }

  public valueForUI: string[] = [];
  public keys: string[] = [];

  //  todo проверку пробелов, доделать createKeys для пробелов (когда правильный ответ - пробел)
  public checkAnswer(solution: string[]): boolean[] {
    const regex = /^\s*$/;
    // return regex.test(str);
    return this.keys.reduce((acc, correctKey, currentIndex) => {
      acc[currentIndex] =
        (correctKey === ' ' && !solution[currentIndex]) ||
        (correctKey === ' ' && regex.test(solution[currentIndex])) ||
        correctKey === solution[currentIndex].trim();
      return acc;
    }, [] as boolean[]);
  }

  private splitToUI(inputString: string) {
    // Используем регулярное выражение для замены слов в скобках на "key" и одновременно разделения строки
    const regex = /(\[[^\]]+])/g;

    // Убираем пустые строки
    this.valueForUI = inputString
      .split(regex)
      .map((part) => {
        // Заменяем слова в квадратных скобках на "key"
        return part.trim() === ''
          ? ''
          : part.match(regex)
            ? '[key]'
            : part.trim();
      })
      .filter((part) => part);
  }
}

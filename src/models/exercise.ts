/**
 * Тип, приходящий из БД
 */
export type Exercise<TExerciseMode extends ExerciseMode> = {
  id: number;
  title: string;
  description: string;
  level: Level; // Уровень сложности
  grammarRule: GrammarRule; // Связанное правило грамматики
  mode: ExerciseMode; // Способ выполнения упражнения
  /**
   * Упражнение.
   * Данные, которые используются для создания упражениея для вывода в UI.
   * Зависит от ExerciseMode
   */
  value: ExerciseValue<TExerciseMode>;
};

export type ExerciseValue<TExerciseMode extends ExerciseMode> =
  TExerciseMode extends "omissions" ? string : string[];

export type Level = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

type GrammarRule = {
  ruleId: number; // Уникальный идентификатор правила
  name: string; // Название грамматического правила, например, 'Present Simple Tense'
  description: string; // Описание правила
};

/**
 * - omissions - вставить пропущенные слова
 * - right-order -  расставить слова в правильном порядке
 * - right-order-dialog - расставить предложения в правильном порядке
 */
type ExerciseMode = "omissions" | "right-order" | "right-order-dialog";

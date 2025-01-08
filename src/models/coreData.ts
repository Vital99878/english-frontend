/**
 *  Основные данные
 */
export interface CoreData {
    id: number
    theme: Theme
    level: EnglishLevel
}

/**
 * Уровень сложности
 */
type EnglishLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'
/**
 * Тема упражениния. Например Артикль, Present simple
 */
type Theme = 'article' | 'present-simple'

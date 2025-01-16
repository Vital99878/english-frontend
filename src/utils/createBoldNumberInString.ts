export const createBoldNumberInString = (str: string) => {
    // Разбиваем строку по числам с точками, добавляем их в тег <strong>
    const parts = str.split(/(\d+\.)/); // Разделяем строку на числа с точкой и остальные части
    return parts.map((part, index) => {
        // Если это число с точкой, то оборачиваем его в <strong>
        if (/^\d+\.$/.test(part)) {
            return <strong key={index}>{part}</strong>;
        }
        return part; // Если не число с точкой, просто возвращаем текст
    });
};

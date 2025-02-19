// 1. Создаем алфавит
const alphabet = "абвгдеёжзийклмнопрстуфхцчщъыьэюя";

// 2. Функция для генерации случайного слова из 4 букв
const generateRandomWord = () => {
    let randomWord = "";
    
    for (let i = 0; i < 4; i++) {
        // Генерируем случайный индекс
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        // Добавляем случайную букву в слово
        randomWord += alphabet[randomIndex];
    }
    
    return randomWord;
};

// 3. Генерируем и выводим случайное слово
const randomWord = generateRandomWord();
console.log(randomWord);

let averageGrade = 100;
let resultMark = "";

try {
    switch (true) {
        case (averageGrade < 60 && averageGrade >= 0):
            resultMark = "Незадовільно";
            break;
        case (averageGrade >= 60 && averageGrade <= 70):
            resultMark = "Задовільно";
            break;
        case (averageGrade >= 71 && averageGrade <= 80):
            resultMark = "Добре";
            break;
        case (averageGrade >= 81 && averageGrade <= 90):
            resultMark = "Дуже добре";
            break;
        case (averageGrade >= 91 && averageGrade <= 100):
            resultMark = "Відмінно";
            break;
        case (averageGrade < 0 || averageGrade > 100):
            throw new Error("Значення не у діапазоні!");
        default:
            throw new Error("Передане значення не є числом!");
    }
    console.log(`Ваш рейтинг ${averageGrade}\nВаша оцінка "${resultMark}"`);
} catch (error) {
    console.error("Сталася помилка:", error.message);
}

let averageGrade = 100;
let resultMark = "";

try {
    if (typeof averageGrade !== "number") {
        throw new Error("Передане значення не є числом!");
    }
        if (averageGrade < 60 && averageGrade >= 0) {
            resultMark = "Незадовільно";
        } else if (averageGrade >= 60 && averageGrade <= 70) {
            resultMark = "Задовільно";
        } else if (averageGrade >= 71 && averageGrade <= 80) {
            resultMark = "Добре";
        } else if (averageGrade >= 81 && averageGrade <= 90) {
            resultMark = "Дуже добре";
        } else if (averageGrade >= 91 && averageGrade <= 100) {
            resultMark = "Відмінно";
        } else if (averageGrade < 0 || averageGrade > 100) {
            throw new Error("Значення не у діапазоні!");
        }
    
    console.log(`Ваш рейтинг ${averageGrade}\nВаша оцінка "${resultMark}"`);
} catch (error) {
    console.error("Сталася помилка:", error.message);
}

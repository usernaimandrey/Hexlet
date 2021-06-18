[![Node.js CI](https://github.com/usernaimandrey/Hexlet/actions/workflows/node.js.yml/badge.svg)](https://github.com/usernaimandrey/Hexlet/actions/workflows/node.js.yml)

# Hexlet

## Здесь я буду выкладывать задания которые я решал на Hexlet в процессе обучения

## Введение в програмирование

_1.Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов._

_2.Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum,
которая находит сумму последовательности целых чисел._

_3.Реализуйте тело функции smallestDivisor, используя итеративный процесс._

_4.Напишите функцию smallestDivisor используя цикл while._

_5.Реализуйте функцию reverse, которая переворачивает строку._

## JS: Массивы

_6. Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы и возвращает новую матрицу — результат их произведения._

_7.Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево (против часовой стрелки) и соответственно вправо (по часовой стрелке)._
_Матрица реализована на массивах._
_Функции должны возвращать новую матрицу не изменяя исходную._

_8.Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход матрицу и_ _возвращает список элементов матрицы по порядку следования от левого верхнего элемента по_ _часовой стрелке к внутреннему. Движение по матрице напоминает улитку_

9.*Реализуйте и экспортируйте функцию calcShipsCount(), которая принимает на* *вход поле боя в виде квадратного двумерного массива из нулей и единиц. Ноль —* *пустая ячейка, единица — часть корабля. Функция должна вернуть количество* *кораблей на поле боя._*

_Так как корабли не должны соприкасаться друг с другом, реализуйте и экспортируйте функцию isValidField(), которая проверяет расстановку кораблей на корректность._

10. *Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра: набор символов в нижнем* *регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово. В результате вызова функция* *возвращает  true или false.*
*При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.*

11. *Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив (элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта),*
 *а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным).*
*Если совпадений не было, то функция должна вернуть null.*

12. *Экспортируйте по умолчанию функцию, которая принимает массив,*
    *каждый элемент которого содержит число или знак операции (+, -, *, /).*
    *Функция должна вернуть результат вычисления по обратной польской записи. Если в какой-то момент происходит деление на ноль,* *функция должна вернуть значение null.*

13. *Реализуйте и экспортируйте функцию toRoman(), которая переводит арабские числа в римские. Функция принимает на вход целое*   *число в диапазоне от 1 до 3000, а возвращает строку с римским представлением этого числа.*

*Реализуйте и экспортируйте функцию toArabic(), которая переводит число в римской записи в число, записанное арабскими цифрами.* *Если переданное римское число не корректно, то функция должна вернуть значение false.* 


## Деревья
14. *Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, элементами которого* *являются дети вложенных узлов*

15. *Реализуйте и экспортируйте по умолчанию функцию, которая создает такую файловую систему*

## Введение в ООП

16. *Реализуйте и экспортируйте по умолчанию класс Square для представления квадрата.*
    *У квадрата есть только одно свойство — сторона. Реализуйте метод getSide(), возвращающий значение стороны.*
    *Реализуйте класс SquaresGenerator со статическим методом generate(), принимающим два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук), которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.*

17. *Реализуйте и экспортируйте по умолчанию класс, который реализует представление узла. Конструктор класса принимает на вход значение ключа (число), и двух детей, которые в свою очередь также являются узлами. Дерево может быть создано пустым.*

*Класс должен содержать методы:*

    Геттер getKey() — возвращает ключ. Если дерево пустое, возвращает null.
    Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
    search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и возвращает узел. Если узел не найден, возвращается null.

18. *Реализуйте и экспортируйте по умолчанию функцию, которая возвращает строковое представление html.*
import {IExercise} from "@models/IExercise";

const EXERCISES_MOCK: Array<IExercise<'omissions'>> = [

    {
        "id": 1,
        "title": "Article ",
        "task": "Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то поставьте Пробел",
        "hint": "Упоминая предмет впервые, мы употребляем перед ним неопределенный артикль a (an). Упоминая этот же предмет вторично, мы ставим перед ним определенный артикль the.",
        "theme": "article",
        "level": "a1",
        "type": "omissions",
        "data": "1. This is [a] pen. That is [a] pencil. 2. This is [a] book. It is my book. 3. Is this your [ ] pencil? — No, it isn’t my [ ] pencil, it is my sister’s [ ] pencil. 4. I have [a] sister. My sister is [an] engineer. My sister’s husband is [a] doctor. They have got two [ ] children. 5. This is [a] girl. This girl is their [ ] daughter. Their daughter’s  [ ] name is Vera. 6. That is [a] boy. That [ ] boy is her [ ] brother. Her brother’s  [ ] name is Nick. 7. This is our [ ] flat. 8. We have got [a] car. Our [ ] car is not very expensive but reliable. 9. I have no [ ] pet. 10. My granny has got a [ ] headache. She has no [ ] idea what to do. 11. I have [a] friend. His [ ] name is Mike. My [ ] friend is very good. 12. It’s [a] cat. Its [ ] tail is long and bushy. It’s Mike’s [ ] cat. "
    },
    {
        "id": 2,
        "title": "Article ",
        "task": "Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то поставьте Пробел",
        "hint": "Неопределенный артикль а (аn) может употребляться только с исчисляемыми существительными, стоящими в единственном числе. Перед неисчисляемыми существительными или существительными во множественном числе неопределенный артикль опускается. E.g. This is a book. — Тhe book is interesting. исчисляемое в единств. ч. This is √ meat. — The meat is fresh. неисчисляемое These are √ books. — The books are good. множеств. число",
        "theme": "article",
        "level": "a1",
        "type": "omissions",
        "data": "1. When is your [ ] birthday? My [ ] birthday is (on) the [ ] 1st of May. 2. Do you remember your mother’s [ ] birthday? — Yes, I do. 3. His [ ] uncle is generous and her [ ] aunt is very kind. 4. That [ ] man is very clever. His [ ] book is recognized by a lot of people. 5. They know our [ ] address. 6. Their [ ] son speaks English very well. 7. My cousin’s [ ] dog is small. Its [ ] hair is curly.  8. Is this [a] watch? — No, it isn’t [a] watch, it’s [a] pen. 9. This [ ] pen is good, and that [ ] pen is bad. 10. I can see [a] pencil on [ ] your table, but I can see no [ ] paper. 11. Give me [a] chair, please. 12. They have [a] dog and two [ ]  cats. 13. I have [a] spoon in my [ ] soup plate, but I have no [ ] soup in it. 14. My [ ] friend says he is going to be [a] millionaire one day. 15. Would you like [an] orange? 16. Mr Smith is [an] artist. Mrs Smith is [a] poetess. She is not [a] singer."
    }
]
export default EXERCISES_MOCK

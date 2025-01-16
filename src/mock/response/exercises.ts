import { IExercise } from '@models/IExercise'

const EXERCISES_MOCK: Array<IExercise<'omissions'>> = [
    {
        id: 1,
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Упоминая предмет впервые, мы употребляем перед ним неопределенный артикль a (an). Упоминая этот же предмет вторично, мы ставим перед ним определенный артикль the. \n E.g. This is a book. The book is interesting.',
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        data: '1. This is [a] pen. That is [a] pencil. 2. This is [a] book. It is my book. 3. Is this your [ ] pencil? — No, it isn’t my [ ] pencil, it is my sister’s [ ] pencil. 4. I have [a] sister. My sister is [an] engineer. My sister’s husband is [a] doctor. They have got two [ ] children. 5. This is [a] girl. This girl is their [ ] daughter. Their daughter’s  [ ] name is Vera. 6. That is [a] boy. That [ ] boy is her [ ] brother. Her brother’s  [ ] name is Nick. 7. This is our [ ] flat. 8. We have got [a] car. Our [ ] car is not very expensive but reliable. 9. I have no [ ] pet. 10. My granny has got a [ ] headache. She has no [ ] idea what to do. 11. I have [a] friend. His [ ] name is Mike. My [ ] friend is very good. 12. It’s [a] cat. Its [ ] tail is long and bushy. It’s Mike’s [ ] cat. ',
    },
    {
        id: 2,
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Неопределенный артикль а (аn) может употребляться только с исчисляемыми существительными, стоящими в единственном числе. Перед неисчисляемыми существительными или существительными во множественном числе неопределенный артикль опускается. E.g. This is a book. — Тhe book is interesting. исчисляемое в единств. ч. This is √ meat. — The meat is fresh. неисчисляемое These are √ books. — The books are good. множеств. число',
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        data: '1. When is your [ ] birthday? My [ ] birthday is (on) the [ ] 1st of May. 2. Do you remember your mother’s [ ] birthday? — Yes, I do. 3. His [ ] uncle is generous and her [ ] aunt is very kind. 4. That [ ] man is very clever. His [ ] book is recognized by a lot of people. 5. They know our [ ] address. 6. Their [ ] son speaks English very well. 7. My cousin’s [ ] dog is small. Its [ ] hair is curly.  8. Is this [a] watch? — No, it isn’t [a] watch, it’s [a] pen. 9. This [ ] pen is good, and that [ ] pen is bad. 10. I can see [a] pencil on [ ] your table, but I can see no [ ] paper. 11. Give me [a] chair, please. 12. They have [a] dog and two [ ]  cats. 13. I have [a] spoon in my [ ] soup plate, but I have no [ ] soup in it. 14. My [ ] friend says he is going to be [a] millionaire one day. 15. Would you like [an] orange? 16. Mr Smith is [an] artist. Mrs Smith is [a] poetess. She is not [a] singer.',
    },
    {
        id: 3,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Неопределенный артикль a (an) может употребляться только с исчисляемыми существительными, стоящими в единственном числе. Перед неисчисляемыми существи- тельными или существительными во множественном чис- ле неопределенный артикль опускается. Определенный артикль the употребляется как с исчисляемыми, так и с неисчисляемыми существительными, как с единственным, так и со множественным числом. • E.g.  This is a book. The book is interesting. исчисляемое в единственном числе This is � meat. The meat is fresh. неисчисляемое These are � books. The books are good. множественное число',
        data:
            'He hasn’t got [a] car. But he’s got [a] computer. [The] computer is new. 2. His [ ] friends have got [a] cat and [a] dog. [The] dog never bites [the] cat. 3. This is [a] tree. [The] tree is green. 4. I can see three [ ] boys. [The] boys are playing. 5. I have [a] bicycle. [The] bicycle is black. My [ ] friend has no [] bicycle. 6. Our [ ] room is large. 7. We wrote [a] dictation yesterday. [The] dictation was long. 8. She has two [ ] daughters and one [ ] son. Her [ ] son is [a] pupil. 9. Last year I gave my [ ] mother [a] bracelet for her [ ] birthday. She liked [the] bracelet. 10. My [ ] brother’s [ ] friend has no [ ] dog. 11. This [ ] pencil is broken. Give me that [ ] pencil, please. 12. She has [a] ball. [The] ball is [ ] big. 13. I got [a] letter from my [ ] friend yesterday. [The] letter was interesting. 14. When they were in Geneva, they stayed at [a] hotel. Sometimes they had dinner at [the] hotel and sometimes in [a] restaurant. 15. I’ve got [an] idea. 16. What [a] surprise! Our [ ] parents gave us [a] new pet for Christmas.',
    },
]
export default EXERCISES_MOCK

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
        hint: 'Неопределенный артикль a (an) может употребляться только с исчисляемыми существительными, стоящими в единственном числе. Перед неисчисляемыми существительными или существительными во множественном числе неопределенный артикль опускается. Определенный артикль the употребляется как с исчисляемыми, так и с неисчисляемыми существительными, как с единственным, так и со множественным числом. • E.g.  This is a book. The book is interesting. исчисляемое в единственном числе This is � meat. The meat is fresh. неисчисляемое These are � books. The books are good. множественное число',
        data:
            '1. He hasn’t got [a] car. But he’s got [a] computer. [The] computer is new. 2. His [ ] friends have got [a] cat and [a] dog. [The] dog never bites [the] cat. 3. This is [a] tree. [The] tree is green. 4. I can see three [ ] boys. [The] boys are playing. 5. I have [a] bicycle. [The] bicycle is black. My [ ] friend has no [] bicycle. 6. Our [ ] room is large. 7. We wrote [a] dictation yesterday. [The] dictation was long. 8. She has two [ ] daughters and one [ ] son. Her [ ] son is [a] pupil. 9. Last year I gave my [ ] mother [a] bracelet for her [ ] birthday. She liked [the] bracelet. 10. My [ ] brother’s [ ] friend has no [ ] dog. 11. This [ ] pencil is broken. Give me that [ ] pencil, please. 12. She has [a] ball. [The] ball is [ ] big. 13. I got [a] letter from my [ ] friend yesterday. [The] letter was interesting. 14. When they were in Geneva, they stayed at [a] hotel. Sometimes they had dinner at [the] hotel and sometimes in [a] restaurant. 15. I’ve got [an] idea. 16. What [a] surprise! Our [ ] parents gave us [a] new pet for Christmas.',
    },
    {
        id: 4,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Запомните следующие словосочетания, в которых артикль не употребляется: at � school at � home at � work',
        data:
            '1. This is [a] pen. [The] pen is red. 2. These are pencils. [The] pencils are black. 3. This is [ ] soup. [The] soup is so tasty. 4. In the morning I eat [a] sandwich and drink [ ] tea. 5. She gave me [ ] coffee and [a] cake. [The] coffee was hot. [The] cake was very tasty. 6. Do you like [ ] ice cream? 7. I see [a] book in your [ ] hand. Is [the] book interesting? 8. Do you need [a] camera? 9. He never eats [ ] meat, he always eats [ ] vegetables, [ ] cereals, [ ] seeds, [ ] fruit, and [ ] nuts. He is [a] vegetarian. 10. This is [a] pineapple. [The] pineapple is delicious. 11. [Elaine,] apples are good for you! 12. My [ ] cousin is upset. He’s got [a] sore throat. 13. This is [ ] cottage cheese. [The] cottage cheese is fresh. 14. She bought [ ] meat, [ ] butter and [ ] potatoes yesterday. She also bought [a] cake. [The] cake was [ ] delicious. We ate [the] cake and drank [ ] tea. 15. This is my [ ] table. On [the] table I have [ ] books, two [ ] pencils, [a] pen and [ ] paper. 16. This is [a] bag. [The] bag is brown. It is my sister’s [ ] bag. And this is my [ ] bag. It is [ ] yellow.',
    },
    {
        id: 5,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Если перед существительным употребляется прилагательное, оно стоит между артиклем и существительным. • E.g.  This is a book. This is a good book.',
        data:
            '1. I have two [ ] sisters. My [ ] sisters are [ ] students. 2. We are at [ ] home. 3. My [ ] brother is not at [ ] home, he is at [ ] school. 4. My [ ] mother is at [ ] work. She is [a] doctor. 5. I am not [a] doctor. 6. He has no [ ] sister. 7. He is not [a] pilot. 8. I have thirty-two [ ] teeth. 9. He has [a] child. 10. She has two [ ] children. Her children are at [ ] school. 11. Is your father at [ ] home? — No, he is at [ ] work. 12. Where is your [ ] brother? — He is at [ ] home.',
    },
    {
        id: 6,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Часто, даже упоминая предмет впервые, мы, тем не менее, употребляем перед ним определенный артикль: а) если упоминаемый предмет является единственным в мире:• E.g. The sun is shining brightly. б) если этот предмет является определенным по ситуации:• E.g. Put the book on the table.',
        data:
            '1. We have [a] large [ ] family. 2. My granny often tells us [ ] long [ ] interesting [ ] stories. 3. My [ ] father is [an] engineer. He works in [a] factory. [The] factory is large. 4. My [ ] mother is [a] doctor. She works at [a] large [ ] hospital. She is at [ ] work now. 5. My [ ] aunt is [a] teacher. She works at [a] school. [The] school is good. My [ ] aunt is not at [ ] school now. She is at [ ] home. She is drinking [ ] tea and eating [ ] jam. [The] jam is sweet. I am at [ ] home, too. I am drinking [ ] tea and eat [ing] a [sandwich.] The sandwich is tasty. 6. My sister is [at] school. She is [a] pupil. 7. My cousin has [a] big [ ] black [ ] cat. My cousin’s [ ] cat has two [ ] kittens. [The] cat likes [ ] milk. [The] kittens like [ ] milk, too. 8. I am [an] engineer. 9. My [ ] son is [a] pupil. 10. He is [a] good [ ] pupil. 11. This is [a] house. 12. This is my [ ] laptop. 13. You have some [ ] pencils, but I have no [ ] pencil. Give me [a] pencil, please. 14. It’s [a] small [ ] animal that has [ ] long [ ] ears, [a] short [ ] tail, and [ ] soft [ ] hair.\n',
    },
    {
        id: 7,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: '',
        data:
            '1. What’s [the] weather like today? — [The] weather is fine. 2. [The] sun is yellow. 3. [The] sky is grey today. 4. [The] Earth is [a] planet. 5. We had [an] English lesson yesterday. [The] teacher asked me many [ ] questions. [The] questions were difficult. 6. Where is your [ ] brother? — He is at [ ] home. He is in his [ ] room. He is sitting at [the] table. He is doing his [ ] homework. [The] homework is difficult. 7. Our [ ] cat is sitting on [the] sofa. 8. It is very dark in [the] room. Turn on [the] light, please. 9. Nick went into [the] bathroom, turned on [the] water and washed his [ ] hands. 10. Ann turned on [the] television to watch [the] evening news. 11. She doesn’t often watch [ ] TV. 12. You can’t see [the] moon in [the] sky tonight.',
    },
    {
        id: 8,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Кроме того, существует огромное количество так называемых устойчивых словосочетаний, в которых артикль употребляется или отсутствует традиционно. Эти слово- сочетания приходится заучивать наизусть. Запомните следующие конструкции: There is a … . Where is the … ? Запомните также следующие предложения: The (book) is on the (table). • Ho: The (book) is on a little (table)1.',
        data:
            '1. This is [a] good [ ] book. Take [the] book from [the] table. Put this [ ] book in [the] bookcase. 2. [The] weather is fine today. [The] sky is blue. [The] sun is shining brightly in [the] blue [ ] sky. 3. This is [a] boy. [The] boy is at [ ] school. He is [a] pupil. This [ ] boy is my [ ] brother’s [ ] friend. He has [a] cat, but he has no [ ] dog. He likes his [ ] cat. He gives [the] cat [ ] milk every day. 4. Yesterday I received [a] letter from my [ ] friend. [The] letter was important. 5. We live in [a] big house. I like [the] house very much. 6. Are you [a] work er? — No, I [am] a student. 7. I like [your] beautiful [ ] flower. Give me [the] flower, please. 8. My [ ] mother is at [ ] home. She is reading [a] marvellous [ ] story. 9. My [ ] father is not at [ ] home. He is at [ ] work. He is not [a] lawyer. He is [a] doctor. He is [a] good [ ] doctor. He works at [a] hospital. [The] hospital is large. 10. That is [a] book. [The] book is thick. That [ ] book isn’t thin. This is [an] interesting thick book. 11. Those are [ ] books. [The] books are new and old. Those are [ ] new and old books. Those [ ] books are interesting.',
    },
    {
        id: 9,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Запомните следующее устойчивое словосочетание: in �_ front (of)',
        data:
            '1. There is [a] big tree in [the] garden. 2. There is [a] bank near here. — Where is [the] bank? 3. There is [a] new super market [in] the centre of [our] town. 4. There is [a] hotel over there. [The] hotel isn’t cheap. 5. Where is [the] cat? — [The] cat is on [the] sofa. 6. Where is [the] book? — [The] book is on [the] shelf. 7. Where are [the] flowers? — [The] flowers are in [a] beautiful vase. 8. Where is [the] vase? — [The] vase is on [a] little table near [the] window. 9. Open [the] window, please. [The] weather is fine today. I can see [the] sun in [the] sky. I can see [a] nice little bird. [The] bird is sitting in [a] big tree. [The] tree is green. 10. There is [a] little white cloud in [the] sky. 11. What [a] beautiful [ ] day! 12. We have [a] large room. There is [a] big sofa in [the] room and [a] little lamp on [the] wall over [the] sofa. I like to sit on [the] sofa and read [a] good book. 13. This is [a] computer. [The] computer isn’t old. This [ ] computer is new. This is [a] good new computer. 14. These are [ ] computers. [The] computers are new. These aren’t [ ] old computers. These are [ ] new computers. These [ ] computers are good.',
    },
    {
        id: 10,
        theme: 'article',
        level: 'a1',
        type: 'omissions',
        title: 'Article ',
        task: 'Вставьте акртикль там, где это необходио. \n Если артикля быть не должно, то вставьте Пробел',
        hint: 'Запомните следующие конструкции, требующие неопределенного артикля: I have a … This is a … I am a … Не has a … That is a … Не is a … I see a … It is a … She is a … There is a …',
        data:
            '1. There is [a] wonderful small computer in [ ] front of [the] books there. 2. Where is [the] soup? — [The] soup is in [a] big saucepan on [the] gas cooker. 3. Where are [the] cutlets? — [The] cutlets are in [the] refrigerator on [a] little plate. 4. There is no [ ] bread on [the] table. Where is [the] bread? 5. There is [a] little brown coffee table in our [ ] room in [ ] front of [the] sofa. 6. Where is [the] table in your [ ] room? 7. There is [a] thick carpet on [the] floor in my mother’s [ ] room. 8. Is your brother at [ ] home? — No, he is at [ ] work. He works in [a] big factory. He is [an] engineer. 9. My sister has many [ ] books. [The] books are in [a] big bookcase. She has really [ ] good [ ] taste in [ ] books. 10. [The] weather is fine today. Let’s go and play in [the] yard. There are many [ ] children in [the] yard. They are playing with [a] ball.',
    },
]
export default EXERCISES_MOCK

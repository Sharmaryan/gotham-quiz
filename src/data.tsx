import { v4 as uuid } from "uuid";

type Options = {
    text: string,
    isRight: boolean,
    id: string
}

type Question = {
    question: string,
    id: string,
    options: Options[],
};

type Quiz = {
    quizName: string,
    quizImage: string,
    id: string,
    questions: Question[]
}

const quizOne: Quiz = {
    quizName: 'marvel',
    quizImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    id: uuid(),
    questions: [
        {
            question: 'Thor’s hammer Mjolnir is made of metal from the heart of a dying what?',
            id: uuid(),
            options: [
                {
                    text: 'star',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'comet',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'planet',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'asteroid',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
        {
            question: 'What is the name of the villain in Marvel Studios Ant-Man?',
            id: uuid(),
            options: [
                {
                    text: 'the wasp',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'hornet',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'yellow jacket',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'ghost',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
        {
            question: 'What is the name of the set of documents that regulate the activities of enhanced persons?',
            id: uuid(),
            options: [
                {
                    text: 'stark accords',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'paris accords',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 's.h.i.e.l.d. accords',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'sokovia accords',
                    isRight: true,
                    id: uuid(),
                },
            ]
        },
        {
            question: 'How many Infinity Stones are there?',
            id: uuid(),
            options: [
                {
                    text: 'two',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'three',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'five',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'six',
                    isRight: true,
                    id: uuid(),
                },
            ]
        },
        {
            question: 'Where is Captain America from?',
            id: uuid(),
            options: [
                {
                    text: 'los angeles',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'brooklyn',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'chicago',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'houston',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
    ]
}

const quizTwo: Quiz = {
    quizName: 'dc',
    quizImage: 'https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg',
    id: uuid(),
    questions: [
        {
            question: "What is Superman's original name, the one he was born with?",
            id: uuid(),
            options: [
                {
                    text: 'clark kent',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'joseph',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'bualle',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'kalel',
                    isRight: true,
                    id: uuid(),
                },
            ]
        },
        {
            question: "Three DC comics superheroes are part of the Holy Trinity. Name the three. ?",
            id: uuid(),
            options: [
                {
                    text: 'batman, flash, cyborg',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'batmam, wonder woman, superman',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'wonder woman, superman, flash',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'wonder woman, batman, aquaman',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
        {
            question: "In the 1987 graphic novel, 'Batman: Son of the Demon,' we learn that Batman has a son with Talia al Ghul. What is his name? ",
            id: uuid(),
            options: [
                {
                    text: 'damian',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'william',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'barry',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'alfred',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
        {
            question: "The Flash (Barry Allen) gets married to a beautiful woman who is also a secret leader of Team Flash. What is her name? ",
            id: uuid(),
            options: [
                {
                    text: 'caitlin snow',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'iris west',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: 'kamila hwang',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: 'sans horton',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },
        {
            question: "In the movie 'Suicide Squad,' we are introduced to Captain Boomerang. How many versions of the character was there in the comics?  ",
            id: uuid(),
            options: [
                {
                    text: '1',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: '4',
                    isRight: false,
                    id: uuid(),
                },
                {
                    text: '2',
                    isRight: true,
                    id: uuid(),
                },
                {
                    text: '5',
                    isRight: false,
                    id: uuid(),
                },
            ]
        },

    ]
}

export { quizOne, quizTwo }
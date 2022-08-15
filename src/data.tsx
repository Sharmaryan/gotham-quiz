import { v4 as uuid } from "uuid";

type Options = {
    text: string,
    isRight: boolean
}

type Question = {
    question: string,
    options: Options[],
};

type Quiz = {
    quizName: string,
    quizImage:string,
    id:string,
    questions: Question[]
}

const quizOne: Quiz = {
    quizName: 'marvel',
    quizImage:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    id:uuid(),
    questions: [
        {
            question: 'Thor’s hammer Mjolnir is made of metal from the heart of a dying what?',
            options: [
                {
                    text: 'star',
                    isRight: true,
                },
                {
                    text: 'comet',
                    isRight: false,
                },
                {
                    text: 'planet',
                    isRight: false,
                },
                {
                    text: 'asteroid',
                    isRight: false,
                },
            ]
        },
        {
            question: 'What is the name of the villain in Marvel Studios Ant-Man?',
            options: [
                {
                    text: 'the wasp',
                    isRight: false,
                },
                {
                    text: 'hornet',
                    isRight: false,
                },
                {
                    text: 'yellow jacket',
                    isRight: true,
                },
                {
                    text: 'ghost',
                    isRight: false,
                },
            ]
        },
        {
            question: 'What is the name of the set of documents that regulate the activities of enhanced persons?',
            options: [
                {
                    text: 'stark accords',
                    isRight: false,
                },
                {
                    text: 'paris accords',
                    isRight: false,
                },
                {
                    text: 's.h.i.e.l.d. accords',
                    isRight: false,
                },
                {
                    text: 'sokovia accords',
                    isRight: true,
                },
            ]
        },
        {
            question: 'How many Infinity Stones are there?',
            options: [
                {
                    text: 'two',
                    isRight: false,
                },
                {
                    text: 'three',
                    isRight: false,
                },
                {
                    text: 'five',
                    isRight: false,
                },
                {
                    text: 'six',
                    isRight: true,
                },
            ]
        },
        {
            question: 'Where is Captain America from?',
            options: [
                {
                    text: 'los angeles',
                    isRight: false,
                },
                {
                    text: 'brooklyn',
                    isRight: true,
                },
                {
                    text: 'chicago',
                    isRight: false,
                },
                {
                    text: 'houston',
                    isRight: false,
                },
            ]
        },
    ]
}

const quizTwo: Quiz = {
    quizName: 'dc',
    quizImage:'https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg',
    id: uuid(),
    questions: [
        {
            question: "What is Superman's original name, the one he was born with?",
            options: [
                {
                    text: 'clark kent',
                    isRight: false,
                },
                {
                    text: 'joseph',
                    isRight: false,
                },
                {
                    text: 'bualle',
                    isRight: false,
                },
                {
                    text: 'kalel',
                    isRight: true,
                },
            ]
        },
        {
            question: "Three DC comics superheroes are part of the Holy Trinity. Name the three. ?",
            options: [
                {
                    text: 'batman, flash, cyborg',
                    isRight: false,
                },
                {
                    text: 'batmam, wonder woman, superman',
                    isRight: true,
                },
                {
                    text: 'wonder woman, superman, flash',
                    isRight: false,
                },
                {
                    text: 'wonder woman, batman, aquaman',
                    isRight: false,
                },
            ]
        },
        {
            question: "In the 1987 graphic novel, 'Batman: Son of the Demon,' we learn that Batman has a son with Talia al Ghul. What is his name? ",
            options: [
                {
                    text: 'damian',
                    isRight: true,
                },
                {
                    text: 'william',
                    isRight: false,
                },
                {
                    text: 'barry',
                    isRight: false,
                },
                {
                    text: 'alfred',
                    isRight: false,
                },
            ]
        },
        {
            question: "The Flash (Barry Allen) gets married to a beautiful woman who is also a secret leader of Team Flash. What is her name? ",
            options: [
                {
                    text: 'caitlin snow',
                    isRight: false,
                },
                {
                    text: 'iris west',
                    isRight: true,
                },
                {
                    text: 'kamila hwang',
                    isRight: false,
                },
                {
                    text: 'sans horton',
                    isRight: false,
                },
            ]
        },
        {
            question: "In the movie 'Suicide Squad,' we are introduced to Captain Boomerang. How many versions of the character was there in the comics?  ",
            options: [
                {
                    text: '1',
                    isRight: false,
                },
                {
                    text: '4',
                    isRight: false,
                },
                {
                    text: '2',
                    isRight: true,
                },
                {
                    text: '5',
                    isRight: false,
                },
            ]
        },
     
    ]
}

export { quizOne, quizTwo }
import { element } from 'protractor';
import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { MetaService } from '../MetaService';

interface questionConfig {
    answer?: any;
    options?: any;
    description?: string;
    hint?: string;
    note?: string;
}
class Question {
    type: string;
    config: questionConfig;
    question: string;
    element: any;
    answered: boolean = false;
    correct: boolean = undefined;

    constructor(type: string, question: string, config: questionConfig) {
        this.type = type;
        this[type] = true;
        this.config = config;
        this.question = question;
    }
}

@Component({
    selector: 'app-privacy-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

    @ViewChild('quizWrapper', { static: false }) domelement: ElementRef;
    @ViewChild('questionContainer', { static: false }) domelement2: ElementRef;

    questions = [
        new Question('boolean', 'A VPN will completely protect your privacy online.', {
            answer: false,
            note: 'A VPN will only encrypt your connection, there are many potential leaks on either end of it.',
        }),

        new Question('multichoice', 'When using a traditional VPN, who are you hiding your data from?', {
            options: [
                { text: 'The websites you visit' },
                { text: 'Your ISP', answer: true },
                { text: 'Advertising tracking companies' },
                { text: 'The VPN itself' },
            ],
            note: 'Your VPN encrypts data while it\'s being transferred between your device, and the VPN server.'
        }),

        new Question('multichoice', 'When logging into a new website I should...', {
            options: [
                { text: 'Use my Gmail login for easy sign up' },
                { text: 'Use oauth like FB or Twitter' },
                { text: 'Create a new login with an email address', answer: true },
            ],
            note: 'Using a "Sign in with ___" feature lets that connected service know every time you log in.'
        }),

        new Question('multichoice', 'What type of information can the web browser collect about you?', {
            options: [
                { text: 'Your physical location' },
                { text: 'What you’re wearing' },
                { text: 'Your credit score' },
                { text: 'All of the above', answer: true },
            ],
            note: '[insert note here]'
        }),

        new Question('boolean', 'When you browse the web in a private tab or incognito mode, companies will not be able to track your activity.', {
            answer: false,
        }),
    ];
    question: Question;
    questionIndex: number = -1;
    score: number = 0;
    finalScore: number;
    quizWrapper: any;
    questionContainer: any;
    resizeFunc: any;

    constructor(
        private meta: MetaService,
    ) {

    }

    endQuiz() {
        this.quizWrapper.style.height = `${this.quizWrapper.offsetHeight}px`;
        window.requestAnimationFrame(() => {
            this.quizWrapper.classList.add('over');
        })
        this.question = undefined;
        this.finalScore = Math.round((this.score / this.questions.length) * 100);
    }

    answer(answer) {
        if (this.question.answered) return this.nextQuestion();

        switch (this.question.type) {
            case 'boolean':
                this.question.correct = this.question.config.answer === answer;
                break;
            case 'multichoice':
                this.question.correct = answer.answer === true;
                break;
            default:
                alert(`Question type ${this.question.type} does not have an answer handler.`);
                break;
        }

        if (this.question.correct) {
            this.score++;
        }
        this.nextQuestion();
    }

    nextQuestion() {
        if (this.question && (this.question.answered || !this.question.config.note)) {
            this.question.element.classList.add('inactive');
            this.question.element.classList.remove('active');
        } else if (this.question && !this.question.answered) {
            this.question.answered = true;
            return;
        }

        this.questionIndex++;
        if (this.questionIndex >= this.questions.length) {
            this.endQuiz();
        } else {
            this.question = this.questions[this.questionIndex];
            this.question.element.classList.add('active');
        }
    }

    sizeQuestionContainer() {
        let maxHeight = 0;

        for (let index = 0; index < this.questionContainer.children.length; index++) {
            const question = this.questionContainer.children[index];
            maxHeight = Math.max(question.offsetHeight, maxHeight, question.clientHeight);
            //question.style.marginTop = `-${question.offsetHeight / 2}px`;
        }

        this.quizWrapper.style.minHeight = `${maxHeight}px`;
    }

    ngOnInit() {
        this.meta.setGlobalTitle('Privacy Quiz | Orchid');
        this.meta.setGlobalDescription('Check to see how much you know about online privacy!');
    }

    ngAfterViewInit() {
        this.quizWrapper = this.domelement.nativeElement;
        this.questionContainer = this.domelement2.nativeElement;

        for (let index = 0; index < this.questionContainer.children.length; index++) {
            const element = this.questionContainer.children[index];
            this.questions[index].element = element;
        }

        this.sizeQuestionContainer();
        this.resizeFunc = this.sizeQuestionContainer.bind(this);
        window.addEventListener('load', this.resizeFunc);
        window.addEventListener('resize', this.resizeFunc);

        this.nextQuestion();
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.resizeFunc);
    }
}
import { element } from 'protractor';
import { ElementRef, Component, OnInit, ViewChild, OnChanges } from '@angular/core';
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
    @ViewChild('progressBar', { static: false }) domelement3: ElementRef;

    question: Question;
    questionIndex: number = -1;
    score: number = 0;
    finalScore: number;
    quizWrapper: any;
    questionContainer: any;
    progressBar: any;
    resizeFunc: any;
    progress: number = -1;
    twitterShareLink: string = '';
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
        }),

        new Question('boolean', 'When you browse the web in a private tab or incognito mode, companies will not be able to track your activity.', {
            answer: false,
        }),
    ];

    constructor(
        private meta: MetaService,
    ) {

    }

    scoreLow () {
        return this.finalScore <= 33.3333;
    }
    scoreMid () {
        return this.finalScore > 33.3333 && this.finalScore < 66.6666;
    }
    scoreHigh () {
        return this.finalScore >= 66.6666;
    }

    endQuiz() {
        this.quizWrapper.style.height = `${this.quizWrapper.offsetHeight}px`;
        window.requestAnimationFrame(() => {
            this.quizWrapper.classList.add('over');
        })
        this.question = undefined;
        this.finalScore = Math.round((this.score / this.questions.length) * 100);
        const resultShareString = `I got ${this.finalScore} out of 100 on the online privacy quiz! https://www.orchid.com/quiz/`;
        this.twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(resultShareString)}`;
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
        this.progress = this.questionIndex / this.questions.length;
        this.progressBar.style.width = `${Math.round(this.progress * 100)}%`;
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
        for (let index = 0; index < this.quizWrapper.children.length; index++) {
            const element = this.quizWrapper.children[index];
            maxHeight = Math.max(element.offsetHeight, maxHeight, element.clientHeight);
            //element.style.marginTop = `-${element.offsetHeight / 2}px`;
        }

        this.quizWrapper.style.minHeight = `calc(${maxHeight}px + 2rem)`;

        if(this.questionContainer.children[this.questionIndex]) {
            const currentQuestion = this.questionContainer.children[this.questionIndex];
            this.progressBar.parentElement.style.bottom = 'unset';
            this.progressBar.parentElement.style.top = 'calc(' + currentQuestion.offsetHeight + 'px + 3rem)';
        }
    }

    ngOnInit() {
        this.meta.setGlobalTitle('Privacy Quiz | Orchid');
        this.meta.setGlobalDescription('Check to see how much you know about online privacy!');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/quiz/social.png');
    }

    ngAfterViewInit() {
        this.quizWrapper = this.domelement.nativeElement;
        this.questionContainer = this.domelement2.nativeElement;
        this.progressBar = this.domelement3.nativeElement;


        for (let index = 0; index < this.questionContainer.children.length; index++) {
            const element = this.questionContainer.children[index];
            this.questions[index].element = element;
        }

        this.sizeQuestionContainer();
        this.resizeFunc = this.sizeQuestionContainer.bind(this);
        window.addEventListener('load', this.resizeFunc);
        window.addEventListener('resize', this.resizeFunc);

        setTimeout(this.resizeFunc, 3000);

        const observer = new MutationObserver(this.resizeFunc);
        observer.observe(this.questionContainer, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.resizeFunc);
    }
}
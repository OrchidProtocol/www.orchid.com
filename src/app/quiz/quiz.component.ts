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
    wrong: boolean = undefined;

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
    quizContainer: any;
    quizStart: any;
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
            note: "Your VPN encrypts data while it's being transferred between your device and the VPN server. Therefore, your ISP cannot see which sites you visit, or what data is transferred."
        }),

        new Question('multichoice', 'When logging into a new website I should...', {
            options: [
                { text: 'Use my Gmail login for easy sign up' },
                { text: 'Use oauth like FB or Twitter' },
                { text: 'Create a new login with an email address', answer: true },
            ],
            note: 'Using a "Sign in with ___" feature lets that connected service know every time you log in, and in many cases, even what you do on that site.'
        }),

        new Question('multichoice', 'What type of information can the web browser collect about you?', {
            options: [
                { text: 'Your physical location', answer: true },
                { text: 'What you’re wearing' },
                { text: 'Your credit score' },
            ],
            note: 'Your physical location can be estimated based on your IP address. Using a VPN, you can browse the web as though you were in another city, state, or country.',
        }),

        new Question('boolean', 'When you browse the web in a private tab or incognito mode, companies will not be able to track your activity.', {
            answer: false,
            note: 'While incognito mode can block third-party cookies on some websites, there are many other ways for services to identify you.',
        }),

        new Question('multichoice', 'When using IoT connected devices in your home or office, you should not:', {
            options: [
                { text: 'Turn them off ever' },
                { text: 'Put them on the same network as your computers', answer: true },
                { text: 'Deny them access to your location data' },
            ],
            note: 'IoT devices on the same network as your PC or phone can collect all sorts of information, including which websites you visit, and when you are at home.',
        }),

        new Question('multichoice', 'Which of the following are used to build your online digital fingerprint?', {
            options: [
                { text: 'Screen size' },
                { text: 'Type of device I’m using' },
                { text: 'The fonts installed on my system' },
                { text: 'All of the above', answer: true },
            ],
            note: '<a target="_blank" href="https://blog.orchid.com/can-you-still-be-tracked-using-a-vpn/">All types of metrics are used to identify individual users.</a>',
        }),

        new Question('multichoice', 'What is the average number of trackers found on a typical news site?', {
            options: [
                { text: '1-3' },
                { text: '3-5' },
                { text: '5-10' },
                { text: '30+', answer: true },
            ],
            note: 'Not only are these trackers numerous, but they even noticeably impact how <a target="_blank" href="https://www.pingdom.com/blog/trackers-impact-performance/">long it takes for most news sites to load</a>.',
        }),

        new Question('boolean', 'Information about your browsing activity on websites is regularly sold to third parties.', {
            answer: true,
            note: ' Companies, large and small, regularly buy and sell the data they collect to data brokers. The data is then often combined to form larger profiles about your online behavior.',
        }),

        new Question('boolean', 'The General Data Protection Regulation (GDPR) prevents companies from retaining your personal data for more than 180 days.', {
            answer: false,
            note: 'Under GDPR, there is no strict upper limit to how long companies can retain your data. It is up to individual companies to set their own data retention deadlines.',
        }),
    ];

    constructor(
        private meta: MetaService,
    ) {

    }

    scoreLow() {
        return this.finalScore <= 50;
    }
    scoreMid() {
        return this.finalScore > 33.3333 && this.finalScore < 66.6666;
    }
    scoreHigh() {
        return this.finalScore > 50;
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
                if (!this.question.correct) {
                    answer.wrong = true;
                }
                break;
            default:
                alert(`Question type ${this.question.type} does not have an answer handler.`);
                break;
        }

        if (this.question.correct) {
            this.score++;
        }
        this.question.wrong = !this.question.correct;
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
        for (let index = 0; index < this.quizContainer.children.length; index++) {
            const element = this.quizContainer.children[index];
            maxHeight = Math.max(element.offsetHeight, maxHeight, element.clientHeight);
            //element.style.marginTop = `-${element.offsetHeight / 2}px`;
        }

        this.quizWrapper.style.minHeight = `calc(${maxHeight}px + 2rem)`;

        if (this.questionContainer.children[this.questionIndex]) {
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
        const doc = typeof document !== "undefined" && document;
        if (!doc) return;
        const noJsElements = Array.from(doc.getElementsByClassName('no-js') as HTMLCollectionOf<HTMLElement>);
        for (let index = 0; index < noJsElements.length; index++) {
            const element = noJsElements[index];
            element.style.display = "none";
        }

        this.quizWrapper = this.domelement.nativeElement;
        this.quizContainer = this.quizWrapper.querySelector('.quiz__container');
        this.quizStart = this.quizWrapper.querySelector('.quiz__start');
        this.questionContainer = this.domelement2.nativeElement;
        this.progressBar = this.domelement3.nativeElement;


        for (let index = 0; index < this.questionContainer.children.length; index++) {
            const element = this.questionContainer.children[index];
            this.questions[index].element = element;
        }

        this.sizeQuestionContainer();
        this.resizeFunc = this.sizeQuestionContainer.bind(this);
        try {
            window.addEventListener('load', this.resizeFunc);
            window.addEventListener('resize', this.resizeFunc);
            setTimeout(this.resizeFunc, 3000);
        } catch (e) {}


        const observer = new MutationObserver(this.resizeFunc);
        observer.observe(this.questionContainer, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    }

    ngOnDestroy() {
        try {
            window.removeEventListener('resize', this.resizeFunc);
        } catch (e) {}
    }
}
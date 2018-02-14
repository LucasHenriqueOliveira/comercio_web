import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'ng2-archwizard';

@Component({
    selector: 'app-gift',
    templateUrl: './gift.component.html',
    styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

    @ViewChild(WizardComponent) wizard: WizardComponent;

    constructor() { }

    ngOnInit() {
    }

    nextQuestion(question: any) {
        this.wizard.model.navigationMode.goToStep(question);
    }

}

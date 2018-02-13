import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    loading = false;
    spinner = false;
    message = '';

    constructor() { }

    ngOnInit() {
    }

    callWaiter() {
        this.loading = true;
        this.spinner = true;
        this.message = 'Estamos avisando o garçom! <br />Só um minuto que ele irá lhe atender...';
    }

    closeOrder() {
        this.loading = true;
        this.message = 'A sua conta está fechada! <br />Por favor, diriga-se ao caixa. <br /> Muito obrigado!';
    }

}

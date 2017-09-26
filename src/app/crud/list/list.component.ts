import { Component, OnInit } from "@angular/core";
import { Response } from "@angular/http";

import { Domain } from "../domain.model";
import { DomainService } from "../domain.service";

@Component({
    selector: 'app-domains-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    public domains: string[];

    constructor(private domainService: DomainService) {

    }

    ngOnInit() {
        this.domainService.getDomains()
            .subscribe((data) => {
                    this.domains = data;
            });
    }

}
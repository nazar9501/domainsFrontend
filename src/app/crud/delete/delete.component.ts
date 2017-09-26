import { Component, OnInit } from '@angular/core';
import { DomainService } from "../domain.service";
import { Domain } from "../domain.model";

@Component({
  selector: 'app-domains-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {
    
    DomainId: number = null;

    constructor(private domainService: DomainService) {}

    ngOnInit() {}

    public onDomainDelete(event) {
        this.domainService.deleteDomain(this.DomainId)
            .subscribe(
                (domainId: string) => {
                    this.DomainId;
                }
            );
    }

}
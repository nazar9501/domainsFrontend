import { Component, OnInit } from '@angular/core';
import { DomainService } from "../domain.service";
import { Domain } from "../domain.model";

@Component({
  selector: 'app-domains-update',
  templateUrl: './update.component.html'
})

export class UpdateComponent implements OnInit {

    DomainId: number = null;
    DomainName: string = null;
    
    constructor(private domainService: DomainService) {}

    ngOnInit() {}

    public onDomainUpdate(event) {
        let domain: Domain = new Domain(event.target.value, event.target.value);
        this.domainService.updateDomain(domain)
            .subscribe(
                (updatedDomain: Domain) => {
                    this.DomainId;
                    this.DomainName = ' ';
                    this.domainService.onDomainUpdated.emit(updatedDomain);
                }
            );
    }
  
}
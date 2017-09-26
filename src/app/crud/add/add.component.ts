import { Component, OnInit } from "@angular/core";
import { DomainService } from "../domain.service";
import { Domain } from "../domain.model";

@Component({
  selector: 'app-domains-add',
  templateUrl: './add.component.html'
})

export class AddComponent implements OnInit {

    addDomainValue: string = null;

    constructor(private domainService: DomainService) {}

    ngOnInit() {}

    public onDomainAdd(event) {
        let domain: Domain = new Domain(null, event.target.value);
        this.domainService.addDomain(domain)
            .subscribe(
                (newDomain: Domain) => {
                    this.addDomainValue = ' ';
                    this.domainService.onDomainAdded.emit(newDomain);
                }
            );
    }

}
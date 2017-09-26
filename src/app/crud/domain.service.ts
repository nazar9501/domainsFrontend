import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Domain } from "./domain.model";
import { EventEmitter, Injectable } from "@angular/core";
import "rxjs/Rx";

@Injectable()
export class DomainService {

    onDomainAdded = new EventEmitter<Domain>();
    onDomainUpdated = new EventEmitter<Domain>();

    constructor(private http: Http) {}

    getDomains(): Observable <any> {
        return this.http.get('/api/domains')
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }

    addDomain(domain: Domain) {
        return this.http.post('/api/domains/save', domain)
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }

    deleteDomain(domainId: number) {
        return this.http.delete('/api/domains/delete', domainId)
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }

    updateDomain(domain: Domain) {
        return this.http.put('/api/domains/update', domain)
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }

}
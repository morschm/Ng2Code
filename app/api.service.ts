import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';   // Need to import for toPromise function

@Injectable()
export class ApiService{
    // private makes the field and initializes it with whatever you pass through
    constructor(private http: Http){
        
    } 
    
    getWord(){
        return this.http.get('https://hangman-service.herokuapp.com/api')
                .map(data => data.json()).toPromise();
    }
}
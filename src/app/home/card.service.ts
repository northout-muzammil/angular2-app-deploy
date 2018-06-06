import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import * as _ from 'lodash';
import {Observable, Subject} from 'rxjs';


@Injectable()
export class CardService {
  private cardList = new Subject<any>();

  constructor(private http: HttpClient) {}

  cardList$: Observable<any> = this.cardList.asObservable();

  getCardList(value: boolean) {
    this.cardList.next( value);
  }

  getCards() {
    return this.http.get('https://testapp-e4d8f.firebaseio.com/card.json').pipe( map<any, any> (data => {
        return _.transform (data , function(result, value, key) {
          value['id'] = key;
          result.push(value);
          return result;
        }, []);
      })
    );
  }

  addCard(data) {
    return this.http.post('https://testapp-e4d8f.firebaseio.com/card.json', JSON.stringify(data) , { observe: 'response'});
  }

  updateCard(data) {
    return this.http.put('https://testapp-e4d8f.firebaseio.com/card/' + data.id + '.json', JSON.stringify(data) , { observe: 'response'});
  }

  deleteCard(id) {
    return this.http.delete('https://testapp-e4d8f.firebaseio.com/card/' + id + '.json', { observe: 'response'});
  }

}

import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { DbService } from '../../../db/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor( protected localStorage: LocalStorage, private dbService:DbService) {


    let user: {} = { firstName: 'Henri', lastName: 'Bergson' };
 
    this.localStorage.setItem('user', user).subscribe(() => {

      console.log('hey');

    });

    this.localStorage.removeItem('user').subscribe(() => {});

    this.localStorage.clear().subscribe(() => {});

  }

}

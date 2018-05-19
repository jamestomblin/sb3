import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() {

    console.log('yup');

    var importObject = { imports: { imported_func: arg => console.log(arg) } };

    WebAssembly.instantiateStreaming(fetch('./assets/optimized.wasm'), importObject)
    .then(obj => { var test = obj.instance.exports.add(1, 1); console.log(test)});

   }
}

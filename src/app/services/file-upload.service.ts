import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';

import { Web3Storage } from 'web3.storage';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }

  // Returns an observable
  upload(files: any): Observable<any> {

    const client = this.makeStorageClient()

    console.log(client)
    // return from("demo")
    return from(client.put(files));

  }

   getAccessToken () {

    return environment.IPFS_TOKEN;
  }

   makeStorageClient () {
    return new Web3Storage({ token: this.getAccessToken() })
  }


}

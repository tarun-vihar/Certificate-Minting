import { Injectable } from '@angular/core';
import { profile } from 'console';
import { removeAllListeners } from 'process';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { ABI_CONFIG } from '../constants/abi.cnst';
import { BLOCK_CHAIN_ADDRESS } from '../constants/block-chain-config';
import { DEFAULT_STUDENT_ACCOUNT, DEFAULT_UNIVERSITY_ACCOUNT, METAMASK_ADDRESS, MOCK_CERTIFICATES } from '../constants/proj.cnst';

import { StorageService } from './storage.service';
import { AnyGridOptions } from 'ag-grid-community';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  storageService: StorageService;

  address = BLOCK_CHAIN_ADDRESS;

  abi = ABI_CONFIG

  contract: any = null;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
    this.contract = this.getContract();
  }

  // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  web3: any;

  web3Provider: any = null;

 

  async connectToMetaMask() {
    let ethereum: any = window['ethereum'];
    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    if (ethereum) {
      this.web3Provider = ethereum;

      let address;

      try {
        address = await ethereum.request({ method: 'eth_requestAccounts' });
        this.storageService.setCookie('ACCOUNT_ADDRESS', address[0]);
      } catch (error) {
        console.error('User denied account access');
        throw Error('User denied account access');
       
      }

      return address[0];
    }
  }

  public getAllUniversities = async () => {
    try {
      const contract = await this.contract;
      let universities = await contract.methods.GET_ALL_UNIVERSITIES().call();
      universities.forEach((element: any) => {
        console.log(
          element.uni_name,
          element.university_wallet_address,
          element.whitelisted_accounts
        );
      });
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  async getContract() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      this.web3 = new Web3(window.ethereum);
      console.log(this.web3);
    } else {
      console.warn('No ethereum browser detected');
      return;
    }

    return new this.web3.eth.Contract(
      this.abi as unknown as AbiItem[],
      this.address
    );
  }

  async addNewUniversity(uni_name:string, university_id:number) {
    let account =
      this.storageService.getCookie(METAMASK_ADDRESS) ||
      DEFAULT_UNIVERSITY_ACCOUNT;
    // let currentUniversity = this.universities[this.counter++];
    // console.log(currentUniversity);
    console.log(this.contract);
    const contract = await this.contract;
    console.log(contract);
    return contract.methods
      .ADD_NEW_UNIVERSITY(uni_name, university_id)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }

  async addWhiteListAddressForUniversity(id: number, accountAddress: string) {
    let account = '0x59f3f2bdD8FE34a81C56502F0dCbB3eE4d016f33';
    const contract = await this.contract;
    console.log(contract)
    contract.methods
      .WHITELIST_ADDRESS_FOR_UNIVERSITY(id, accountAddress)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }

  async mintCertificate() {


    const university_id = 5;
    let account =
      this.storageService.getCookie(METAMASK_ADDRESS) ||
      DEFAULT_UNIVERSITY_ACCOUNT;
    const contract = await this.contract;

    console.log(account);
    console.log(contract);


    const certificateInfo = {
      student_info: {
        studentName: 'Tarun Vihar - 2023',
        studentId: '2023',
        program: 'Computer Science (CECS)',
        department: 'Engineering',
        studentEmail: 'tarunvihar21@gmail.com',
        studentWalletAddress: DEFAULT_STUDENT_ACCOUNT,
      },
      cgpa: '3.5',
      tenure: '4 years',
      graduationDate: '2022-05-31',
      issueDate: '2022-06-15',
      remarks: 'Excellent performance',
      certificateUri: 'https://bafybeieng6jojeuanytmxizqcbj5vng5jw6puuttndt34nsfbuuwsw3fky.ipfs.w3s.link/',
      certificateId: 0, // This value will be set by the smart contract.
      university_id: 1, // Replace with the ID of the university that is generating the certificate.
    };

    
    contract.methods
      .GENERATE_CERTIFICATE( certificateInfo,  university_id)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }

  async getWhitelistedAccounts(id: number) {
    const whiteListAcc = await this.contract.methods
      .GET_WHITELISTED_ACCOUNTS(id)
      .call();

    console.log(whiteListAcc);
  }

  async getBalanceOf(address: string) {
    const balance = await this.contract.methods.balanceOf(address).call();

    console.log(balance);
  }

  async getMYCertificate() {
    const contract = await this.contract;

    console.log(contract);
    const address = '0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1';
    const certificates = await contract.methods
      .GET_USER_CERTIFICATES(address)
      .call();

    return certificates;
  }

  async generateMultipleCertificates() {


    const university_id = 5;
    let account =
      this.storageService.getCookie(METAMASK_ADDRESS) ||
      DEFAULT_UNIVERSITY_ACCOUNT;
    const contract = await this.contract;

    contract.methods
    .GENERATE_MULTIPLE_CERTIFICATE( MOCK_CERTIFICATES,  university_id)
    .send({ from: account, gas: 2000000 })
    .then(console.log);

  }


   parseCertificateRequest(request: any, universityId: number): any {
    console.log(request)
    const { studentName, studentId, program, department, studentEmail, studentWalletAddress } = request;
    const { cgpa, tenure, graduationDate, issueDate, remarks ='', certificateUri = '', certificateId } = request;
    
    const student_info = {
      studentName,
      studentId,
      program,
      department,
      studentEmail,
      studentWalletAddress: studentWalletAddress,
    };
    
    return {
      student_info,
      cgpa,
      tenure,
      graduationDate,
      issueDate,
      remarks,
      certificateUri,
      certificateId,
      university_id: universityId,
    };
  }
  
}

import { Injectable } from '@angular/core';
import { profile } from 'console';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { ABI_CONFIG } from '../constants/abi.cnst';
import { BLOCK_CHAIN_ADDRESS } from '../constants/block-chain-config';

import { StorageService } from './storage.service';

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

  universities: string[] = [
    'ASU',
    'CSU',
    'NYU',
    'UC',
    'UIC',
    'StandFord',
    'Havard',
  ];

  counter = 0;

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
      this.storageService.getCookie('account') ||
      '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
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

  addWhiteListAddressForUniversity(id: number, accountAddress: string) {
    let account = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
    this.contract.methods
      .WHITELIST_ADDRESS_FOR_UNIVERSITY(id, accountAddress)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }

  async mintCertificate() {
    const student_name = 'Tarun Student-Cert2';
    const program = 'Masters';
    const issue_date = 'May 2023';
    const department = 'Computer Science';
    const contact_number = '7577030093';
    const cgpa = '3.8';
    const tenure = '4 years';
    const _certificate_uri =
      'https://bafybeieng6jojeuanytmxizqcbj5vng5jw6puuttndt34nsfbuuwsw3fky.ipfs.w3s.link/';
    const student_address = '0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1';
    const university_id = 0;

    let account =
      this.storageService.getCookie('account') ||
      '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
    const contract = await this.contract;

    console.log(account);
    console.log(contract);
    contract.methods
      .GENERATE_CERTIFICATE(
        student_name,
        program,
        issue_date,
        department,
        contact_number,
        cgpa,
        tenure,
        _certificate_uri,
        student_address,
        university_id
      )
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

    console.log(certificates);
  }
}

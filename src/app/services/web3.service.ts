import { Injectable } from '@angular/core';
import { profile } from 'console';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils'

import { StorageService } from './storage.service';

declare let window: any;

@Injectable({
  providedIn: 'root'
})



export class Web3Service {

  storageService: StorageService;

  address = '0xA7eBBE59A179DaAb35BAA8CbE8607031dFA6edf0'


  abi =  [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"NAME","type":"string"}],"name":"CERTIFICATE_GENERATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"NAME","type":"string"}],"name":"UNIVERSITY_ADDED","type":"event"},{"inputs":[{"internalType":"string","name":"UNI_NAME","type":"string"}],"name":"ADD_NEW_UNIVERSITY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_student_name","type":"string"},{"internalType":"string","name":"_program","type":"string"},{"internalType":"string","name":"_issue_date","type":"string"},{"internalType":"string","name":"_department","type":"string"},{"internalType":"string","name":"_contact_number","type":"string"},{"internalType":"string","name":"_cgpa","type":"string"},{"internalType":"string","name":"_tenure","type":"string"},{"internalType":"string","name":"_certificate_uri","type":"string"},{"internalType":"address","name":"_student_address","type":"address"},{"internalType":"uint256","name":"_uni_id","type":"uint256"}],"name":"GENERATE_CERTIFICATE","outputs":[{"internalType":"string","name":"message","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GET_ALL_UNIVERSITIES","outputs":[{"components":[{"internalType":"address","name":"university_wallet_address","type":"address"},{"internalType":"string","name":"uni_name","type":"string"},{"internalType":"address[]","name":"whitelisted_accounts","type":"address[]"}],"internalType":"struct SBT_TOKEN.UNIVERSITY[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GET_MY_CERTIFICATES","outputs":[{"components":[{"internalType":"string","name":"student_name","type":"string"},{"internalType":"string","name":"program","type":"string"},{"internalType":"string","name":"issue_date","type":"string"},{"internalType":"string","name":"department","type":"string"},{"internalType":"string","name":"contact_number","type":"string"},{"internalType":"string","name":"cgpa","type":"string"},{"internalType":"string","name":"tenure","type":"string"},{"internalType":"string","name":"remarks","type":"string"},{"internalType":"string","name":"certificate_uri","type":"string"},{"internalType":"uint256","name":"university_id","type":"uint256"}],"internalType":"struct SBT_TOKEN.CERTIFICATE[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user_wallet_address","type":"address"}],"name":"GET_USER_CERTIFICATES","outputs":[{"components":[{"internalType":"string","name":"student_name","type":"string"},{"internalType":"string","name":"program","type":"string"},{"internalType":"string","name":"issue_date","type":"string"},{"internalType":"string","name":"department","type":"string"},{"internalType":"string","name":"contact_number","type":"string"},{"internalType":"string","name":"cgpa","type":"string"},{"internalType":"string","name":"tenure","type":"string"},{"internalType":"string","name":"remarks","type":"string"},{"internalType":"string","name":"certificate_uri","type":"string"},{"internalType":"uint256","name":"university_id","type":"uint256"}],"internalType":"struct SBT_TOKEN.CERTIFICATE[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"GET_WHITELISTED_ACCOUNTS","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"whitelist_account","type":"address"}],"name":"WHITELIST_ADDRESS_FOR_UNIVERSITY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"give","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"take","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unequip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"universities","outputs":[{"internalType":"address","name":"university_wallet_address","type":"address"},{"internalType":"string","name":"uni_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userCertifacte","outputs":[{"internalType":"string","name":"student_name","type":"string"},{"internalType":"string","name":"program","type":"string"},{"internalType":"string","name":"issue_date","type":"string"},{"internalType":"string","name":"department","type":"string"},{"internalType":"string","name":"contact_number","type":"string"},{"internalType":"string","name":"cgpa","type":"string"},{"internalType":"string","name":"tenure","type":"string"},{"internalType":"string","name":"remarks","type":"string"},{"internalType":"string","name":"certificate_uri","type":"string"},{"internalType":"uint256","name":"university_id","type":"uint256"}],"stateMutability":"view","type":"function"}];

  contract: any = null;

 constructor(storageService: StorageService) {

    this.storageService = storageService
    this.contract =  this.getContract()
  }


  // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  web3 : any;

  web3Provider: any = null;

  

  universities: string[] = ['ASU', 'CSU', 'NYU', 'UC', 'UIC', 'StandFord', 'Havard']

  counter = 0;

  async connectToMetaMask() {

    let ethereum: any = window['ethereum']
    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    if (ethereum) {
      this.web3Provider = ethereum;

      let address;
      
      try {

        address = await ethereum.request({ method: 'eth_requestAccounts' });
        this.storageService.setCookie("account", address);
        // profile = await getProfileInformation();

      } catch (error) {

        console.error("User denied account access");

      }

      return address;

    }
  }



  public getAllUniversities = async () => {
    try {


    const contract = await this.contract;
     let universities = await contract.methods.GET_ALL_UNIVERSITIES().call()
      universities.forEach((element:any) => {
        console.log(element.uni_name, element.university_wallet_address, element.whitelisted_accounts)
      });

    }
    catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage)

    }
  }


  async getContract() {

    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      this.web3 = new Web3(window.ethereum);
      console.log(this.web3)
    } else {
      console.warn('No ethereum browser detected');
      return;
    }

     return new this.web3.eth.Contract(
      this.abi as unknown as AbiItem[],
      this.address
    );

    
  }


  async addNewUniversity() {

    let account =  this.storageService.getCookie("account") || '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
    let currentUniversity = this.universities[this.counter++];
    console.log(currentUniversity);
    console.log(this.contract)
    const contract = await this.contract;
    console.log(contract)
    contract.methods.ADD_NEW_UNIVERSITY(currentUniversity)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }


  addWhiteListAddressForUniversity(id: number, accountAddress: string) {

    let account = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
    this.contract.methods.WHITELIST_ADDRESS_FOR_UNIVERSITY(id, accountAddress)
      .send({ from: account, gas: 1000000 })
      .then(console.log);
  }


  async mintCertificate(){

    const student_name = "Tarun Student-Cert2";
    const program = "Masters";
    const issue_date = "May 2023";
    const department = "Computer Science";
    const contact_number = "7577030093";
    const cgpa = "3.8";
    const tenure = "4 years";
    const _certificate_uri = "https://bafybeieng6jojeuanytmxizqcbj5vng5jw6puuttndt34nsfbuuwsw3fky.ipfs.w3s.link/"
    const student_address ="0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1"
    const university_id = 0



    let account =  this.storageService.getCookie("account") || '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
    const contract = await this.contract;

    console.log(account);
    console.log(contract);
    contract.methods.GENERATE_CERTIFICATE(student_name,program, issue_date,department,contact_number,cgpa,tenure,_certificate_uri,student_address,university_id)
      .send({ from: account, gas: 1000000 })
      .then(console.log);


  }


  

  async getWhitelistedAccounts(id: number) {

    const whiteListAcc = await this.contract.methods.GET_WHITELISTED_ACCOUNTS(id).call();

    console.log(whiteListAcc)

  }

  async getBalanceOf(address: string) {

    const balance = await this.contract.methods.balanceOf(address).call();

    console.log(balance)

  }

  async getMYCertificate() {

    const contract = await this.contract;

    console.log(contract)
    const address = "0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1";
    const certificates = await contract.methods.GET_USER_CERTIFICATES(address).call();

    console.log(certificates)
  }




}



import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils'

declare let window: any;

@Injectable({
  providedIn: 'root'
})



export class Web3Service {

  
 address =  '0x5FbDB2315678afecb367f032d93F642f64180aa3'


  abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "NAME",
          "type": "string"
        }
      ],
      "name": "CERTIFICATE_GENERATED",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "NAME",
          "type": "string"
        }
      ],
      "name": "UNIVERSITY_ADDED",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "UNI_NAME",
          "type": "string"
        }
      ],
      "name": "ADD_NEW_UNIVERSITY",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_student_name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_student_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_course",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contact_number",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cgpa",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tenure",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certificate_uri",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_uni_id",
          "type": "uint256"
        }
      ],
      "name": "GENERATE_CERTIFICATE",
      "outputs": [
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "GET_ALL_CERTIFICATES",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "student_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "course",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contact_number",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "cgpa",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tenure",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "certificate_uri",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "certificate_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "university_id",
              "type": "uint256"
            }
          ],
          "internalType": "struct SBT_TOKEN.CERTIFICATE[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "GET_ALL_UNIVERSITIES",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "uni_owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "uni_name",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "whitelisted_accounts",
              "type": "address[]"
            }
          ],
          "internalType": "struct SBT_TOKEN.UNIVERSITY[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "GET_WHITELISTED_ACCOUNTS",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "whitelist_account",
          "type": "address"
        }
      ],
      "name": "WHITELIST_ADDRESS_FOR_UNIVERSITY",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "certificates",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "student_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "contact_number",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "cgpa",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tenure",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "certificate_uri",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "certificate_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "university_id",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMYCertificate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "student_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "course",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contact_number",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "cgpa",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tenure",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "certificate_uri",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "certificate_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "university_id",
              "type": "uint256"
            }
          ],
          "internalType": "struct SBT_TOKEN.CERTIFICATE[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "give",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "take",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "unequip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "universities",
      "outputs": [
        {
          "internalType": "address",
          "name": "uni_owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uni_name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  constructor() {

    this.getContract()
   }

  
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

  web3Provider:any = null;

  contract: any = null;

  universities: string[] = ['ASU', 'CSU', 'NYU', 'UC', 'UIC', 'StandFord','Havard']

  counter = 0;

  connectToMetaMask(){

      let ethereum : any = window['ethereum']
      if (typeof ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
      if (ethereum) {
        this.web3Provider = ethereum;
        try {
          // Request account access
          ethereum.request({ method: 'eth_requestAccounts' }).then( (address:any) => {
            console.log("Account connected: ", address); // Account address that you had imported
          });
        } catch (error) {
          // User denied account access...
          console.error("User denied account access");
        }

        
      }
    }



    public getAllCertificates = async () => {
      try {


            
              // const token = await contract.methods.owner().call();
              // console.log("token",token)

              // 
            
           


             
         

             let universities = await this.contract.methods.GET_ALL_UNIVERSITIES().call()

             console.log(universities)

          
      }
      catch (error:any) {
          const errorMessage = error.message;
          console.log(errorMessage)
     
      }
  }


  getContract(){


         this.contract = new this.web3.eth.Contract(
          this.abi as unknown as AbiItem [],
          this.address
      );

  
  }


  addNewUniversity(){

     let account = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
             this.contract.methods.ADD_NEW_UNIVERSITY(this.universities[this.counter++])
            .send({ from: account, gas: 1000000 })
            .then(console.log);
  }


  async getAllUniversities(){

    const regiteredUniversites = await this.contract.methods.GET_ALL_UNIVERSITIES().call();

    console.log(regiteredUniversites)

  }

 

  
}



import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class WalletService {
    ethereum: any;

    constructor() {
       const { ethereum } = <any>window
       this.ethereum = ethereum
    }

    // Check whether ethereum installed on browser.
    public isMetamaskInstalled() {
        return !!this.ethereum
    }

    // Connect to a wallet
    public async connectWallet() {
        try {
            if(!this.ethereum) {
                console.error('Please install metamask')
                return;
            }
            const accounts = await this.ethereum.request({ 
                method: 'eth_requestAccounts'
            })
            return {status: true, message: '', accounts}
        }catch(e: any) {
            console.error('No ethereum object found');
            return {status: false, message: e.message,accounts: []}
        }
    }

    // Check whether any wallet connected to app or not.
    public async checkWalletConnected() {
        try {
            if(!this.ethereum) {
                console.error('Please install metamask')
                return;
            }

            const accounts = await this.ethereum.request({
                method: 'eth_accounts'
            })
            return {
                status: true,
                message: '',
                accounts
            }
        }catch(e: any) {
            console.log("e: ", e)
            console.error('No ethereum object found');
            return {status: false, message: e.message, accounts: []}
        }
    }

    // Get the connected wallet ID.
    public async getWalletId() {
        try {
            if(!this.ethereum) {
                console.error('Please install metamask')
                return;
            }

            const accounts = await this.ethereum.request({
                method: 'eth_accounts'
            })
            return accounts && accounts.length > 0 ? accounts[0] : ''
        }catch(e) {
            throw new Error('No ethereum object found');
        }
    }
}
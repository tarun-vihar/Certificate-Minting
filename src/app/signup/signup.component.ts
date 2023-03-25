import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { StorageService } from "src/app/services/storage.service";
import { Web3Service } from "../services/web3.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router,
    private web3Service: Web3Service
  ) {}

  universityDetailsForm: any;

  errorMessage: string = '';

  isUniversityRegistrationSuccess: boolean = true;

  isConnectionFailed: boolean = false;



  ngOnInit(): void {
    this.universityDetailsForm = this.fb.group({
      universityName: ["", Validators.required],
      universityEmail: ["", [Validators.required, Validators.email]],
      universityCode: [""],
      universityAddress: [""],
    });

    try{
      this.web3Service.connectToMetaMask();

    } catch(err: any) {
      console.warn('error: ', err);
      this.isConnectionFailed = true;
      this.errorMessage = err.message;
    }
    
  }

  registerUniversity(data: any) {
    data["universityWalletAddress"] =
      this.storageService.getCookie("ACCOUNT_ADDRESS");
    this.apiService.universitySignUp(data).subscribe({
      next: (data) => {
        this.isUniversityRegistrationSuccess = true;
        // this.web3Service.addNewUniversity()
        console.log(data);
      },
      error: (error) => {
        this.isUniversityRegistrationSuccess = false;
        console.log("api failed: ", error);
        this.errorMessage = error.message;

      },
      complete: () => {
        console.log("university signup call completed");
      },
    });
  }

  redirectToLogin() {
    this.router.navigateByUrl("/auth/login");
  }
}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { ReplaySubject, Subject, take, takeUntil } from "rxjs";
import {
  MOCK_CERTIFICATES,
  MOCK_UNIVERSITIES_LIST,
} from "src/app/constants/proj.cnst";
import { Web3Service } from "src/app/services/web3.service";

export interface University {
  universityCode: string;
  universityName: string;
}
@Component({
  selector: "app-verify-certificate",
  templateUrl: "./verify-certificate.component.html",
  styleUrls: ["./verify-certificate.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyCertificateComponent implements OnInit, OnDestroy {
  certificateDetailsForm: any;

  showCertificateDetails: boolean = false;

  certificateDetails: any = MOCK_CERTIFICATES[0];

  errorMessages: Record<string, string[]> = {
    studentId: [],
    certificateId: [],
    universityName: [],
  };

  /** list of universities */
  public universities: University[];
  /** control for the selected university */
  public universityCtrl = new FormControl(null);

  /** control for the MatSelect filter keyword */
  public universityFilterCtrl = new FormControl("");

  /** list of universities filtered by search keyword */
  public filteredUniversities: ReplaySubject<University[]> = new ReplaySubject<
    University[]
  >(1);

  /** Subject that emits when the component has been destroyed. */
  public _onDestroy = new Subject<void>();

  constructor(private fb: FormBuilder, private web3Service: Web3Service) {}

  ngOnInit(): void {
    // api call to get the list of universities
    this.universities = MOCK_UNIVERSITIES_LIST;

    this.certificateDetailsForm = this.fb.group({
      studentId: ["", Validators.required],
      certificateId: ["", Validators.required],
      studentWalletAddress: [""],
      universityName: ["", Validators.required],
    });

    // load the initial university list
    this.filteredUniversities.next(this.universities.slice());

    // listen for search field value changes
    this.universityFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  filterBanks() {
    if (!this.universities) {
      return;
    }
    // get the search keyword
    let search = this.universityFilterCtrl.value;
    if (!search) {
      this.filteredUniversities.next(this.universities.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the universities
    this.filteredUniversities.next(
      this.universities.filter(
        (university) =>
          university.universityName.toLowerCase().indexOf(search) > -1
      )
    );
  }

  async verifyCertificate() {
    console.log("certificate details: ", this.certificateDetailsForm.value);

    let certificates: any = await this.web3Service.getMYCertificate();

    console.log("certiifcates: ", certificates);
    let filterCertificate = certificates.filter((certificate: any) => {
      if (
        certificate.certificateId ===
        this.certificateDetailsForm.value.certificateId
      ) {
        console.log("certificate: ", certificate);
        this.showCertificateDetails = true;
        this.certificateDetails = certificate;
      }
    });

    console.log(filterCertificate);
    // // this.certificateDetailsForm.reset();

    // api call to check it is valid certificate or not
  }

  isInvalidControl(controlName: string): boolean {
    const isInvalid =
      (this.certificateDetailsForm.controls[controlName].touched ||
        this.certificateDetailsForm.controls[controlName].touched) &&
      this.certificateDetailsForm.controls[controlName].invalid;

    if (isInvalid && this.certificateDetailsForm.controls[controlName].errors) {
      switch (true) {
        case this.certificateDetailsForm.controls[controlName].errors.required:
          const errMessage = `${controlName} is required`;
          !this.errorMessages[controlName].includes(errMessage) &&
            this.errorMessages[controlName].push(errMessage);
      }
    } else {
      this.errorMessages[controlName] = [];
    }
    // console.log('** erroMessages: ', this.errorMessages);
    return isInvalid;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}

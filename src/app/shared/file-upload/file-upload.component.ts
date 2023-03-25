import { Component, OnInit } from "@angular/core";
import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  files!: File;
  isFileSelected: boolean = true;

  // Inject service
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    this.files = event.target.files;
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.files);
    this.fileUploadService.upload(this.files).subscribe((CID: string) => {
      if (!!CID) {
        console.log(CID);
        // Short link via api response
        this.shortLink = CID;
        console.log(CID);
        this.loading = false; // Flag variable
      }
    });
  }
}

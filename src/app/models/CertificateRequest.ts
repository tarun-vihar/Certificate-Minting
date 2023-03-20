interface CerticateRequest extends StudentRequest {
    cgpa: string;
    tenure?: string;
    graduationDate: string;
    issueDate?: string;
    remarks?: string;
    certificate_uri?: string;
    program?: string
  }
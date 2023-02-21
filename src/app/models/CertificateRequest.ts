interface CerticateRequest extends StudentRequest {
    cgpa: string;
    tenure?: string;
    graduationDate: string;
    issueDate?: string;
  }
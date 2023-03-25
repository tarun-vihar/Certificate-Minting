interface CerticateRequest extends StudentRequest  {

  studentInfo: StudentRequest;
  cgpa: string;
  tenure?: string;
  graduationDate: string;
  issueDate?: string;
  remarks?: string;
  certificateUri?: string;
  certificateId?: number;
  
}
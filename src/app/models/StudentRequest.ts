interface StudentRequest {
  studentId: string;
  studentEmail: string;
  studentName: string;
  program: string;
  department: string;
  studentWalletAddress? : string;
  universityId: number;
  error? : string
}
export const AUTH_COOKIE_KEY = 'user_info';

export const METAMASK_ADDRESS = 'metamask_address';

export const DEFAULT_UNIVERSITY_ACCOUNT = "0x59f3f2bdd8fe34a81c56502f0dcbb3ee4d016f33";

export const DEFAULT_STUDENT_ACCOUNT = "0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1";

export const DEFAULT_STUDENT_ACCOUNT_2 = "0xc306f9980E1624Ca6Ba0C8DF86dCb3AE2D58C7F3";
//

export const DEFAULT_ROUTE_FOR_ROLE: any = {
  university: ['', 'home', 'university'],
  student: ['', 'home', 'student'],
  staff: ['', 'home', 'university'],
  admin: ['', 'home', 'admin']
}

export const NAVIGATION = [
  {
    label: 'Certificate Minting',
    url: ['', 'home', 'university', 'certificate-minting'],
    show: ['university', 'staff']
  },
  {
    label: 'Student Registration',
    url: ['', 'home', 'university', 'student-registration'],
    show: ['university', 'staff']
  },
  {
    label: 'Staff Registration',
    url: ['', 'home', 'university', 'staff-registration'],
    show: ['university']
  },
  {
    label: 'Verify Certificates',
    url: ['', 'home', 'university', 'verify-certificate'],
    show: ['university', 'staff']
  },
  {
    label: 'View Certificates',
    url: ['', 'home', 'student', 'certificates'],
    show: ['student']
  }
]

// MOCK DATA
export const MOCK_UNIVERSITY_LOGIN_RESPONSE = {
  role: 'university',
  name: 'CSUN',
  university: ''
}
export const MOCK_STUDENT_LOGIN_RESPONSE = {
  role: 'student',
  name: 'Tarun'
}
export const MOCK_ADMIN_LOGIN_RESPONSE = {
  role: 'admin',
  name: 'Admin'
}
export const MOCK_STAFF_LOGIN_RESPONSE = {
  role: 'staff',
  name: 'Edward'
}
export const MOCK_CERTIFICATES = [

  {
    student_info: {
      studentName: 'Tarun Vihar ',
      studentId: '2023',
      program: 'Computer Science (Master Science)',
      department: 'Engineering',
      studentEmail: 'tarunvihar21@gmail.com',
      studentWalletAddress: DEFAULT_STUDENT_ACCOUNT,
    },
    cgpa: '3.5',
    tenure: '2 years',
    graduationDate: '2023-05-31',
    issueDate: '2023-06-15',
    remarks: 'Excellent performance',
    certificateUri: 'https://bafybeieng6jojeuanytmxizqcbj5vng5jw6puuttndt34nsfbuuwsw3fky.ipfs.w3s.link/',
    certificateId: 0, // This value will be set by the smart contract.
    university_id: 1, // Replace with the ID of the university that is generating the certificate.
  },

  {
    student_info: {
      studentName: 'Tarun Vihar',
      studentId: '202559883',
      program: 'Computer Science (Bachelor of Science)',
      department: 'Engineering',
      studentEmail: 'tarunvihar21@gmail.com',
      studentWalletAddress: DEFAULT_STUDENT_ACCOUNT_2,
    },
    cgpa: '3.8',
    tenure: '5 years',
    graduationDate: '2019-05-31',
    issueDate: '2019-06-15',
    remarks: 'Excellent performance',
    certificateUri: 'https://bafybeieng6jojeuanytmxizqcbj5vng5jw6puuttndt34nsfbuuwsw3fky.ipfs.w3s.link/',
    certificateId: 1, // This value will be set by the smart contract.
    university_id: 5, // Replace with the ID of the university that is generating the certificate.
  },


]

export const MOCK_UNIVERSITIES_LIST = [
  { universityName: 'CSUN', universityCode: 'A' },
  { universityName: 'CSUF', universityCode: 'B' },
  { universityName: 'CSU LA', universityCode: 'C' },
  { universityName: 'UC LA', universityCode: 'D' },
  { universityName: 'UC Irvine', universityCode: 'E' },
  { universityName: 'UC San Diego', universityCode: 'F' },
  { universityName: 'StandFord', universityCode: 'G' },
  { universityName: 'Haward', universityCode: 'H' },
  { universityName: 'MIT', universityCode: 'I' },
  { universityName: 'NYU', universityCode: 'J' },
  { universityName: 'NEU, Boston', universityCode: 'K' },
  { universityName: 'UF', universityCode: 'L' },
  { universityName: 'University of Cincinati', universityCode: 'M' },

];

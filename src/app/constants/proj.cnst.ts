export const AUTH_COOKIE_KEY = 'user_info';

export const METAMASK_ADDRESS = 'metamask_address';

export const DEFAULT_UNIVERSITY_ACCOUNT = "0x59f3f2bdd8fe34a81c56502f0dcbb3ee4d016f33";

export const DEFAULT_STUDENT_ACCOUNT = "0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1";

export const DEFAULT_ROUTE_FOR_ROLE: any = {
    university: ['', 'home', 'university'],
    student: ['', 'home', 'student'],
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
export const MOCK_STAFF_LOGIN_RESPONSE = {
    role: 'staff',
    name: 'Edward'
}
export const MOCK_CERTIFICATES = [
]

export const MOCK_UNIVERSITIES_LIST = [
    {universityName: 'University A (Switzerland)', universityCode: 'A'},
    {universityName: 'University B (Switzerland)', universityCode: 'B'},
    {universityName: 'University C (France)', universityCode: 'C'},
    {universityName: 'University D (France)', universityCode: 'D'},
    {universityName: 'University E (France)', universityCode: 'E'},
    {universityName: 'University F (Italy)', universityCode: 'F'},
    {universityName: 'University G (Italy)', universityCode: 'G'},
    {universityName: 'University H (Italy)', universityCode: 'H'},
    {universityName: 'University I (Italy)', universityCode: 'I'},
    {universityName: 'University J (Italy)', universityCode: 'J'},
    {universityName: 'University Kolombia (United States of America)', universityCode: 'K'},
    {universityName: 'University L (Germany)', universityCode: 'L'},
    {universityName: 'University M (Germany)', universityCode: 'M'},
    {universityName: 'University N (Germany)', universityCode: 'N'},
    {universityName: 'University O (Germany)', universityCode: 'O'},
    {universityName: 'University P (Germany)', universityCode: 'P'},
    {universityName: 'University Q (Germany)', universityCode: 'Q'},
    {universityName: 'University R (Germany)', universityCode: 'R'}
  ];
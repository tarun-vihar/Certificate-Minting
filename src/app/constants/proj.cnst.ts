export const AUTH_COOKIE_KEY = 'user_info';

export const METAMASK_ADDRESS = 'metamask_address';

export const DEFAULT_UNIVERSITY_ACCOUNT = "0x59f3f2bdd8fe34a81c56502f0dcbb3ee4d016f33";

export const DEFAULT_STUDENT_ACCOUNT = "0x906eCA9De9EB678b6aa4EB263Bf539102B2d37a1";

export const DEFAULT_ROUTE_FOR_ROLE: any = {
    university: ['', 'home', 'university'],
    student: ['', 'home', 'student']
}

export const NAVIGATION = [
    {
        label: 'Certificate Minting', 
        url: ['', 'home', 'university', 'certificate-minting'],
        show: ['university']
    },
    {
        label: 'Student Registration',
        url: ['', 'home', 'university', 'student-registration'],
        show: ['university']
    },
    {
        label: 'Staff Registration',
        url: ['', 'home', 'university', 'staff-registration'],
        show: ['university']
    },
    {
        label: 'Verify Certificates',
        url: ['', 'home', 'university', 'verify-certificate'],
        show: ['university']
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
export const MOCK_CERTIFICATES = [
]
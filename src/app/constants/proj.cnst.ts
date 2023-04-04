export const AUTH_COOKIE_KEY = 'user_info';

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
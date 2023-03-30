export interface User {
    token: string
    personalDetails :PersonalDetails
}



export interface PersonalDetails {
    name: string
    Team: string;
    joinedAt: string;
    avatar: string
}
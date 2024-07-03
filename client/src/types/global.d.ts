export interface Driver {
    id: string | number,
    firstName: string,
    lastName: string,
    dob: Date,
    nationality: string,
    description: string,
    image: string,
    teams: string[]
}

export interface Team {
    id: string | number,
    name: string
}
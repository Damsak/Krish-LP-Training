export interface Pet {
    id: string,
    name: string,
    type: string,
    condition: string,
    age: number,
    location:locationType
}

export enum locationType {
    KANDY = 'KANDY',
    COLOMBO = 'COLOMBO',
    KURUNEGALA = 'KURUNEGALA',
    GALLE = 'GALLE',
}



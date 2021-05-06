export interface Client {
    clientType: ClientType;
    name: string;
    lastName1?: string;
    lastName2?: string;
    identificationType: IdentificationType;
    identification: string;
    birthdate?: string;
    gender?: Gender;
    vip?: boolean;
    phoneNumber?: string
    email?: string;
    address?: string;
    city?: string;
    zipCode?: number;
    province?: string;
    observation?: string;
    representative?: Representative
}


export enum ClientType {
    P, //Persona
    E  //Empresa
}

export enum IdentificationType {
    P, //Pasaporte
    C, //CIF
    N, //NIF
    T, //NIE
}

export enum Gender {
    F, //Mujer
    M //Hombre
}

export interface Representative {
    name: string;
    lastName1: string;
    lastName2: string;
    identificationType: IdentificationType;
    identification: string;
    phoneNumber?: string
    email?: string;
}

export enum MusicStatus {
    APRENDER = 'Aprender',
    APRENDENDO = 'Aprendendo',
    APRENDIDO = 'Aprendido'
}

export interface Band {
    id: number;
    name: string;
    userId: string;
}

export interface Music {
    id: number;
    title: string;
    bandId: number;
    status: MusicStatus;
    userId: string;
}

export interface User {
    id: string;
    name: string | null;
    email: string;
}
export enum MusicStatus {
    APRENDER = 'Aprender',
    APRENDENDO = 'Aprendendo',
    APRENDIDO = 'Aprendido'
}

export interface Band {
    id: number;
    name: string;
}

export interface Music {
    id: number;
    title: string;
    bandId: number;
    status: MusicStatus;
}
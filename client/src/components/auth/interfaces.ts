
export interface IAuthForm {
    title: string
    children: React.ReactNode
};

export type IErrors = Record<string, any>;

export type IAuthErrors = IErrors | null;
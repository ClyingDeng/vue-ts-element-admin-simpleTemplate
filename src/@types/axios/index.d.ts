import { AxiosInstance, AxiosRequestConfig } from 'axios';
declare global {
    let AxiosInst: () => MKAxios;
}
export interface MKAxiosConfig {
    usesbp: boolean;
    config?: AxiosRequestConfig;
}
export interface MKAxiosStatic {
    Initialize(mkcfg?: MKAxiosConfig): void;
}
export declare class MKAxios implements MKAxiosStatic {
    static InstStatic: MKAxios;
    constructor();
    private usesbp;
    private _inst;
    readonly inst: AxiosInstance;
    Initialize(mkcfg?: MKAxiosConfig): void;
}
declare const AxiosInstStatic: () => AxiosInstance;
export default AxiosInstStatic;

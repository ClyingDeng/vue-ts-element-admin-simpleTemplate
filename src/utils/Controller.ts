import AxiosHelper from '@/server/helper/axiosHelper';
import PublicGet from './PublicGet';

export default class DataController {
    public static getUrl<T>(url: string, params: object): Promise<T> {
        return new Promise((fulfill, reject) => {
            AxiosHelper.Get(url + '?' + PublicGet.GetString(params))
                .then((res) => {
                    fulfill(<any> res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    public static GetUrlNoParam<T>(url: string): Promise<T> {
        return new Promise((fulfill, reject) => {
            AxiosHelper.Get(url)
                .then((res) => {
                    fulfill(<any> res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    public static PostUrl<T>(url: string, data?: any): Promise<T> {
        return new Promise((fulfill, reject) => {
            AxiosHelper.Post(url, data)
                .then((res) => {
                    fulfill(<any> res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

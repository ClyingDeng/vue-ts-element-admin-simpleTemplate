import AxiosHelper from '@/server/helper/axiosHelper';
import PublicGet from '@/siteScript/PublicGet';

export default class HomeController {
  public static getUrl<T>(url: string, params: object): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Get(
        '/yzzy-pcs-jwtsp/v1' + url + '?' + PublicGet.GetString(params)
      )
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  public static GetKey<T>(url: string): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Get(url)
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public static PostUrl<T>(url: string, data?: any): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Post(url, data)
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  public static PutUrl<T>(url: string, data?: any): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Put(url, data)
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  public static PutUrlHeader<T>(url: string, data?: any): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Put(url + '?' + PublicGet.GetString(data))
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public static DeleteUrlHeader<T>(url: string, data?: any): Promise<T> {
    return new Promise((fulfill, reject) => {
      AxiosHelper.Delete(url + '?' + PublicGet.GetString(data))
        .then(res => {
          fulfill(<any> res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

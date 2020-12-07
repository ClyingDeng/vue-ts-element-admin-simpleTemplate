// tslint:disable-next-line: no-var-requires
export default class Config {
  static get isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  static get RequestInfoUrl() {
    return this.isDevelopment
    ? process.env.VUE_APP_BASE_API
    : process.env.VUE_APP_BASE_API;
  }
}

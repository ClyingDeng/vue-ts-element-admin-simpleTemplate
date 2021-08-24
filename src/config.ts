// tslint:disable-next-line: no-var-requires
export default class Config {
  static get isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  static get RequestInfoUrl() {
    return this.isDevelopment
      ? (<any> window).VUE_APP_DEV_BASE_API
      : (<any> window).VUE_APP_BUILD_BASE_API;
  }
}

export default class JsonToGet {
  public static GetString(data: any) {
    let tempArr = [];
    // tslint:disable-next-line: forin
    for (let i in data) {
      let key = encodeURIComponent(i);
      let value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    let urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  }
}

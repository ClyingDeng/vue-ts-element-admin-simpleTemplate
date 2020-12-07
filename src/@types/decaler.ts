export interface DutyType<S> {
  uuid: S;
  area?: S;
  name?: S;
  mobile?: S;
}
export interface AddDutyType<S> {
  area?: S;
  name: S;
  mobile?: S;
}
export interface JQType {
  id: string;
  date: string;
  time: string;
  type: string;
  detail: string;
  gradeName: string;
  address: string;
  lon: string;
  lat: string;
  jqlxmc: string;
  isDeal?: string;
  area: string;
}
export interface FBType {
  id: string;
  date: string;
  time: string;
  desc: string;
  updateTime?: string;
  personLiable: string;
  area: string;
}
export interface Actual {
  area?: string; // 辖区代码
  fw: number; // 房屋
  dw: number; // 单位
  rk: number; // 人口
  updateTime?: string;
}
export interface Age {
  area?: string; // 辖区代码
  sn: number; // 房屋
  qn: number; // 单位
  zn: number; // 人口
  ln: number; // 人口
  updateTime?: string;
}
export interface Education {
  area?: string; // 辖区代码
  bkys: number; // 房屋
  gzxl: number; // 单位
  gzyx: number; // 人口
  updateTime?: string;
}
export interface XQData {
  area?: string; // 辖区代码
  populationTotal: number; // 人口数
  vehicleTotal: number; // 车辆数
  updateTime?: string;
}
export interface XQALData {
  time: string; // 辖区代码
  enterCarData: number;
  leaveCarData: number;
  enterPeopleData: number;
  leavePeopleData: number;
}
export interface Weather {
  id?: string;
  area?: string; // 辖区代码
  weather: string;
  windDirection: string;
  windPower: string;
  humidity: string;
  temperature: string;
  updateTime?: string;
}


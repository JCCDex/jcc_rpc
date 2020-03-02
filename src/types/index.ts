declare interface IResponse {
  result: boolean;
  code?: string;
  data?: any;
  date?: Date;
  msg: string;
  port?: number;
  host?: string;
}

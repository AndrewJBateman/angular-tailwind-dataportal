/**
 * StatusNotification is an enum representing the possible status notifications for a State object.
 * It can have values of OK, ERROR, or INIT.
 */
export enum StatusNotification {
  OK,
  ERROR,
  INIT,
}

export class State<T> {
  value?: T;
  error?: any;
  status: StatusNotification;

  constructor(status: StatusNotification, value?: T, error?: any) {
    this.value = value;
    this.error = error;
    this.status = status;
  }
}

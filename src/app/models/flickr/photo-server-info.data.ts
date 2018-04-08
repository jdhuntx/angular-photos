export class PhotoServerInfo {
  id: string;
  secret: string;
  server: string;
  farm: number;

  constructor(id: string, secret: string, server: string, farm: number) {
    this.id = id;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
  }
}

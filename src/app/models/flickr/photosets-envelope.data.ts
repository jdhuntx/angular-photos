export class PhotosetsEnvelope<T> {
  stat: string;
  data: T;

  constructor(result: any) {
    this.stat = result.stat;
    this.data = result.photosets;
  }
}

export class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

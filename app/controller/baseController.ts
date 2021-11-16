import { Controller } from "egg";

class BaseController extends Controller {

  success(data, status?) {
    this.ctx.body = {code: 200, data}
    this.ctx.status = status ?? 200
  }

  fail(data, status?) {
    this.ctx.body = {code: 0, data}
    this.ctx.statut = status ?? 0
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

export default BaseController;
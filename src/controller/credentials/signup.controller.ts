import { NextFunction, Request, Response } from 'express';
import { SignupRequest } from '@interfaces/credentials.interface';
import { onlyNumbers } from '../../utils';
import signupBusiness from '../../business/credentials/signup.business';
export class SignupController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req || {};
      const request: SignupRequest = {
        name: body?.name?.toUpperCase()?.trim(),
        last_name: body?.last_name?.toUpperCase()?.trim(),
        document: body?.document ? onlyNumbers(body?.document) : '',
        email: body?.email?.trim(),
        cellphone: body?.cellphone ? onlyNumbers(body?.cellphone) : '',
        tellphone: body?.tellphone ? onlyNumbers(body?.tellphone) : '',
      };

      await signupBusiness.execute(request);

      res.send(request);
    } catch (error) {
      next(error);
    }
  }
}

export default new SignupController();

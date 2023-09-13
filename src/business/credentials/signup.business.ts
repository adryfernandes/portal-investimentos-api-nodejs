import { SignupRequest } from '@interfaces/credentials.interface';
import {
  validateCellphone,
  validateDocument,
  validateEmail,
  validateTellphone,
} from '../../utils/validates';
import { UserEntity } from '../../database/entities/user.entity';
import { UserRepository } from '../../database/repositories/user.repository';
import { ValidateError } from '../../errors';

class SignupBusiness {
  constructor(private _userRepository: UserRepository) {}

  async execute(request: SignupRequest) {
    this.validateBody(request);

    const userWithSameDocument: UserEntity = await this._userRepository.findByDocument(
      request.document
    );
    if (userWithSameDocument !== null) {
      throw new ValidateError('Documento já cadastrado.', 'XXX');
    }

    const userWithSameEmail: UserEntity = await this._userRepository.findByEmail(request.email);
    if (userWithSameEmail !== null) {
      throw new ValidateError('Email já cadastrado.', 'XXX');
    }
  }

  private validateBody(request: SignupRequest) {
    if (!request.name) {
      throw new ValidateError('O nome é obrigratório.', 'XXX');
    }
    if (!request.last_name) {
      throw new ValidateError('O sobrenome é obrigratório.', 'XXX');
    }
    if (!request.document) {
      throw new ValidateError('O CPF é obrigratório.', 'XXX');
    }
    if (!validateDocument(request.document)) {
      throw new ValidateError('O CPF está inválido.', 'XXX');
    }
    if (!request.email) {
      throw new ValidateError('O e-mail é obrigatório.', 'XXX');
    }
    if (!validateEmail(request.email)) {
      throw new ValidateError('O e-mail está inválido.', 'XXX');
    }
    if (request.cellphone && !validateCellphone(request.cellphone)) {
      throw new ValidateError('O celular está inválido.', 'XXX');
    }
    if (request.tellphone && !validateTellphone(request.tellphone)) {
      throw new ValidateError('O celular está inválido.', 'XXX');
    }
  }
}

export default new SignupBusiness(new UserRepository());

import { GENERIC_ERROR } from '../utils/constantes';

/**
 * Classe customizada para erros 500 ( Exceptions )
 * Sua mensagem é sempre a mesma
 *
 * Seu construtor possui:
 *      trace: Código de erro para restreio ao debuggar
 *      stack: Caminho do erro
 */
export class ExceptionError extends Error {
  public statusCode = 500;

  constructor(public trace: string, public stack?: any) {
    super(GENERIC_ERROR);
  }
}

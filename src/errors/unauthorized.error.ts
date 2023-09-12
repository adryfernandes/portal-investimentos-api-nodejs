/**
 * Classe customizada para erros 401 ( unauthorized )
 * Sua mensagem é sempre a mesma
 */
export class UnauthorizedError extends Error {
  public statusCode = 401;

  constructor(public trace: string) {
    super('Ação não autorizada.');
  }
}

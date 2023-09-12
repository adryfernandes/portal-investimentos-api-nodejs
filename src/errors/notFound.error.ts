/**
 * Classe customizada para erros 404 ( Not Found )
 *  *
 * Seu construtor possui:
 *      message: Mensagem mostrado no erro
 *      trace: Código de erro para restreio ao debuggar
 *      stack: Caminho do erro ( opcional )
 */
export class NotFoundError extends Error {
  public statusCode = 404;

  constructor(public message: string, public trace: string, public stack: any = undefined) {
    super(message);
  }
}

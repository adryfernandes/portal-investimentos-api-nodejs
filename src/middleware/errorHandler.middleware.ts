import { Response, Request, NextFunction } from 'express';
import { ExceptionError, NotFoundError, ValidateError, UnauthorizedError } from '../errors';
import { GENERIC_ERROR } from '../utils/constantes';

// Último código de erro: ASC0268
export const errorHandlerMiddleware = async (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Erros controlados
  if (
    err instanceof ValidateError ||
    err instanceof NotFoundError ||
    err instanceof UnauthorizedError ||
    err instanceof ExceptionError
  ) {
    return res.status(err.statusCode).json({
      message: err.message,
      trace: err.trace,
    });
  }

  // Erro não controlado
  const message = {
    message: GENERIC_ERROR,
    trace: 'ERR0001',
    stack: (err as Error)?.stack,
  };

  return res.status(500).json(message);
};

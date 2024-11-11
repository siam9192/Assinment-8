import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import AppError from '../Errors/AppError';
import config from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TRole } from '../modules/user/user.interface';
import User from '../modules/user/user.model';

function auth(...requiredRoles: TRole[]) {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    }

    const { role, id, iat } = decoded;

    // checking if the user is exist
    const user = await User.findById(id);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    // checking if the user is already deleted
    if (user.deleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted ! !');
    }

    // checking if the user is blocked

    if (user.blocked) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
    }

    // if (
    //   user.passwordChangedAt &&
    //   User.isJWTIssuedBeforePasswordChanged(
    //     user.passwordChangedAt,
    //     iat as number,
    //   )
    // ) {
    //   throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
    // }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized  !');
    }

    req.user = decoded as { id: string; role: TRole };

    next();
  });
}

export default auth;

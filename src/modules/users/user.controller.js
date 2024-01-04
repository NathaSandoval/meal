import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js'
import { verifyPassword } from '../../config/plugins/encrypted-password.plugin.js';
import { generateJWT } from '../../config/plugins/gerate-jwt.plugin.js'
import {
  validateUser,
  validatePartialUser,
  validateLogin,
} from './user.schema.js'
import { UserService } from './user.service.js'

export const createUser = catchAsync(async(req,res,next) => {
    const { hasError, errorMessages, userData } = validateUser(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const user = await UserService.create(userData);

  const token = await generateJWT(user.id);

  return res.status(201).json({
    token,
    user: {
      id: user.id,  
      name: user.name,     
      email: user.email,
    },
  });

})
export const login = catchAsync(async(req,res,next) => {
  const { hasError, errorMessages, userData } = validateLogin(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  //2. validar que el usuario exista en la base de datos
  const user = await UserService.findOneByEmail(userData.email);
 
  if (!user) {
    return next(new AppError('This account does not exist', 404));
  }

  //3. comparar y comprobar contraseñas
  const isCorrectPassword = await verifyPassword(
    userData.password,
    user.password
  );

  if (!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  //4. generar el jwt
  const token = await generateJWT(user.id);

  //5. enviar la respuesta al cliente
  return res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });

})
export const updateProfile = catchAsync(async(req,res,next) => {
  const { user } = req;
  const { hasError, errorMessages, userData } = validatePartialUser(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const userUpdated = await UserService.update(user, userData);

  return res.status(200).json(userUpdated);

})
export const deleteUser = catchAsync(async(req,res,next) => {
  const { user } = req;

  await UserService.delete(user);

  return res.status(204).json();

})
export const findUserOrders = catchAsync(async(req,res,next) => {
  const users = await UserService.findAll();

  return res.status(200).json(users);
})
export const findOneOrder = catchAsync(async(req,res,next) => {
  const { user } = req;

  return res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
 
})
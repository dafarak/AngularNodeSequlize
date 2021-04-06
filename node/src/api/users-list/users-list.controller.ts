import { Request, Response, NextFunction } from "express";
import { config, ENV } from '../../../config/config.json';
import { UserListsRepository } from '../../repository/mariaDB/users-list/users-list.repository';
import { isEmpty } from "../../../config/config.json";
var url = require('url');

export class UsersListController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {

      // let userModel: UserModel[], 
      let statusCode: number;
      let usersListsRepository = new UserListsRepository;
// const queryObject = url. parse(req. url,true). query;
// console.log("req",req.body);


    let userModel = await usersListsRepository.getUser(req.body.users);
    console.log("Hi");
    console.log(userModel);
    
      statusCode = isEmpty(userModel) ? config.statusCode.empty : config.statusCode.successful;
      res.status(200).json({ data: userModel });
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  // public async createUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     let validate = UserValidator.Validate(req.body);

  //     if (validate === null) {
  //       let userRepository = new UserRepository;

  //       let isUserAdded = await userRepository.addUser(validate);
  //       if (isUserAdded === ReturnValue.Success) {
  //         res.status(config.statusCode.successful).json({ message: MSGS.USER_ADD });
  //       } else if (isUserAdded === ReturnValue.AlreadyExist) {
  //         res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
  //       } else {
  //         res.status(config.statusCode.badRequest).json({ message: MSGS.USER_FAIL });
  //       }
  //     } else {
  //       res.status(config.statusCode.badRequest).json({ message: validate });
  //     }
  //   } catch (err) {
  //     res.status(config.statusCode.internalServer).json({ error: err.message });
  //   }
  // }

  // public async updateUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     let validate = UserValidator.Validate(req.body);

  //     if (validate === null) {
  //       let userRepository = new UserRepository;

  //       let isUserUpdated = await userRepository.editUser(validate);
  //       if (isUserUpdated === ReturnValue.Success) {
  //         res.status(config.statusCode.successful).json({ message: MSGS.USER_UPDATE });
  //       } else if (isUserUpdated === ReturnValue.AlreadyExist) {
  //         res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
  //       } else {
  //         res.status(config.statusCode.badRequest).json({ message: MSGS.USER_ALREADY_EXIST });
  //       }
  //     } else {
  //       res.status(config.statusCode.badRequest).json({ message: validate });
  //     }
  //   } catch (err) {
  //     res.status(config.statusCode.internalServer).json({ error: err.message });
  //   }
  // }

  // public async deleteUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     let userRepository = new UserRepository;
  //     let userDelete = await userRepository.deleteUser(req.params.id);
  //     if (userDelete === ReturnValue.IdNotFound) {
  //       res.status(config.statusCode.empty).json({ message: MSGS.USER_ID_NOT_EXISTS });
  //     } else if (userDelete === ReturnValue.Success) {
  //       res.status(config.statusCode.successful).json({ message: MSGS.USER_DELETE });
  //     } else if (userDelete === ReturnValue.Failed) {
  //       res.status(config.statusCode.successful).json({ message: MSGS.USER_FAIL });
  //     }
  //   } catch (error) {
  //     res.status(config.statusCode.badRequest).json({ message: error.message });
  //   }
  // }

}
import { Request, Response, NextFunction } from "express";
import { ReturnValue } from "../../../config/common";
import { config, ENV } from '../../../config/config.json';
import { isEmpty } from "../../../config/config.json";
import { StudentsListsRepository } from "../../repository/mariaDB/students-list/students-list.repository";
import { MSGS } from "../users/user.constants";

export class StudentsListController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
console.log("hello");

      // let userModel: UserModel[], 
      let statusCode: number;
      let studentsListsRepository = new StudentsListsRepository;
      let userModel = await studentsListsRepository.getUser();
      console.log("Hi");
      console.log(userModel);
    
      statusCode = isEmpty(userModel) ? config.statusCode.empty : config.statusCode.successful;
      res.status(200).json({ data: userModel });
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async createStudent(req: Request, res: Response, next: NextFunction) {
    try {
      // let validate = UserValidator.Validate(req.body);/
// 
     
        let studentsListsRepository = new StudentsListsRepository;
console.log("req.body",req.body);

        let isUserAdded = await studentsListsRepository.addUser(req.body);
        if (isUserAdded === ReturnValue.Success) {
          res.status(config.statusCode.successful).json({ message: MSGS.USER_ADD });
        } else if (isUserAdded === ReturnValue.AlreadyExist) {
          res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
        } else {
          res.status(config.statusCode.badRequest).json({ message: MSGS.USER_FAIL });
        }
    
        res.status(config.statusCode.badRequest).json({ message: 'Error' });
   
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      // let validate = UserValidator.Validate(req.body);

      // if (validate === null) {
console.log("req.body",req.body);

        let studentRepository = new StudentsListsRepository;

        let isUserUpdated = await studentRepository.editUser(req.body);
        if (isUserUpdated === ReturnValue.Success) {
          res.status(config.statusCode.successful).json({ message: MSGS.USER_UPDATE });
        } else if (isUserUpdated === ReturnValue.AlreadyExist) {
          res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
        } else {
          res.status(config.statusCode.badRequest).json({ message: MSGS.USER_ALREADY_EXIST });
        }
      // } else {
      //   res.status(config.statusCode.badRequest).json({ message: validate });
      // }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      let studentListRepository = new StudentsListsRepository;
      console.log("req.params.id",req.params.id);
      
      let userDelete = await studentListRepository.deleteUser(req.params.id);
      if (userDelete === ReturnValue.IdNotFound) {
        res.status(config.statusCode.empty).json({ message: MSGS.USER_ID_NOT_EXISTS });
      } else if (userDelete === ReturnValue.Success) {
        res.status(config.statusCode.successful).json({ message: MSGS.USER_DELETE });
      } else if (userDelete === ReturnValue.Failed) {
        res.status(config.statusCode.successful).json({ message: MSGS.USER_FAIL });
      }
    } catch (error) {
      res.status(config.statusCode.badRequest).json({ message: error.message });
    }
  }

  //get user by id

   public async getStudentById(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log("hello",req.params.id);
      let statusCode: number;
      
      let studentsListsRepository = new StudentsListsRepository;
      let getStudentById = await studentsListsRepository.getStudentById(req.params.id);
      statusCode = isEmpty(getStudentById) ? config.statusCode.empty : config.statusCode.successful;
      res.status(200).json({ data: getStudentById });
    } catch (error) {
      res.status(config.statusCode.badRequest).json({ message: error.message });
    }
  }

}
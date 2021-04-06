// import { IUserRepository } from './interface';
import { UserEntity } from "../../../models/user.model";
import { ReturnValue } from "../../../../config/common";
import { pool } from "../../../../config/mysql-config";

export class StudentsListsRepository {
  tableName: string = "users";

  public async getUser(): Promise<any> {
    try {
    //   console.log("Hello", body);
    return new Promise((resolve, reject) => {
        let query=`SELECT * FROM students`;
       console.log("query",query);
       
        pool.query(
          query,
          (error, results) => {
            if (error) {
              reject(error);
              console.log(error);
              
            }
            resolve(results);
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async addUser(user: any): Promise<any> {
    console.log(user);

    try {
        let insertStudent = `INSERT INTO students (name, standard,subject, marks)
        VALUES (${"'" + user.studentName+ "'"}, ${"'" + user.standard+ "'"}, ${"'" + user.subject+ "'"},${"'" + user.marks+ "'"})`;
     console.log("insertStudent",insertStudent);
     
        let addStudent = await pool.query(insertStudent);
    //   console.log("addStudent",addStudent);
      
      if (addStudent) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    //   let getUsersQuer = `SELECT * FROM students WHERE email=${user.email}`;
    //   let getAlreadyExitData = await pool.query(getUsersQuer);
    //   if (getAlreadyExitData) {
    //     return ReturnValue.AlreadyExist;
    //   } else {
    //     let insertStudent = `INSERT INTO students (name, standard,subject, marks)
    //       VALUES (${user.studentName}, ${user.standard}, ${user.subject},${user.marks})`;
    //     let addStudent = await pool.query(insertStudent);
    //     if (addStudent) {
    //       return ReturnValue.Success;
    //     } else {
    //       return ReturnValue.Failed;
    //     }
    //   }
    } catch (error) {
      throw new Error(error);
    }
  }

 public async editUser(edituser: any): Promise<number> {
    try {
        console.log("editUser",edituser);
//         { studentName: 'Satish',
//   standard: '9',
//   marks: '33',
//   subject: 'Ganit',
//   id: 1 }

        let udateStudentQuery=`UPDATE students SET
                               name=${"'" +edituser.studentName +"'"}, 
                               standard=${"'" +edituser.standard +"'"},
                               subject=${"'" +edituser.subject +"'"},
                               marks=${"'" +edituser.marks +"'"}
                               WHERE id = ${edituser.id}`;
                               console.log("udateStudentQuery",udateStudentQuery );

        let addStudent = await pool.query(udateStudentQuery);
console.log("addStudent",addStudent);

    //   let editUser = await UserEntity.update(
    //     { userName: edituser.userName },
    //     {
    //       where: {
    //         id: edituser.userId,
    //       },
    //     }
    //   );
      if (addStudent) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(deleteuser: any): Promise<number> {
    try {
        console.log("deleteuser",deleteuser);
        
        let deleteStudentQuery=`DELETE FROM students WHERE id=${deleteuser}`;
        let deleteStudent=await pool.query(deleteStudentQuery);
    console.log("deleteStudent",deleteStudent);
    
      if (deleteStudent) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getStudentById(id:any): Promise<any> {
    try {
      console.log("Hello",id);
    return new Promise((resolve, reject) => {
        let query=`SELECT * FROM students WHERE id=${id}`;
       console.log("query",query);
       
        pool.query(
          query,
          (error, results) => {
            if (error) {
              reject(error);
              console.log(error);
              
            }
            resolve(results);
          }
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

}

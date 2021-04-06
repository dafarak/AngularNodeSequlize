import { Router } from "express";
import { StudentsListController } from "./students-list.controller";

class StudenstListsRoutes {
  private studentsListController: StudentsListController = new StudentsListController;
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.studentsListController.getUser);
    this.router.post("/add", this.studentsListController.createStudent);
    this.router.get("/:id", this.studentsListController.getStudentById);

    // this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
    this.router.put("/update", this.studentsListController.updateUser);
    this.router.delete("/:id", this.studentsListController.deleteUser);
  }
}
const studentsListController = new StudenstListsRoutes();
studentsListController.init();
export default studentsListController.router; 
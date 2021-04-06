import { Router } from "express";
import { UsersListController } from "./users-list.controller";

class UserListsRoutes {
  private userListController: UsersListController = new UsersListController;
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.post("/", this.userListController.getUser);
    // this.router.post("/", this.userController.getUser);
    // this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
    // this.router.post("/update", upload.single('userLogo'), this.userController.updateUser);
    // this.router.delete("/:id", this.userController.deleteUser);
  }
}
const userListsRoutes = new UserListsRoutes();
userListsRoutes.init();
export default userListsRoutes.router; 
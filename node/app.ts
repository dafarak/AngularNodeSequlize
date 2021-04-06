import express = require("express");
import * as bodyParser from "body-parser";
import * as useragent from "express-useragent";
import LoginRoutes from "./src/api/login/login.router";
import UsersLists from "./src/api/users-list/users-list.router";
import StudentsLists from "./src/api/students-list/students-list.router";


class App { 
  public app: express.Application
  
  constructor() {
    this.app = express();
    this.config();
    this.router();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
    this.app.use(bodyParser.json({limit:'50mb'}));   
    this.app.use('/assets', express.static('assets'));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Expose-Headers", "x-total-count");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
      next();
    });    
  }

  private router(): void {
    this.app.use(useragent.express());
    this.app.use('/admin-login', LoginRoutes)
    this.app.use('/users-list', UsersLists);
    this.app.use('/students-list', StudentsLists);

  }

}

export default new App().app;
import { NextFunction, Request, Response } from "express";

const mUser = { username: "suman", pass: "mypass" };

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  // const user = basicAuth(req);

  // The user is authenticated
  next();
};

export default authenticate;

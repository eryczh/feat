import { userSave, userLists} from "../repository/userRepository.js";

import { Router } from "express";
let server = Router();

server.post('/user', async (req, resp) => {
  let user = req.body;

  let userInsert = await userSave(user);
  resp.send(userInsert);
})

server.get('/user', async(req, resp) => {
  let userl = await userLists();
  resp.send(userl);
})

export default server;
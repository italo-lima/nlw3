import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";

import uploadMulter from "./config/upload";

const routes = Router();

routes.post(
  "/orphanages",
  uploadMulter.array("images"),
  OrphanagesController.create
);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.get("/orphanages", OrphanagesController.index);

export default routes;

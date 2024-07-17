import express from "express";
const router = express.Router();
import { authenticate, checkCacheMyList } from "../src/middlewares/index";
import {
  addTofavriteList,
  deleteFavoriteItem,
  fetchFavoriteListForUserId,
} from "../src/controllers/favoriteController";

router.get(
  "/fetch/:userId",
  authenticate,
  checkCacheMyList,
  fetchFavoriteListForUserId
);
router.put("/update", authenticate, addTofavriteList);
router.delete("/delete", authenticate, deleteFavoriteItem);

export default router;

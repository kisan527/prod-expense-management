import express from "express";
import {
  addTransactionController,
  deleteTransactionController,
  editTransactionController,
  getAllTransactionsController,
} from "../controllers/transactionController.js";

const router = express.Router();

//POST || Add Transactions
router.post("/add-transaction", addTransactionController);

//GET || Get Transactions
router.post("/get-all-transactions", getAllTransactionsController);

//POST || Edit Transactions
router.post("/edit-transaction", editTransactionController);

//DELETE || Delete Transactions
router.post("/delete-transaction", deleteTransactionController);

export default router;
//module.exports = router;

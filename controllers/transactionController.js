import transactionModel from "../models/transactionModel.js";
import moment from "moment";
//import transactionModel from './../models/transactionModel';

export const addTransactionController = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).json("Transaction Created!!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getAllTransactionsController = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0]
                ? moment(selectedDate[0]).format("YYYY-MM-DD")
                : null,
              $lte: selectedDate[1]
                ? moment(selectedDate[1]).format("YYYY-MM-DD")
                : null,
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    const date = moment().subtract(Number(frequency), "days").toDate();
    console.log("Fetching transactions from date:", date); // Debug log
    console.log("Frequency:", frequency); // Debug log
    console.log("Transactions:", transactions); // Debug log
    if (transactions) {
      res.status(200).json(transactions);
    } else {
      res.status(500).send("Something went wrong!!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const editTransactionController = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send("Record edited successfully!!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteTransactionController = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({
      _id: req.body.transactionId,
    });
    res.status(200).send("Record deleted successfully!!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//module.exports = { addTransactionController, getAllTransactionsController };

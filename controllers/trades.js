const Trade = require("../models/trades");
const Error = require("../utils/error");
const { DoesNotExistError } = Error;

const getTrades = async (req, res) => {
  try {
    const trades = await Trade.findAll();
    res.status(200).json({ trades });
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).json({ data: err.response.data });
    }
    res.status(500).json({ data: err?.message || "Something went wrong." });
  }
};

const getTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findOne({ where: { id: id } });
    if (!trade) res.status(404).json({ data: "Content does not found" });
    res.status(200).json({ trade });
  } catch (err) {
    if (err instanceof DoesNotExistError) {
      res.status(404).json({ data: "Content does not found" });
    } else {
      res.status(500).send();
    }
  }
};

const createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);
    res.status(200).json({ trade });
  } catch (err) {
    if (err instanceof DoesNotExistError) {
      res.status(404).send(err);
    } else {
      res.status(500).send();
    }
  }
};

const updateTrade = async (req, res) => {
  res.status(405).json({ data: "You are not allowed to modify this record" });
};

const deleteTrade = async (req, res) => {
  res.status(405).json({ data: "You are not allowed to delete this record" });
};

module.exports = { getTrades, getTrade, createTrade, updateTrade, deleteTrade };

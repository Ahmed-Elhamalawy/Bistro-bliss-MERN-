const Item = require("../models/menuItemModel");

const createItem = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const item = new Item({
    name,
    description,
    price,
    image,
    category,
  });
  await item.save();
  res.json(item);
};
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};
const getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

const deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  res.json(item);
};
const updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};
module.exports = { createItem, getItems, deleteItem, updateItem, getItemById };

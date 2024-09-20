const Item = require("../models/menuItemModel");

const createItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  });
  await item.save();
  res.json(item);
};
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

const deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted successfully" });
  res.json(item);
};
const updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};
module.exports = { createItem, getItems, deleteItem, updateItem };

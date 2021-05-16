// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

 // Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',

});
 // Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
    //this might also be tag_id
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
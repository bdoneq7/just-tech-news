const User = require("./User");
const Post = require("./Post");

// create associations - A user can make many posts - One to Many relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// Post has a constraint - only One User
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };


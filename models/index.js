const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations - A user can make many posts - One to Many relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// Post has a constraint - only One User
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

// User belongs to many Posts through Vote
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

// Post belongs to many Users through Vote
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
}); 

// Vote belongs to User
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

// Vote belongs to Post
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User has many Votes
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

// Post has many Votes
Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment belongs to Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// Post has many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };


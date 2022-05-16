const Writer = require('./Writer');
const Post = require('./Post');
const Comment = require('./comment');

Writer.hasMany(Post, {
    foreignKey: 'writer_id'
})

Post.belongsTo(Writer, {
    foreignKey: 'writer_id'
})



module.exports = {Writer, Post, Comment}
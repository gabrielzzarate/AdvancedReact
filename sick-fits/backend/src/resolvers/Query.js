const { forwardTo } = require('prisma-binding');

/* 
if the query matches whats on the server exactly, and you don't need to do any other operations like authentication, etc, you can just forward the query on to the db prisma instance.
*/

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId },
    }, info);
  },
};

// const Query = {
//   async items(parent, args, ctx, info) {
//     const items = ctx.db.query.items();

//     return items;
//   }
// };

module.exports = Query;

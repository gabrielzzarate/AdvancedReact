const { forwardTo } = require('prisma-binding');

/* 
if the query matches whats on the server exactly, and you don't need to do any other operations like authentication, etc, you can just forward the query on to the db prisma instance.
*/

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};

// const Query = {
//   async items(parent, args, ctx, info) {
//     const items = ctx.db.query.items();

//     return items;
//   }
// };

module.exports = Query;

const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = { 
    Query: {
        me: async ({ user = null, params }, res => ) {
            const foundUser = await User.findOne({
              $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });
        
            if (!foundUser) {
              return res.status(400).json({ message: 'Cannot find a user with this id!' });
            }
        
            res.json(foundUser);
          }
    }
}

















module.export = resolvers;



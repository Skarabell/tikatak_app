import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import post from './post'
import user from './user'
import postedBy from './postedBy'
import comment from './comment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    user,
    postedBy,
    comment,
  ]),
})

# Helps
## Setup
- Install the CLI
```bash
npm install -g strapi@alpha
```
- start the database
- Setup new project

## Data model

### Collection
- label: string
- template: JSON
- owner: rel -> User

### Item
- label: string
- tags: string
- fields: JSON
- photos: Media
- fromCollection: rel -> Collection
- owner: rel -> User

### GIVE PERMISSIONS!!!

## Populate the database
### With the script
### Manually


## Policies
### ownerCollectionsOnly

```javascript
"use strict";

/**
 * `ownerCollectionsOnly` policy.
 */

module.exports = async (ctx, next) => {
  const { role, id } = ctx.state.user;

  // defined only when a specific collection is ask
  const fieldId = ctx.params.id;

  if (typeof fieldId === "undefined") {
    if(typeof ctx.query.owner === 'undefined' && role !== "administrator") {
       ctx.query.owner = id;
    }
  }

  await next();
};
```


### setOwner

```javascript
'use strict';

/**
 * `setOwner` policy.
 */

module.exports = async (ctx, next) => {
  const { id } = ctx.state.user;
  const { body } = ctx.request;

  body.owner = id.toString();

  await next();
};
```

### isOwner

```javascript
"use strict";

/**
 * `isOwner` policy.
 */

module.exports = async (ctx, next) => {
  const { role, id } = ctx.state.user;

  Collection.fetchAll({ id: fieldId, owner: id }).then(result => {
  if (!result && role.type !== "administrator") {
    return ctx.unauthorized("You are not allowed to perform this action.");
  }
  });

  await next();
};
```


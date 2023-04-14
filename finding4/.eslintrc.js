'use strict';

module.exports = {
  root: true,
  plugins: ['jsdoc'],
  rules: {
    "jsdoc/sort-tags": [
      "error",
      {
        "tagSequence": [
          { "tags": ["since", "access"] },
          { "tags": ["class", "augments", "mixes"] },
          { "tags": ["alias", "memberof"] },
          { "tags": ["see", "link", "global"] },
          { "tags": ["fires", "listens"] },
          { "tags": ["param"] },
          { "tags": ["yields"] },
          { "tags": ["returns"] }
        ]
      }
    ],
  }
};

'use strict';

module.exports = {
  root: true,
  plugins: ['jsdoc'],
  rules: {
    "jsdoc/sort-tags": [
      "error",
      {
        "tagSequence": [
          { "tags": ["public"] },
          { "tags": ["param"] },
        ]
      }
    ]
  }
};

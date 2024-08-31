// what are the names and age of users who are inactive and have 'velit' as a tag

[
    {
      $match: {
        isActive: false,
        tags: 'velit'
      }
    },
    {
      $project: {
        name: 1,
        age: 1
      }
    }
  ]
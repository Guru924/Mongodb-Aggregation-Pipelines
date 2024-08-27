// list the top 5 most common fruits among the users

db.users.aggregate()[
    {
      $group: {
        _id: "$favoriteFruit",
        count: {
          $sum: 1,
        }
      },
    },
    {
      $sort: {
        count: -1
      }
    },
    {
      $limit: 5
    }
  ]
// what is the average age of all users

db.users.aggregate()[
    {
      $group: {
        _id: null,
        averageAge: {
          $avg: "$age"
        }
      }
    }
  ]
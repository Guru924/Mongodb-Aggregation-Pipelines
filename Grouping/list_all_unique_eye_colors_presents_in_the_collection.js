// list all unique eye colors presents in the collection.

db.users.aggregate()[
    {
      $group: {
        _id: "$eyeColor" 
      }
    }
  ]

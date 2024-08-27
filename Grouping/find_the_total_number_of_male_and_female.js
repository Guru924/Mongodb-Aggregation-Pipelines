// find the total number of male and female
db.users.aggregate([
    {
      $group: {
        _id: "$gender",
        count: {
          $sum: 1
        }
        }
      }
  ])
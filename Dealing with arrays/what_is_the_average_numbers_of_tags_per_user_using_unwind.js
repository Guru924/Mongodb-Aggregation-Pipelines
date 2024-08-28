// what_is_the_average_numbers_of_tags_per_user

[
    {
      $unwind: {
        path: "$tags",
      }
    },
    {
      $group: {
        _id: "$_id",
        numberOfTags: {
          $sum: 1
        }
      }
    },
    {
      $group: {
        _id: null,
        averageNoOfTags: {
          $avg: "$numberOfTags"
        }
      }
    }
  ]
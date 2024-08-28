// what_is_the_average_numbers_of_tags_per_user

[
    {
      $addFields: {
        numberOfTags: {
          $size: {$ifNull: ["$tags", []]}
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
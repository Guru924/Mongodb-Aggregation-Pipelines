// List_all_compaines_located_in_the_USA_with_their_corresponding_user_count

[
    {
      $match: {
        "company.location.country": "USA",
      },
    },
    {
      $group: {
        _id: "$company.title",
        userCount: { $sum: 1 },
      },
    },
  ]
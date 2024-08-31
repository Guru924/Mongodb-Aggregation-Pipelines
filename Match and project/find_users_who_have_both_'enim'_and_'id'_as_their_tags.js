// find_users_who_have_both_'enim'_and_'id'_as_their_tags

[
    {
      $match: {
        tags: { $all: ["enim", "id"] },
      },
    },
  ]
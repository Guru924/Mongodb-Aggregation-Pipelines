// how_many_users_have_'ad'_as_the_second_tag_in_their_list_of_tags

[
    {
      $match: {
        "tags.1": "ad",
      },
    },
    { $count: "2ndTagAd" },
  ]
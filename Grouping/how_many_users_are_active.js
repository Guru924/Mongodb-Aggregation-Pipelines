// how many users are active?
db.users.aggregate([
    {
      $match: {
        isActive: true
      }
    },
    {
      $count: 'activeUser'
    }
  ])
enum Users {
  NormalUser,
  PayerUser,
  AdminUser,
  MegaUser,
}

const myUser: Users = Users.AdminUser;

if (myUser === Users.AdminUser) {
  console.log(`You have admin permissions - User Type: ${myUser}`);
}

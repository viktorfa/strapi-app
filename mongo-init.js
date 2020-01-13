function generatePassword(
  length = 16,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
) {
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const users = [
  {
    user: "strapiowner",
    pwd: generatePassword(),
    roles: [{ role: "dbOwner", db: "strapi" }]
  },
  {
    user: "strapireadwrite",
    pwd: generatePassword(),
    roles: [{ role: "readWrite", db: "strapi" }]
  },
  {
    user: "strapiread",
    pwd: generatePassword(),
    roles: [{ role: "read", db: "strapi" }]
  },
  {
    user: "strapidevowner",
    pwd: generatePassword(),
    roles: [{ role: "dbOwner", db: "strapidev" }]
  },
  {
    user: "strapidevreadwrite",
    pwd: generatePassword(),
    roles: [{ role: "readWrite", db: "strapidev" }]
  },
  {
    user: "strapidevread",
    pwd: generatePassword(),
    roles: [{ role: "read", db: "strapidev" }]
  },
  {
    user: "root",
    pwd: generatePassword(),
    roles: ["root"]
  }
];

for (const x of users) {
  db.createUser(x);
}
printjson(users.map(x => ({ password: x.pwd, username: x.user })));

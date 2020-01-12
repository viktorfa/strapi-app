const generatePassword = (
  length = 16,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
) => {
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

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

//const result = users.map(db.createUser);

for (let i = 0; i < users.length; i++) {
  db.createUser(users[i]);
}

/*
for (const x of users) {
  db.createUser(x);
}
*/

//db.createUser(users[0]);

// Create text index for offer collection
// use strapi
// db.groceryoffer.index({ title: "text" }, { default_language: "none" });

printjson(users.map(x => ({ password: x.pwd, username: x.user })));

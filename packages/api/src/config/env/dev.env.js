const { MONGODB_URI } = process.env;

const devConfig =  {
  "APP_NAME": "api",
  "MONGODB_URI": MONGODB_URI,
  "JWT_SECRET": "XXXX-XXXX-XXXX",
  "BCRYPT_SALT": 10,
  "role": {
    "ADMIN": ["admin"],
    "USER": ["user", "admin"]
  },
 
  "url": {
    "CLIENT_URL": "http://localhost:5173",
    "BASE_URL": "http://localhost:5173"
  },
  "mailer": {
    "HOST": "",
    "USER": "",
    "PASSWORD": "",
    "PORT": "",
    "SECURE": "",
    "DOMAIN": ""
  }
}

module.exports = devConfig;

   
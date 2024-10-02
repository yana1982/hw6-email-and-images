import dotenv from 'dotenv';
dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}

// const PORT = 3000;
// const MONGODB_USER = 'yanaushakova1982';
// const MONGODB_PASSWORD = 'bST1AiFbKWNidUSp';
// const MONGODB_URL = 'yana.nkyxw.mongodb.net';
// const MONGODB_DB = 'contacts';

const PORT = env('PORT', 3000);
const MONGODB_USER = env('MONGODB_USER');
const MONGODB_PASSWORD = env('MONGODB_PASSWORD');
const MONGODB_URL = env('MONGODB_URL');
const MONGODB_DB = env('MONGODB_DB');

export { PORT, MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB };

console.log(process.env);

// mongodb+srv://yanaushakova1982:<db_password>@yana.nkyxw.mongodb.net/?retryWrites=true&w=majority&appName=Yana

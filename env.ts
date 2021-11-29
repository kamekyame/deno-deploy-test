import { Colors, config } from "./deps.ts";

console.log(Colors.yellow("[env]\tCheck environment"));

// Read dotenv file
config({
  path: "./.env",
  export: true,
});

console.log(Colors.green("[env]\tChecked environment"));

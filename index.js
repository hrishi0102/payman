import Paymanai from "paymanai";
import dotenv from "dotenv";

dotenv.config();

const payman = new Paymanai({
    xPaymanAPISecret: process.env.PAYMAN_API_KEY,
});

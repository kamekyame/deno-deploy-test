import "./env.ts";

// get env
const consumerKey_ = Deno.env.get("API_KEY");
if (!consumerKey_) throw new Error("API_KEY not set");
const consumerSecret_ = Deno.env.get("API_SECRETKEY");
if (!consumerSecret_) throw new Error("API_SECRETKEY not set");
const token_ = Deno.env.get("TOKEN");
if (!token_) throw new Error("TOKEN not set");
const tokenSecret_ = Deno.env.get("TOKEN_SECRET");
if (!tokenSecret_) throw new Error("TOKEN_SECRET not set");

export const consumerKey = consumerKey_;
export const consumerSecret = consumerSecret_;
export const token = token_;
export const tokenSecret = tokenSecret_;
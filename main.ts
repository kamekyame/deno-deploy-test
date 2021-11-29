import { consumerKey, consumerSecret } from "./twitter-auth.ts";
//console.log(consumerKey, consumerSecret);

import { getRules } from "https://deno.land/x/twitter_api_client@v0.0.2/api_v2/tweets/filtered_stream.ts";
import { getBearerToken } from "https://kamekyame.github.io/twitter_api_client/auth/oauth2.ts";

const bearerToken = await getBearerToken(consumerKey, consumerSecret);
//console.log(bearerToken);
//const res = await getRules(bearerToken);
//console.log(res);

import {
  connectStream,
  StreamTweet,
} from "https://deno.land/x/twitter_api_client@v0.0.2/api_v2/tweets/filtered_stream.ts";

async function callback(a: StreamTweet) {
  // any processing
  console.log(a);
}

// none option
connectStream(bearerToken, callback);

/*// // with option
// connectStream(bearerToken, callback, {
//   expansions: {
//     author_id: true,
//   },
// });*/

import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skYoYddXz1kp4qdOiUHS3nRvNlx5gOmMCHuT3IHteIbMPWev6TosIJh87WkKSo0Coew2fjWgkNg3GlWOYyTo96TaRTI39PD1Cw3rfaCw4z9H6jqILqePP1SgYn8SsHAKVoDxA3t8DeE4QpKETttJATeqV9WVS4FBr18H6rO85qonOdnzEaGr",
})

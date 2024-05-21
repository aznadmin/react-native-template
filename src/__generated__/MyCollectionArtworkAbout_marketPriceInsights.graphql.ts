/**
 * @generated SignedSource<<9d0f1fe63d239ac3490230fd95d12bc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkAbout_marketPriceInsights$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAboutWork_marketPriceInsights" | "RequestForPriceEstimateBanner_marketPriceInsights">;
  readonly " $fragmentType": "MyCollectionArtworkAbout_marketPriceInsights";
};
export type MyCollectionArtworkAbout_marketPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkAbout_marketPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_marketPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkAbout_marketPriceInsights",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkAboutWork_marketPriceInsights"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RequestForPriceEstimateBanner_marketPriceInsights"
    }
  ],
  "type": "MarketPriceInsights",
  "abstractKey": null
};

(node as any).hash = "5d31928e671bfba2c98a0d987fb12aef";

export default node;

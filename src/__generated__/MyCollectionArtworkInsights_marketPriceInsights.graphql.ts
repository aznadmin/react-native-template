/**
 * @generated SignedSource<<227d200ae4c636153ded7495c7167d8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsights_marketPriceInsights$data = {
  readonly demandRank: number | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_marketPriceInsights">;
  readonly " $fragmentType": "MyCollectionArtworkInsights_marketPriceInsights";
};
export type MyCollectionArtworkInsights_marketPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkInsights_marketPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_marketPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkInsights_marketPriceInsights",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRank",
      "storageKey": null
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

(node as any).hash = "b3ba6a187661133f78f56f57e6cdae58";

export default node;

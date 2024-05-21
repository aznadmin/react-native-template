/**
 * @generated SignedSource<<bcc4a6c28e3f36eb222986dfd3b6c052>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkAboutWork_marketPriceInsights$data = {
  readonly highRangeCents: any | null | undefined;
  readonly lowRangeCents: any | null | undefined;
  readonly " $fragmentType": "MyCollectionArtworkAboutWork_marketPriceInsights";
};
export type MyCollectionArtworkAboutWork_marketPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkAboutWork_marketPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAboutWork_marketPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkAboutWork_marketPriceInsights",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lowRangeCents",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "highRangeCents",
      "storageKey": null
    }
  ],
  "type": "MarketPriceInsights",
  "abstractKey": null
};

(node as any).hash = "1b8a55fc592a7ccbeb8f2837c0e4b17d";

export default node;

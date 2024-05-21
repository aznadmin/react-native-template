/**
 * @generated SignedSource<<2a37e7a16b702dce7968203ea0fce1ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_recommendedAuctionLots$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RecommendedAuctionLotsRail_largeArtworkConnection">;
  readonly " $fragmentType": "Home_recommendedAuctionLots";
};
export type Home_recommendedAuctionLots$key = {
  readonly " $data"?: Home_recommendedAuctionLots$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_recommendedAuctionLots">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_recommendedAuctionLots",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecommendedAuctionLotsRail_largeArtworkConnection"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "f8a73ea7ef134be1bb1dce03bc6bdd8d";

export default node;

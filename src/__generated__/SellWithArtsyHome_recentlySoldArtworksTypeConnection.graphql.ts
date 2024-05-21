/**
 * @generated SignedSource<<b9693eaf187ebd8610cbdd06b690efff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SellWithArtsyHome_recentlySoldArtworksTypeConnection$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection">;
  readonly " $fragmentType": "SellWithArtsyHome_recentlySoldArtworksTypeConnection";
};
export type SellWithArtsyHome_recentlySoldArtworksTypeConnection$key = {
  readonly " $data"?: SellWithArtsyHome_recentlySoldArtworksTypeConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"SellWithArtsyHome_recentlySoldArtworksTypeConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SellWithArtsyHome_recentlySoldArtworksTypeConnection",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection"
    }
  ],
  "type": "RecentlySoldArtworkTypeConnection",
  "abstractKey": null
};

(node as any).hash = "9e41b3d0d37f0da948532f81926c5346";

export default node;

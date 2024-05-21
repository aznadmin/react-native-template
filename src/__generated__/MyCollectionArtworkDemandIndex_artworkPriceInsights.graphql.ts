/**
 * @generated SignedSource<<3a950ac45fc326926e8839cb32a01ae0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkDemandIndex_artworkPriceInsights$data = {
  readonly demandRank: number | null | undefined;
  readonly demandRankDisplayText: string | null | undefined;
  readonly " $fragmentType": "MyCollectionArtworkDemandIndex_artworkPriceInsights";
};
export type MyCollectionArtworkDemandIndex_artworkPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkDemandIndex_artworkPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkDemandIndex_artworkPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkDemandIndex_artworkPriceInsights",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRank",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRankDisplayText",
      "storageKey": null
    }
  ],
  "type": "ArtworkPriceInsights",
  "abstractKey": null
};

(node as any).hash = "cffb4cbf340fa8f24f00388f80d1a8d3";

export default node;

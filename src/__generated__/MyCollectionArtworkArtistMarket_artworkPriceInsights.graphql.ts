/**
 * @generated SignedSource<<c43629a1d127d13cb72604e742791dda>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArtistMarket_artworkPriceInsights$data = {
  readonly annualLotsSold: number | null | undefined;
  readonly annualValueSoldDisplayText: string | null | undefined;
  readonly liquidityRankDisplayText: string | null | undefined;
  readonly medianSaleOverEstimatePercentage: number | null | undefined;
  readonly sellThroughRate: number | null | undefined;
  readonly " $fragmentType": "MyCollectionArtworkArtistMarket_artworkPriceInsights";
};
export type MyCollectionArtworkArtistMarket_artworkPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkArtistMarket_artworkPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_artworkPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkArtistMarket_artworkPriceInsights",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "annualLotsSold",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "annualValueSoldDisplayText",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sellThroughRate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liquidityRankDisplayText",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "medianSaleOverEstimatePercentage",
      "storageKey": null
    }
  ],
  "type": "ArtworkPriceInsights",
  "abstractKey": null
};

(node as any).hash = "dabb760f6fda099174b5f1e13f652012";

export default node;

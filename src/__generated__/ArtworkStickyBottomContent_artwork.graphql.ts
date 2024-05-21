/**
 * @generated SignedSource<<934b89fcde790406a4519e4a66abfce3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkStickyBottomContent_artwork$data = {
  readonly isForSale: boolean | null | undefined;
  readonly isSold: boolean | null | undefined;
  readonly saleArtwork: {
    readonly endAt: string | null | undefined;
    readonly extendedBiddingEndAt: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_artwork" | "ArtworkPrice_artwork">;
  readonly " $fragmentType": "ArtworkStickyBottomContent_artwork";
};
export type ArtworkStickyBottomContent_artwork$key = {
  readonly " $data"?: ArtworkStickyBottomContent_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkStickyBottomContent_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkStickyBottomContent_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isForSale",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSold",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "extendedBiddingEndAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkPrice_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkCommercialButtons_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "a0a8fead602656d1ae65a4ae48b6e4e8";

export default node;

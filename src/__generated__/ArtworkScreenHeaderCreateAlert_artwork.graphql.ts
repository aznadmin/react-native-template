/**
 * @generated SignedSource<<05ecaf847546634b5d6030b2b9657a0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkScreenHeaderCreateAlert_artwork$data = {
  readonly artists: ReadonlyArray<{
    readonly internalID: string;
  } | null | undefined> | null | undefined;
  readonly isEligibleToCreateAlert: boolean;
  readonly isForSale: boolean | null | undefined;
  readonly isInAuction: boolean | null | undefined;
  readonly sale: {
    readonly isClosed: boolean | null | undefined;
    readonly startAt: string | null | undefined;
  } | null | undefined;
  readonly saleArtwork: {
    readonly endAt: string | null | undefined;
    readonly endedAt: string | null | undefined;
    readonly extendedBiddingEndAt: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CreateArtworkAlertModal_artwork">;
  readonly " $fragmentType": "ArtworkScreenHeaderCreateAlert_artwork";
};
export type ArtworkScreenHeaderCreateAlert_artwork$key = {
  readonly " $data"?: ArtworkScreenHeaderCreateAlert_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkScreenHeaderCreateAlert_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkScreenHeaderCreateAlert_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEligibleToCreateAlert",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInAuction",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateArtworkAlertModal_artwork"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startAt",
          "storageKey": null
        }
      ],
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
          "name": "endedAt",
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
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "f5d4880870a5205d2922f64849418dbc";

export default node;

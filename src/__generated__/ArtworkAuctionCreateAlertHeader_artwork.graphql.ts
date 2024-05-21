/**
 * @generated SignedSource<<cfca1dfaabaf4ad28e0d3e3c4718d35a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAuctionCreateAlertHeader_artwork$data = {
  readonly artistNames: string | null | undefined;
  readonly internalID: string;
  readonly isEligibleToCreateAlert: boolean;
  readonly isInAuction: boolean | null | undefined;
  readonly myLotStandingManageAlerts: ReadonlyArray<{
    readonly isHighestBidder: boolean | null | undefined;
  }> | null | undefined;
  readonly sale: {
    readonly isClosed: boolean | null | undefined;
    readonly startAt: string | null | undefined;
  } | null | undefined;
  readonly saleArtwork: {
    readonly endAt: string | null | undefined;
    readonly endedAt: string | null | undefined;
    readonly extendedBiddingEndAt: string | null | undefined;
  } | null | undefined;
  readonly savedSearch: {
    readonly suggestedArtworksConnection: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly title: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CreateArtworkAlertModal_artwork">;
  readonly " $fragmentType": "ArtworkAuctionCreateAlertHeader_artwork";
};
export type ArtworkAuctionCreateAlertHeader_artwork$key = {
  readonly " $data"?: ArtworkAuctionCreateAlertHeader_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkAuctionCreateAlertHeader_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkAuctionCreateAlertHeader_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
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
      "name": "artistNames",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
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
    },
    {
      "alias": "myLotStandingManageAlerts",
      "args": null,
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "myLotStanding",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isHighestBidder",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkSavedSearch",
      "kind": "LinkedField",
      "name": "savedSearch",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworkConnection",
          "kind": "LinkedField",
          "name": "suggestedArtworksConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateArtworkAlertModal_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "e3a5e3b8aef392cbedcdfc2ad1a443bf";

export default node;

/**
 * @generated SignedSource<<eb5e7071bc430b44020456cf9f978d12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistInsights_artist$data = {
  readonly id: string;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly slug: string;
  readonly statuses: {
    readonly auctionLots: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistInsightsAuctionResults_artist">;
  readonly " $fragmentType": "ArtistInsights_artist";
};
export type ArtistInsights_artist$key = {
  readonly " $data"?: ArtistInsights_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistInsights_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistInsights_artist",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistInsightsAuctionResults_artist"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistStatuses",
      "kind": "LinkedField",
      "name": "statuses",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "auctionLots",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "c6d0b2b5be9af3ae95714d1de293b242";

export default node;

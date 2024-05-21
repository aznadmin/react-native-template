/**
 * @generated SignedSource<<147fbf37406720cb5c5aac4027f62eff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedArtists_collection$data = {
  readonly artworksConnection: {
    readonly merchandisableArtists: ReadonlyArray<{
      readonly internalID: string;
      readonly " $fragmentSpreads": FragmentRefs<"ArtistListItem_artist">;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly featuredArtistExclusionIds: ReadonlyArray<string>;
  readonly query: {
    readonly artistIDs: ReadonlyArray<string> | null | undefined;
  };
  readonly slug: string;
  readonly " $fragmentType": "FeaturedArtists_collection";
};
export type FeaturedArtists_collection$key = {
  readonly " $data"?: FeaturedArtists_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedArtists_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedArtists_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "aggregations",
          "value": [
            "MERCHANDISABLE_ARTISTS"
          ]
        },
        {
          "kind": "Literal",
          "name": "size",
          "value": 0
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "-decayed_merch"
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "size",
              "value": 4
            }
          ],
          "concreteType": "Artist",
          "kind": "LinkedField",
          "name": "merchandisableArtists",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "internalID",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArtistListItem_artist"
            }
          ],
          "storageKey": "merchandisableArtists(size:4)"
        }
      ],
      "storageKey": "artworksConnection(aggregations:[\"MERCHANDISABLE_ARTISTS\"],size:0,sort:\"-decayed_merch\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarketingCollectionQuery",
      "kind": "LinkedField",
      "name": "query",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artistIDs",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "featuredArtistExclusionIds",
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "a7a18e885dd71078dd8c05ac099c50d1";

export default node;

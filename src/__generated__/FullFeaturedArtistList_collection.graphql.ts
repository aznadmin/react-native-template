/**
 * @generated SignedSource<<925e94ae307fb95c8af20417cc2b6f28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FullFeaturedArtistList_collection$data = {
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
  readonly " $fragmentType": "FullFeaturedArtistList_collection";
};
export type FullFeaturedArtistList_collection$key = {
  readonly " $data"?: FullFeaturedArtistList_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullFeaturedArtistList_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullFeaturedArtistList_collection",
  "selections": [
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
          "args": null,
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
          "storageKey": null
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

(node as any).hash = "0a016943e22e834d179fce3fc188d113";

export default node;

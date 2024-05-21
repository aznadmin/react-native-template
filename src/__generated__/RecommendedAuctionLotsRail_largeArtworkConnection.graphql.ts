/**
 * @generated SignedSource<<5c6198aabb3564e7967daedfa1160715>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecommendedAuctionLotsRail_largeArtworkConnection$data = {
  readonly artworksForUser: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly slug: string;
        readonly title: string | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"LargeArtworkRail_artworks">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "RecommendedAuctionLotsRail_largeArtworkConnection";
};
export type RecommendedAuctionLotsRail_largeArtworkConnection$key = {
  readonly " $data"?: RecommendedAuctionLotsRail_largeArtworkConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecommendedAuctionLotsRail_largeArtworkConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecommendedAuctionLotsRail_largeArtworkConnection",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "includeBackfill",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "onlyAtAuction",
          "value": true
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksForUser",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                  "name": "slug",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LargeArtworkRail_artworks"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artworksForUser(first:10,includeBackfill:true,onlyAtAuction:true)"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "a6253b07e03485505b149acfde46e423";

export default node;

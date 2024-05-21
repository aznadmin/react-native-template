/**
 * @generated SignedSource<<fdf6f0d1292085dac6b35fc52b7c9c4f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_meBelow$data = {
  readonly artistRecommendationsCounts: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly artworkRecommendationsCounts: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly auctionResultsByFollowedArtistsPast: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"AuctionResultsRail_auctionResults">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkRecommendationsRail_me" | "RecommendedArtistsRail_me">;
  readonly " $fragmentType": "Home_meBelow";
};
export type Home_meBelow$key = {
  readonly " $data"?: Home_meBelow$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_meBelow">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_meBelow",
  "selections": [
    {
      "alias": "artistRecommendationsCounts",
      "args": (v0/*: any*/),
      "concreteType": "ArtistConnection",
      "kind": "LinkedField",
      "name": "artistRecommendations",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artistRecommendations(first:1)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecommendedArtistsRail_me"
    },
    {
      "alias": "artworkRecommendationsCounts",
      "args": (v0/*: any*/),
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworkRecommendations",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artworkRecommendations(first:1)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkRecommendationsRail_me"
    },
    {
      "alias": "auctionResultsByFollowedArtistsPast",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 12
        },
        {
          "kind": "Literal",
          "name": "state",
          "value": "PAST"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "auctionResultsByFollowedArtists",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AuctionResultsRail_auctionResults"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AuctionResultEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AuctionResult",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "auctionResultsByFollowedArtists(first:12,state:\"PAST\")"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "d4fa79f4c53fe471b5988d0161ac5816";

export default node;

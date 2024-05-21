/**
 * @generated SignedSource<<61459d26888853fc50092e60768bc8ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly artwork: {
        readonly href: string | null | undefined;
        readonly internalID: string;
        readonly slug: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkRailCard_artwork">;
      } | null | undefined;
      readonly highEstimate: {
        readonly display: string | null | undefined;
      } | null | undefined;
      readonly lowEstimate: {
        readonly display: string | null | undefined;
      } | null | undefined;
      readonly performance: {
        readonly mid: string | null | undefined;
      } | null | undefined;
      readonly priceRealized: {
        readonly display: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection";
};
export type SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection$key = {
  readonly " $data"?: SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SellWithArtsyRecentlySold_recentlySoldArtworkTypeConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RecentlySoldArtworkTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RecentlySoldArtworkType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "artwork",
              "plural": false,
              "selections": [
                {
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "width",
                      "value": 250
                    }
                  ],
                  "kind": "FragmentSpread",
                  "name": "ArtworkRailCard_artwork"
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
                  "name": "href",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Money",
              "kind": "LinkedField",
              "name": "lowEstimate",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Money",
              "kind": "LinkedField",
              "name": "highEstimate",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Money",
              "kind": "LinkedField",
              "name": "priceRealized",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "RecenltySoldArtworkPerformance",
              "kind": "LinkedField",
              "name": "performance",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "mid",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RecentlySoldArtworkTypeConnection",
  "abstractKey": null
};
})();

(node as any).hash = "d9e6538035592f088567e765287ef40c";

export default node;

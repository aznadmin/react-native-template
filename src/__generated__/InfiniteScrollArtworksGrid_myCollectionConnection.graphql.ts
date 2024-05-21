/**
 * @generated SignedSource<<33d3c0cb9c4841dd61680b75e0614c9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtistTargetSupplyPriority = "FALSE" | "TRUE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InfiniteScrollArtworksGrid_myCollectionConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly artist: {
        readonly internalID: string;
        readonly name: string | null | undefined;
        readonly targetSupply: {
          readonly priority: ArtistTargetSupplyPriority | null | undefined;
        };
      } | null | undefined;
      readonly artistNames: string | null | undefined;
      readonly attributionClass: {
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly consignmentSubmission: {
        readonly displayText: string | null | undefined;
      } | null | undefined;
      readonly date: string | null | undefined;
      readonly height: string | null | undefined;
      readonly id: string;
      readonly image: {
        readonly aspectRatio: number;
        readonly blurhash: string | null | undefined;
      } | null | undefined;
      readonly marketPriceInsights: {
        readonly demandRank: number | null | undefined;
      } | null | undefined;
      readonly medium: string | null | undefined;
      readonly mediumType: {
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly pricePaid: {
        readonly minor: any;
      } | null | undefined;
      readonly sizeBucket: string | null | undefined;
      readonly slug: string;
      readonly title: string | null | undefined;
      readonly width: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork" | "MyCollectionArtworkGridItem_artwork">;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly pageInfo: {
    readonly endCursor: string | null | undefined;
    readonly hasNextPage: boolean;
    readonly startCursor: string | null | undefined;
  };
  readonly " $fragmentType": "InfiniteScrollArtworksGrid_myCollectionConnection";
};
export type InfiniteScrollArtworksGrid_myCollectionConnection$key = {
  readonly " $data"?: InfiniteScrollArtworksGrid_myCollectionConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"InfiniteScrollArtworksGrid_myCollectionConnection">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  {
    "kind": "Literal",
    "name": "includeAllImages",
    "value": true
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "skipArtworkGridItem"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InfiniteScrollArtworksGrid_myCollectionConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endCursor",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MyCollectionEdge",
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
              "name": "slug",
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
              "args": [
                {
                  "kind": "Literal",
                  "name": "includeAll",
                  "value": true
                }
              ],
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "aspectRatio",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "blurhash",
                  "storageKey": null
                }
              ],
              "storageKey": "image(includeAll:true)"
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
              "name": "medium",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artist",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ArtistTargetSupply",
                  "kind": "LinkedField",
                  "name": "targetSupply",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "priority",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                (v0/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Money",
              "kind": "LinkedField",
              "name": "pricePaid",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "minor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "sizeBucket",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "width",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "date",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtworkMedium",
              "kind": "LinkedField",
              "name": "mediumType",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AttributionClass",
              "kind": "LinkedField",
              "name": "attributionClass",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtworkConsignmentSubmission",
              "kind": "LinkedField",
              "name": "consignmentSubmission",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "displayText",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtworkPriceInsights",
              "kind": "LinkedField",
              "name": "marketPriceInsights",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "demandRank",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "condition": "skipArtworkGridItem",
              "kind": "Condition",
              "passingValue": false,
              "selections": [
                {
                  "args": (v2/*: any*/),
                  "kind": "FragmentSpread",
                  "name": "ArtworkGridItem_artwork"
                }
              ]
            },
            {
              "args": (v2/*: any*/),
              "kind": "FragmentSpread",
              "name": "MyCollectionArtworkGridItem_artwork"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MyCollectionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "0b646e00b14c21cb48c5f3f53219440d";

export default node;

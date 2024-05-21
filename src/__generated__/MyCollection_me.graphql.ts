/**
 * @generated SignedSource<<22b08af6d810353f7c1effc3bab34aa7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollection_me$data = {
  readonly id: string;
  readonly myCollectionConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly _marketPriceInsights: {
          readonly demandRank: number | null | undefined;
        } | null | undefined;
        readonly artist: {
          readonly internalID: string;
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly attributionClass: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly consignmentSubmission: {
          readonly displayText: string | null | undefined;
        } | null | undefined;
        readonly height: string | null | undefined;
        readonly id: string;
        readonly internalID: string;
        readonly medium: string | null | undefined;
        readonly mediumType: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly pricePaid: {
          readonly minor: any;
        } | null | undefined;
        readonly sizeBucket: string | null | undefined;
        readonly title: string | null | undefined;
        readonly width: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"InfiniteScrollArtworksGrid_myCollectionConnection" | "MyCollectionArtworkList_myCollectionConnection">;
  } | null | undefined;
  readonly myCollectionInfo: {
    readonly artworksCount: number;
    readonly includesPurchasedArtworks: boolean;
  } | null | undefined;
  readonly userInterestsConnection: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtists_me">;
  readonly " $fragmentType": "MyCollection_me";
};
export type MyCollection_me$key = {
  readonly " $data"?: MyCollection_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollection_me">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 30,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "myCollectionConnection"
        ]
      }
    ]
  },
  "name": "MyCollection_me",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "MyCollectionInfo",
      "kind": "LinkedField",
      "name": "myCollectionInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "includesPurchasedArtworks",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworksCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionCollectedArtists_me"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "category",
          "value": "COLLECTED_BEFORE"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        },
        {
          "kind": "Literal",
          "name": "interestType",
          "value": "ARTIST"
        }
      ],
      "concreteType": "UserInterestConnection",
      "kind": "LinkedField",
      "name": "userInterestsConnection",
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
      "storageKey": "userInterestsConnection(category:\"COLLECTED_BEFORE\",first:20,interestType:\"ARTIST\")"
    },
    {
      "alias": "myCollectionConnection",
      "args": null,
      "concreteType": "MyCollectionConnection",
      "kind": "LinkedField",
      "name": "__MyCollection_myCollectionConnection_connection",
      "plural": false,
      "selections": [
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
                (v0/*: any*/),
                (v1/*: any*/),
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
                  "concreteType": "ArtworkMedium",
                  "kind": "LinkedField",
                  "name": "mediumType",
                  "plural": false,
                  "selections": (v3/*: any*/),
                  "storageKey": null
                },
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
                  "concreteType": "AttributionClass",
                  "kind": "LinkedField",
                  "name": "attributionClass",
                  "plural": false,
                  "selections": (v3/*: any*/),
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
                  "concreteType": "Artist",
                  "kind": "LinkedField",
                  "name": "artist",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": "_marketPriceInsights",
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
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MyCollectionArtworkList_myCollectionConnection"
        },
        {
          "args": [
            {
              "kind": "Literal",
              "name": "skipArtworkGridItem",
              "value": true
            }
          ],
          "kind": "FragmentSpread",
          "name": "InfiniteScrollArtworksGrid_myCollectionConnection"
        },
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
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "b6b75eef2b854fcad740c9e2f65daed2";

export default node;

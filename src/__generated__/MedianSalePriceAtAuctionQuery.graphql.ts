/**
 * @generated SignedSource<<a2580098d61f574f26d1cc63878dcb9f>>
 * @relayHash a625d0029c70dfd31832586598dd24a3
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a625d0029c70dfd31832586598dd24a3

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MedianSalePriceAtAuctionQuery$variables = {
  after?: string | null | undefined;
  artistID: string;
  artistId: string;
  count?: number | null | undefined;
  endYear?: string | null | undefined;
  startYear?: string | null | undefined;
};
export type MedianSalePriceAtAuctionQuery$data = {
  readonly artist: {
    readonly imageUrl: string | null | undefined;
    readonly internalID: string;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly me: {
    readonly myCollectionInfo: {
      readonly artistsCount: number;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBottomSheet_query" | "MedianSalePriceChartDataContextProvider_query" | "SelectArtistModal_myCollectionInfo">;
};
export type MedianSalePriceAtAuctionQuery = {
  response: MedianSalePriceAtAuctionQuery$data;
  variables: MedianSalePriceAtAuctionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artistID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artistId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "endYear"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startYear"
},
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v7 = {
  "kind": "Variable",
  "name": "artistID",
  "variableName": "artistID"
},
v8 = {
  "kind": "Variable",
  "name": "artistId",
  "variableName": "artistId"
},
v9 = {
  "kind": "Variable",
  "name": "endYear",
  "variableName": "endYear"
},
v10 = {
  "kind": "Variable",
  "name": "startYear",
  "variableName": "startYear"
},
v11 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v15 = {
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
      "name": "artistsCount",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = [
  (v6/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MedianSalePriceAtAuctionQuery",
    "selections": [
      {
        "args": [
          (v6/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ],
        "kind": "FragmentSpread",
        "name": "SelectArtistModal_myCollectionInfo"
      },
      {
        "args": [
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "MedianSalePriceChartDataContextProvider_query"
      },
      {
        "args": [
          (v7/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "CareerHighlightBottomSheet_query"
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "MedianSalePriceAtAuctionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v16/*: any*/),
            "concreteType": "UserInterestConnection",
            "kind": "LinkedField",
            "name": "userInterestsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserInterestEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "initials",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "formattedNationalityAndBirthday",
                            "storageKey": null
                          },
                          (v14/*: any*/)
                        ],
                        "type": "Artist",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
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
                  },
                  (v17/*: any*/)
                ],
                "storageKey": null
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
          },
          {
            "alias": null,
            "args": (v16/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "SelectArtistModal_userInterestsConnection",
            "kind": "LinkedHandle",
            "name": "userInterestsConnection"
          },
          (v17/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "concreteType": "CalendarYearPriceInsights",
        "kind": "LinkedField",
        "name": "analyticsCalendarYearPriceInsights",
        "plural": true,
        "selections": [
          (v18/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CalendarYearMarketPriceInsights",
            "kind": "LinkedField",
            "name": "calendarYearMarketPriceInsights",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePrice",
                "storageKey": null
              },
              (v19/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSold",
                "storageKey": null
              },
              (v17/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          (v8/*: any*/)
        ],
        "concreteType": "PriceInsightConnection",
        "kind": "LinkedField",
        "name": "priceInsights",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketPriceInsights",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSoldLast36Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotsSoldLast96Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePriceLast36Months",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSalePriceLast96Months",
                "storageKey": null
              },
              (v17/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "artistId",
            "variableName": "artistID"
          },
          {
            "kind": "Literal",
            "name": "last",
            "value": 9
          }
        ],
        "concreteType": "AnalyticsArtistSparklineConnection",
        "kind": "LinkedField",
        "name": "analyticsArtistSparklines",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AnalyticsArtistSparklineEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AnalyticsArtistSparkline",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sparkles",
                    "storageKey": null
                  },
                  (v19/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eventDigest",
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
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v17/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "a625d0029c70dfd31832586598dd24a3",
    "metadata": {},
    "name": "MedianSalePriceAtAuctionQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1e78075bb3c076195fa4baf195c68fb9";

export default node;

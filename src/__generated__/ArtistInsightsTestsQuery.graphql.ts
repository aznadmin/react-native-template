/**
 * @generated SignedSource<<524ef7abd57ee00613b7f2000e966d55>>
 * @relayHash 2b0495a79bf49decca9f0cf532f4cdf1
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2b0495a79bf49decca9f0cf532f4cdf1

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistInsightsTestsQuery$variables = Record<PropertyKey, never>;
export type ArtistInsightsTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistInsights_artist">;
  } | null | undefined;
};
export type ArtistInsightsTestsQuery = {
  response: ArtistInsightsTestsQuery$data;
  variables: ArtistInsightsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "allowEmptyCreatedDates",
  "value": true
},
v4 = {
  "kind": "Literal",
  "name": "earliestCreatedYear",
  "value": 1000
},
v5 = {
  "kind": "Literal",
  "name": "latestCreatedYear",
  "value": 2050
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v7 = [
  (v6/*: any*/)
],
v8 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v5/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DATE_DESC"
  },
  {
    "kind": "Literal",
    "name": "state",
    "value": "ALL"
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionResultConnection"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v14 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistInsightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistInsights_artist"
          }
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistInsightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
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
          },
          {
            "alias": "pastAuctionResults",
            "args": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "Literal",
                "name": "state",
                "value": "PAST"
              }
            ],
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsConnection",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "auctionResultsConnection(allowEmptyCreatedDates:true,earliestCreatedYear:1000,latestCreatedYear:2050,state:\"PAST\")"
          },
          {
            "alias": "upcomingAuctionResults",
            "args": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "Literal",
                "name": "state",
                "value": "UPCOMING"
              }
            ],
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsConnection",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "auctionResultsConnection(allowEmptyCreatedDates:true,earliestCreatedYear:1000,latestCreatedYear:2050,state:\"UPCOMING\")"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "YearRange",
                "kind": "LinkedField",
                "name": "createdYearRange",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "saleDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isUpcoming",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "currency",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dateText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artistID",
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
                          (v9/*: any*/),
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isInArtsyAuction",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "externalURL",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotImages",
                        "kind": "LinkedField",
                        "name": "images",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnail",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square140"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:\"square140\")"
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
                                "name": "width",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "aspectRatio",
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
                        "args": null,
                        "concreteType": "AuctionLotEstimate",
                        "kind": "LinkedField",
                        "name": "estimate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "low",
                            "storageKey": null
                          },
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dimensionText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mediumText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "organization",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "boughtIn",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotPerformance",
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "kind": "LinkedField",
                        "name": "priceRealized",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cents",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayUSD",
                            "storageKey": null
                          }
                        ],
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
            "storageKey": "auctionResultsConnection(allowEmptyCreatedDates:true,earliestCreatedYear:1000,first:10,latestCreatedYear:2050,sort:\"DATE_DESC\",state:\"ALL\")"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "filters": [
              "allowEmptyCreatedDates",
              "categories",
              "earliestCreatedYear",
              "keyword",
              "latestCreatedYear",
              "organizations",
              "sizes",
              "sort",
              "state"
            ],
            "handle": "connection",
            "key": "artist_auctionResultsConnection",
            "kind": "LinkedHandle",
            "name": "auctionResultsConnection"
          },
          (v9/*: any*/)
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "id": "2b0495a79bf49decca9f0cf532f4cdf1",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": (v11/*: any*/),
        "artist.auctionResultsConnection": (v12/*: any*/),
        "artist.auctionResultsConnection.createdYearRange": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "YearRange"
        },
        "artist.auctionResultsConnection.createdYearRange.endAt": (v13/*: any*/),
        "artist.auctionResultsConnection.createdYearRange.startAt": (v13/*: any*/),
        "artist.auctionResultsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AuctionResultEdge"
        },
        "artist.auctionResultsConnection.edges.cursor": (v14/*: any*/),
        "artist.auctionResultsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResult"
        },
        "artist.auctionResultsConnection.edges.node.__typename": (v14/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist": (v11/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist.id": (v15/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist.name": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.artistID": (v14/*: any*/),
        "artist.auctionResultsConnection.edges.node.boughtIn": (v17/*: any*/),
        "artist.auctionResultsConnection.edges.node.currency": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.dateText": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.dimensionText": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.estimate": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotEstimate"
        },
        "artist.auctionResultsConnection.edges.node.estimate.display": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.estimate.low": (v18/*: any*/),
        "artist.auctionResultsConnection.edges.node.externalURL": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.id": (v15/*: any*/),
        "artist.auctionResultsConnection.edges.node.images": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotImages"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail.height": (v13/*: any*/),
        "artist.auctionResultsConnection.edges.node.images.thumbnail.url": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.images.thumbnail.width": (v13/*: any*/),
        "artist.auctionResultsConnection.edges.node.internalID": (v15/*: any*/),
        "artist.auctionResultsConnection.edges.node.isInArtsyAuction": (v19/*: any*/),
        "artist.auctionResultsConnection.edges.node.isUpcoming": (v17/*: any*/),
        "artist.auctionResultsConnection.edges.node.mediumText": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.organization": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.performance": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotPerformance"
        },
        "artist.auctionResultsConnection.edges.node.performance.mid": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResultPriceRealized"
        },
        "artist.auctionResultsConnection.edges.node.priceRealized.cents": (v18/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized.display": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized.displayUSD": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.saleDate": (v16/*: any*/),
        "artist.auctionResultsConnection.edges.node.title": (v16/*: any*/),
        "artist.auctionResultsConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artist.auctionResultsConnection.pageInfo.endCursor": (v16/*: any*/),
        "artist.auctionResultsConnection.pageInfo.hasNextPage": (v19/*: any*/),
        "artist.auctionResultsConnection.totalCount": (v13/*: any*/),
        "artist.birthday": (v16/*: any*/),
        "artist.id": (v15/*: any*/),
        "artist.internalID": (v15/*: any*/),
        "artist.name": (v16/*: any*/),
        "artist.pastAuctionResults": (v12/*: any*/),
        "artist.pastAuctionResults.totalCount": (v13/*: any*/),
        "artist.slug": (v15/*: any*/),
        "artist.statuses": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistStatuses"
        },
        "artist.statuses.auctionLots": (v17/*: any*/),
        "artist.upcomingAuctionResults": (v12/*: any*/),
        "artist.upcomingAuctionResults.totalCount": (v13/*: any*/)
      }
    },
    "name": "ArtistInsightsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "bedea12321099e3bd4887bb11b76efc0";

export default node;

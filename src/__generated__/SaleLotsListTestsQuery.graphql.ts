/**
 * @generated SignedSource<<34fb8f545c69d176bc053a858df8cfff>>
 * @relayHash 617e19e14636c1aa8e384cf539c57d3d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 617e19e14636c1aa8e384cf539c57d3d

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleLotsListTestsQuery$variables = {
  saleSlug: string;
};
export type SaleLotsListTestsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SaleLotsList_saleArtworksConnection">;
};
export type SaleLotsListTestsQuery = {
  response: SaleLotsListTestsQuery$data;
  variables: SaleLotsListTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleSlug"
  }
],
v1 = {
  "kind": "Variable",
  "name": "saleID",
  "variableName": "saleSlug"
},
v2 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "FOLLOWED_ARTISTS",
      "ARTIST",
      "MEDIUM",
      "TOTAL"
    ]
  },
  {
    "kind": "Literal",
    "name": "artistIDs",
    "value": ([]/*: any*/)
  },
  {
    "kind": "Literal",
    "name": "estimateRange",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "geneIDs",
    "value": ([]/*: any*/)
  },
  {
    "kind": "Literal",
    "name": "includeArtworksByFollowedArtists",
    "value": false
  },
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "position"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v11 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v14 = {
  "enumValues": null,
  "nullable": true,
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
  "plural": true,
  "type": "Artist"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v21 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleLotsListTestsQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SaleLotsList_saleArtworksConnection"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SaleLotsListTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "SaleArtworksConnection",
        "kind": "LinkedField",
        "name": "saleArtworksConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtworksAggregationResults",
            "kind": "LinkedField",
            "name": "aggregations",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slice",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AggregationCount",
                "kind": "LinkedField",
                "name": "counts",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
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
            "concreteType": "FilterSaleArtworksCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "followedArtists",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "total",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtwork",
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
                  (v4/*: any*/),
                  (v5/*: any*/)
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
              (v4/*: any*/)
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
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
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
                        "name": "artistNames",
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
                        "kind": "ScalarField",
                        "name": "href",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "includeAll",
                            "value": false
                          }
                        ],
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "small",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "small"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"small\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "aspectRatio",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "blurhash",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "large"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"large\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ResizedImageUrl",
                            "kind": "LinkedField",
                            "name": "resized",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "src",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "srcSet",
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "image(includeAll:false)"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "realizedPrice",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "saleMessage",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Sale",
                        "kind": "LinkedField",
                        "name": "sale",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isAuction",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isClosed",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayTimelyAt",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cascadingEndTimeIntervalMinutes",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "extendedBiddingPeriodMinutes",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "extendedBiddingIntervalMinutes",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "startAt",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "kind": "LinkedField",
                        "name": "saleArtwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SaleArtworkCounts",
                            "kind": "LinkedField",
                            "name": "counts",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "bidderPositions",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SaleArtworkCurrentBid",
                            "kind": "LinkedField",
                            "name": "currentBid",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "display",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lotLabel",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "formattedEndDateTime",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lotID",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "extendedBiddingEndAt",
                            "storageKey": null
                          }
                        ],
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
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isEligibleToCreateAlert",
                        "storageKey": null
                      },
                      {
                        "alias": "artistsArray",
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/)
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
                        "selections": [
                          (v9/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkMedium",
                        "kind": "LinkedField",
                        "name": "mediumType",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Gene",
                            "kind": "LinkedField",
                            "name": "filterGene",
                            "plural": false,
                            "selections": [
                              (v8/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availability",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "shallow",
                            "value": true
                          }
                        ],
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": (v11/*: any*/),
                        "storageKey": "artists(shallow:true)"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "widthCm",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "heightCm",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isHangable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isAcquireable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isBiddable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isInquireable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isOfferable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isSaved",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Partner",
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": (v11/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": "preview",
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "square"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"square\")"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": "customArtworkLists",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "default",
                            "value": false
                          },
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 0
                          },
                          {
                            "kind": "Literal",
                            "name": "saves",
                            "value": true
                          }
                        ],
                        "concreteType": "CollectionsConnection",
                        "kind": "LinkedField",
                        "name": "collectionsConnection",
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
                        "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isNode"
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
                    "name": "startCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "ArtworkConnectionInterface",
            "abstractKey": "__isArtworkConnectionInterface"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "saleID",
          "artistIDs",
          "geneIDs",
          "aggregations",
          "estimateRange",
          "includeArtworksByFollowedArtists",
          "sort"
        ],
        "handle": "connection",
        "key": "SaleLotsList_saleArtworksConnection",
        "kind": "LinkedHandle",
        "name": "saleArtworksConnection"
      }
    ]
  },
  "params": {
    "id": "617e19e14636c1aa8e384cf539c57d3d",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "saleArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworksConnection"
        },
        "saleArtworksConnection.__isArtworkConnectionInterface": (v12/*: any*/),
        "saleArtworksConnection.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SaleArtworksAggregationResults"
        },
        "saleArtworksConnection.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "saleArtworksConnection.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "saleArtworksConnection.aggregations.counts.name": (v12/*: any*/),
        "saleArtworksConnection.aggregations.counts.value": (v12/*: any*/),
        "saleArtworksConnection.aggregations.slice": {
          "enumValues": [
            "ARTIST",
            "FOLLOWED_ARTISTS",
            "MEDIUM",
            "TOTAL"
          ],
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkAggregation"
        },
        "saleArtworksConnection.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterSaleArtworksCounts"
        },
        "saleArtworksConnection.counts.followedArtists": (v13/*: any*/),
        "saleArtworksConnection.counts.total": (v13/*: any*/),
        "saleArtworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "saleArtworksConnection.edges.__isNode": (v12/*: any*/),
        "saleArtworksConnection.edges.__typename": (v12/*: any*/),
        "saleArtworksConnection.edges.cursor": (v14/*: any*/),
        "saleArtworksConnection.edges.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "saleArtworksConnection.edges.node.__typename": (v12/*: any*/),
        "saleArtworksConnection.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "saleArtworksConnection.edges.node.artist.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "saleArtworksConnection.edges.node.artist.targetSupply.priority": {
          "enumValues": [
            "FALSE",
            "TRUE"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyPriority"
        },
        "saleArtworksConnection.edges.node.artistNames": (v14/*: any*/),
        "saleArtworksConnection.edges.node.artists": (v16/*: any*/),
        "saleArtworksConnection.edges.node.artists.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.artists.name": (v14/*: any*/),
        "saleArtworksConnection.edges.node.artistsArray": (v16/*: any*/),
        "saleArtworksConnection.edges.node.artistsArray.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.artistsArray.internalID": (v15/*: any*/),
        "saleArtworksConnection.edges.node.artistsArray.name": (v14/*: any*/),
        "saleArtworksConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "saleArtworksConnection.edges.node.attributionClass.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.attributionClass.internalID": (v15/*: any*/),
        "saleArtworksConnection.edges.node.availability": (v14/*: any*/),
        "saleArtworksConnection.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "saleArtworksConnection.edges.node.customArtworkLists.totalCount": (v17/*: any*/),
        "saleArtworksConnection.edges.node.date": (v14/*: any*/),
        "saleArtworksConnection.edges.node.heightCm": (v18/*: any*/),
        "saleArtworksConnection.edges.node.href": (v14/*: any*/),
        "saleArtworksConnection.edges.node.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.image": (v19/*: any*/),
        "saleArtworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "saleArtworksConnection.edges.node.image.blurhash": (v14/*: any*/),
        "saleArtworksConnection.edges.node.image.height": (v17/*: any*/),
        "saleArtworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "saleArtworksConnection.edges.node.image.resized.height": (v17/*: any*/),
        "saleArtworksConnection.edges.node.image.resized.src": (v12/*: any*/),
        "saleArtworksConnection.edges.node.image.resized.srcSet": (v12/*: any*/),
        "saleArtworksConnection.edges.node.image.resized.width": (v17/*: any*/),
        "saleArtworksConnection.edges.node.image.small": (v14/*: any*/),
        "saleArtworksConnection.edges.node.image.url": (v14/*: any*/),
        "saleArtworksConnection.edges.node.image.width": (v17/*: any*/),
        "saleArtworksConnection.edges.node.internalID": (v15/*: any*/),
        "saleArtworksConnection.edges.node.isAcquireable": (v20/*: any*/),
        "saleArtworksConnection.edges.node.isBiddable": (v20/*: any*/),
        "saleArtworksConnection.edges.node.isEligibleToCreateAlert": (v21/*: any*/),
        "saleArtworksConnection.edges.node.isHangable": (v20/*: any*/),
        "saleArtworksConnection.edges.node.isInquireable": (v20/*: any*/),
        "saleArtworksConnection.edges.node.isOfferable": (v20/*: any*/),
        "saleArtworksConnection.edges.node.isSaved": (v20/*: any*/),
        "saleArtworksConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "saleArtworksConnection.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "saleArtworksConnection.edges.node.mediumType.filterGene.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.mediumType.filterGene.name": (v14/*: any*/),
        "saleArtworksConnection.edges.node.mediumType.filterGene.slug": (v15/*: any*/),
        "saleArtworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "saleArtworksConnection.edges.node.partner.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.partner.name": (v14/*: any*/),
        "saleArtworksConnection.edges.node.preview": (v19/*: any*/),
        "saleArtworksConnection.edges.node.preview.url": (v14/*: any*/),
        "saleArtworksConnection.edges.node.realizedPrice": (v14/*: any*/),
        "saleArtworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "saleArtworksConnection.edges.node.sale.cascadingEndTimeIntervalMinutes": (v17/*: any*/),
        "saleArtworksConnection.edges.node.sale.displayTimelyAt": (v14/*: any*/),
        "saleArtworksConnection.edges.node.sale.endAt": (v14/*: any*/),
        "saleArtworksConnection.edges.node.sale.extendedBiddingIntervalMinutes": (v17/*: any*/),
        "saleArtworksConnection.edges.node.sale.extendedBiddingPeriodMinutes": (v17/*: any*/),
        "saleArtworksConnection.edges.node.sale.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.sale.isAuction": (v20/*: any*/),
        "saleArtworksConnection.edges.node.sale.isClosed": (v20/*: any*/),
        "saleArtworksConnection.edges.node.sale.startAt": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "saleArtworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "saleArtworksConnection.edges.node.saleArtwork.counts.bidderPositions": (v13/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "saleArtworksConnection.edges.node.saleArtwork.currentBid.display": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.endAt": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.formattedEndDateTime": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.id": (v15/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.lotID": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.lotLabel": (v14/*: any*/),
        "saleArtworksConnection.edges.node.saleMessage": (v14/*: any*/),
        "saleArtworksConnection.edges.node.slug": (v15/*: any*/),
        "saleArtworksConnection.edges.node.title": (v14/*: any*/),
        "saleArtworksConnection.edges.node.widthCm": (v18/*: any*/),
        "saleArtworksConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "saleArtworksConnection.pageInfo.endCursor": (v14/*: any*/),
        "saleArtworksConnection.pageInfo.hasNextPage": (v21/*: any*/),
        "saleArtworksConnection.pageInfo.startCursor": (v14/*: any*/)
      }
    },
    "name": "SaleLotsListTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e6caed406d12630149d100ea7a00770e";

export default node;

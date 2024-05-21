/**
 * @generated SignedSource<<840da9e62d23636d2bd1635ad565921d>>
 * @relayHash ff2381ce9bdda065f78feacda01c4aa3
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ff2381ce9bdda065f78feacda01c4aa3

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesTestsQuery$variables = Record<PropertyKey, never>;
export type ArtistSeriesTestsQuery$data = {
  readonly artistSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeries_artistSeries">;
  } | null | undefined;
};
export type ArtistSeriesTestsQuery = {
  response: ArtistSeriesTestsQuery$data;
  variables: ArtistSeriesTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
  }
],
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
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": 1
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "COLOR",
      "DIMENSION_RANGE",
      "LOCATION_CITY",
      "MAJOR_PERIOD",
      "MATERIALS_TERMS",
      "MEDIUM",
      "PARTNER",
      "PRICE_RANGE",
      "SIMPLE_PRICE_HISTOGRAM"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-decayed_merch"
    }
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = [
  (v7/*: any*/),
  (v6/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtistSeries"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v18 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistSeries_artistSeries"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "artistIDs",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v1/*: any*/),
              (v7/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFollowed",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "artists(size:1)"
          },
          {
            "alias": "artistSeriesArtworks",
            "args": (v8/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
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
                      (v7/*: any*/),
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
                "concreteType": "FilterArtworksEdge",
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
                      (v6/*: any*/),
                      (v9/*: any*/)
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
                "concreteType": "FilterArtworksCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
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
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
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
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
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
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "image(includeAll:false)"
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
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v1/*: any*/),
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
                              (v1/*: any*/),
                              (v7/*: any*/),
                              (v6/*: any*/)
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
                              (v1/*: any*/),
                              (v6/*: any*/)
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
                                  (v2/*: any*/),
                                  (v7/*: any*/),
                                  (v6/*: any*/)
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
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleMessage",
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
                            "selections": (v10/*: any*/),
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
                            "kind": "ScalarField",
                            "name": "artistNames",
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
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startAt",
                                "storageKey": null
                              },
                              (v6/*: any*/)
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
                                "kind": "ScalarField",
                                "name": "formattedEndDateTime",
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
                                "name": "lotID",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lotLabel",
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "extendedBiddingEndAt",
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "realizedPrice",
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
                              (v12/*: any*/)
                            ],
                            "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v6/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArtworkConnectionInterface",
                "abstractKey": "__isArtworkConnectionInterface"
              }
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\",\"SIMPLE_PRICE_HISTOGRAM\"],first:20,input:{\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "artistSeriesArtworks",
            "args": (v8/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "ArtistSeries_artistSeriesArtworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          },
          {
            "alias": "artist",
            "args": (v5/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 4
                  }
                ],
                "concreteType": "ArtistSeriesConnection",
                "kind": "LinkedField",
                "name": "artistSeriesConnection",
                "plural": false,
                "selections": [
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeriesEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistSeries",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v1/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "featured",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworksCountMessage",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistSeriesConnection(first:4)"
              },
              (v6/*: any*/)
            ],
            "storageKey": "artists(size:1)"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "id": "ff2381ce9bdda065f78feacda01c4aa3",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artistSeries": (v13/*: any*/),
        "artistSeries.artist": (v14/*: any*/),
        "artistSeries.artist.artistSeriesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistSeriesConnection"
        },
        "artistSeries.artist.artistSeriesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtistSeriesEdge"
        },
        "artistSeries.artist.artistSeriesConnection.edges.node": (v13/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.artworksCountMessage": (v15/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.featured": (v16/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.image": (v17/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.image.url": (v15/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.internalID": (v18/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.slug": (v19/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.title": (v19/*: any*/),
        "artistSeries.artist.artistSeriesConnection.totalCount": (v20/*: any*/),
        "artistSeries.artist.id": (v18/*: any*/),
        "artistSeries.artist.internalID": (v18/*: any*/),
        "artistSeries.artist.slug": (v18/*: any*/),
        "artistSeries.artistIDs": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "String"
        },
        "artistSeries.artistSeriesArtworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "artistSeries.artistSeriesArtworks.__isArtworkConnectionInterface": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "artistSeries.artistSeriesArtworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "artistSeries.artistSeriesArtworks.aggregations.counts.count": (v20/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.counts.name": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.counts.value": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.slice": {
          "enumValues": [
            "ARTIST",
            "ARTIST_NATIONALITY",
            "ARTIST_SERIES",
            "ATTRIBUTION_CLASS",
            "COLOR",
            "DIMENSION_RANGE",
            "FOLLOWED_ARTISTS",
            "GALLERY",
            "INSTITUTION",
            "LOCATION_CITY",
            "MAJOR_PERIOD",
            "MATERIALS_TERMS",
            "MEDIUM",
            "MERCHANDISABLE_ARTISTS",
            "PARTNER",
            "PARTNER_CITY",
            "PERIOD",
            "PRICE_RANGE",
            "SIMPLE_PRICE_HISTOGRAM",
            "TOTAL"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtworkAggregation"
        },
        "artistSeries.artistSeriesArtworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "artistSeries.artistSeriesArtworks.counts.total": (v21/*: any*/),
        "artistSeries.artistSeriesArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "artistSeries.artistSeriesArtworks.edges.__isNode": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.__typename": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.cursor": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artistSeries.artistSeriesArtworks.edges.node.__typename": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artistSeries.artistSeriesArtworks.edges.node.artist.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "artistSeries.artistSeriesArtworks.edges.node.artist.targetSupply.priority": {
          "enumValues": [
            "FALSE",
            "TRUE"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyPriority"
        },
        "artistSeries.artistSeriesArtworks.edges.node.artistNames": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artists": (v14/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artists.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artists.name": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artistsArray": (v14/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artistsArray.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artistsArray.internalID": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artistsArray.name": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artistSeries.artistSeriesArtworks.edges.node.attributionClass.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.attributionClass.internalID": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.availability": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "artistSeries.artistSeriesArtworks.edges.node.customArtworkLists.totalCount": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.date": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.heightCm": (v23/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.href": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image": (v17/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artistSeries.artistSeriesArtworks.edges.node.image.blurhash": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artistSeries.artistSeriesArtworks.edges.node.image.resized.height": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.resized.src": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.resized.srcSet": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.resized.width": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.url": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.internalID": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isAcquireable": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isBiddable": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isEligibleToCreateAlert": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isHangable": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isInquireable": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isOfferable": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.isSaved": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "artistSeries.artistSeriesArtworks.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "artistSeries.artistSeriesArtworks.edges.node.mediumType.filterGene.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.mediumType.filterGene.name": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.mediumType.filterGene.slug": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artistSeries.artistSeriesArtworks.edges.node.partner.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.partner.name": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.preview": (v17/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.preview.url": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.realizedPrice": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artistSeries.artistSeriesArtworks.edges.node.sale.cascadingEndTimeIntervalMinutes": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.displayTimelyAt": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.endAt": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.extendedBiddingIntervalMinutes": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.extendedBiddingPeriodMinutes": (v22/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.isAuction": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.isClosed": (v24/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.startAt": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.counts.bidderPositions": (v21/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.currentBid.display": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.endAt": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.extendedBiddingEndAt": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.formattedEndDateTime": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.lotID": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.lotLabel": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleMessage": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.slug": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.title": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.widthCm": (v23/*: any*/),
        "artistSeries.artistSeriesArtworks.id": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artistSeries.artistSeriesArtworks.pageInfo.endCursor": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo.hasNextPage": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo.startCursor": (v15/*: any*/),
        "artistSeries.artists": (v14/*: any*/),
        "artistSeries.artists.id": (v18/*: any*/),
        "artistSeries.artists.image": (v17/*: any*/),
        "artistSeries.artists.image.url": (v15/*: any*/),
        "artistSeries.artists.internalID": (v18/*: any*/),
        "artistSeries.artists.isFollowed": (v24/*: any*/),
        "artistSeries.artists.name": (v15/*: any*/),
        "artistSeries.artists.slug": (v18/*: any*/),
        "artistSeries.description": (v15/*: any*/),
        "artistSeries.image": (v17/*: any*/),
        "artistSeries.image.url": (v15/*: any*/),
        "artistSeries.internalID": (v18/*: any*/),
        "artistSeries.slug": (v19/*: any*/),
        "artistSeries.title": (v19/*: any*/)
      }
    },
    "name": "ArtistSeriesTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "8ed97d99428439041a0238da09bbc06e";

export default node;

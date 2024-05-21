/**
 * @generated SignedSource<<a47710edb6f731583bf3d0e0dae14f41>>
 * @relayHash c4c35ce2c1cee2f0cad8b65bd3bd3861
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c4c35ce2c1cee2f0cad8b65bd3bd3861

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsightsTestsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionArtworkInsightsTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_artwork">;
  } | null | undefined;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_marketPriceInsights">;
  } | null | undefined;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_me">;
  } | null | undefined;
};
export type MyCollectionArtworkInsightsTestsQuery = {
  response: MyCollectionArtworkInsightsTestsQuery$data;
  variables: MyCollectionArtworkInsightsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork-id"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "artistId",
    "value": "some-artist-id"
  },
  {
    "kind": "Literal",
    "name": "medium",
    "value": "painting"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateText",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistID",
  "storageKey": null
},
v9 = [
  (v5/*: any*/),
  (v2/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artist",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUpcoming",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInArtsyAuction",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "externalURL",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v16 = {
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
        (v14/*: any*/),
        (v15/*: any*/),
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
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v18 = {
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
    (v17/*: any*/)
  ],
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dimensionText",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mediumText",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "boughtIn",
  "storageKey": null
},
v23 = {
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
v24 = {
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
    (v17/*: any*/),
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
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleDate",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "demandRank",
  "storageKey": null
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v29 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionResultConnection"
},
v30 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "AuctionResultEdge"
},
v31 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionResult"
},
v32 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v33 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v34 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v35 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v36 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionLotEstimate"
},
v37 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v38 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionLotImages"
},
v39 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v40 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v41 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v42 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v43 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionLotPerformance"
},
v44 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AuctionResultPriceRealized"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkInsightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-artwork-id\")"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_marketPriceInsights"
          }
        ],
        "storageKey": "marketPriceInsights(artistId:\"some-artist-id\",medium:\"painting\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionArtworkInsightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
                    "name": "isP1",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 3
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "DATE_DESC"
                  }
                ],
                "concreteType": "AuctionResultConnection",
                "kind": "LinkedField",
                "name": "auctionResultsConnection",
                "plural": false,
                "selections": [
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
                          (v2/*: any*/),
                          (v4/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v16/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "auctionResultsConnection(first:3,sort:\"DATE_DESC\")"
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasPriceEstimateRequest",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceEstimateRequestable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 6
              }
            ],
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "comparableAuctionResults",
            "plural": false,
            "selections": [
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
                      (v4/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v2/*: any*/),
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v16/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "comparableAuctionResults(first:6)"
          },
          (v26/*: any*/),
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
            "selections": [
              (v5/*: any*/)
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
            "selections": (v9/*: any*/),
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
            "name": "images",
            "plural": true,
            "selections": [
              {
                "alias": "url",
                "args": null,
                "kind": "ScalarField",
                "name": "imageURL",
                "storageKey": null
              }
            ],
            "storageKey": "images(includeAll:true)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionSize",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metric",
            "storageKey": null
          },
          (v14/*: any*/),
          (v15/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "depth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "provenance",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "artworkLocation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "submissionId",
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
                "name": "annualLotsSold",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "annualValueSoldDisplayText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sellThroughRate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liquidityRankDisplayText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "medianSaleOverEstimatePercentage",
                "storageKey": null
              },
              (v27/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "demandRankDisplayText",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"some-artwork-id\")"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          (v27/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "marketPriceInsights(artistId:\"some-artist-id\",medium:\"painting\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "c4c35ce2c1cee2f0cad8b65bd3bd3861",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artist": (v28/*: any*/),
        "artwork.artist.auctionResultsConnection": (v29/*: any*/),
        "artwork.artist.auctionResultsConnection.edges": (v30/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node": (v31/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.artist": (v28/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.artist.id": (v32/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.artist.name": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.artistID": (v34/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.boughtIn": (v35/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.currency": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.dateText": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.dimensionText": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.estimate": (v36/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.estimate.display": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.estimate.low": (v37/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.externalURL": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.id": (v32/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images": (v38/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images.thumbnail": (v39/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images.thumbnail.aspectRatio": (v40/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images.thumbnail.height": (v41/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images.thumbnail.url": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.images.thumbnail.width": (v41/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.internalID": (v32/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.isInArtsyAuction": (v42/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.isUpcoming": (v35/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.mediumText": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.organization": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.performance": (v43/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.performance.mid": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.priceRealized": (v44/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.priceRealized.cents": (v37/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.priceRealized.display": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.priceRealized.displayUSD": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.saleDate": (v33/*: any*/),
        "artwork.artist.auctionResultsConnection.edges.node.title": (v33/*: any*/),
        "artwork.artist.id": (v32/*: any*/),
        "artwork.artist.internalID": (v32/*: any*/),
        "artwork.artist.name": (v33/*: any*/),
        "artwork.artist.slug": (v32/*: any*/),
        "artwork.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "artwork.artist.targetSupply.isP1": (v35/*: any*/),
        "artwork.artworkLocation": (v33/*: any*/),
        "artwork.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artwork.attributionClass.id": (v32/*: any*/),
        "artwork.attributionClass.name": (v33/*: any*/),
        "artwork.comparableAuctionResults": (v29/*: any*/),
        "artwork.comparableAuctionResults.edges": (v30/*: any*/),
        "artwork.comparableAuctionResults.edges.node": (v31/*: any*/),
        "artwork.comparableAuctionResults.edges.node.artist": (v28/*: any*/),
        "artwork.comparableAuctionResults.edges.node.artist.id": (v32/*: any*/),
        "artwork.comparableAuctionResults.edges.node.artist.name": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.artistID": (v34/*: any*/),
        "artwork.comparableAuctionResults.edges.node.boughtIn": (v35/*: any*/),
        "artwork.comparableAuctionResults.edges.node.currency": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.dateText": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.dimensionText": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.estimate": (v36/*: any*/),
        "artwork.comparableAuctionResults.edges.node.estimate.display": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.estimate.low": (v37/*: any*/),
        "artwork.comparableAuctionResults.edges.node.externalURL": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.id": (v32/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images": (v38/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images.thumbnail": (v39/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images.thumbnail.aspectRatio": (v40/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images.thumbnail.height": (v41/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images.thumbnail.url": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.images.thumbnail.width": (v41/*: any*/),
        "artwork.comparableAuctionResults.edges.node.internalID": (v32/*: any*/),
        "artwork.comparableAuctionResults.edges.node.isInArtsyAuction": (v42/*: any*/),
        "artwork.comparableAuctionResults.edges.node.isUpcoming": (v35/*: any*/),
        "artwork.comparableAuctionResults.edges.node.mediumText": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.organization": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.performance": (v43/*: any*/),
        "artwork.comparableAuctionResults.edges.node.performance.mid": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.priceRealized": (v44/*: any*/),
        "artwork.comparableAuctionResults.edges.node.priceRealized.cents": (v37/*: any*/),
        "artwork.comparableAuctionResults.edges.node.priceRealized.display": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.priceRealized.displayUSD": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.saleDate": (v33/*: any*/),
        "artwork.comparableAuctionResults.edges.node.title": (v33/*: any*/),
        "artwork.date": (v33/*: any*/),
        "artwork.depth": (v33/*: any*/),
        "artwork.editionNumber": (v33/*: any*/),
        "artwork.editionSize": (v33/*: any*/),
        "artwork.hasPriceEstimateRequest": (v35/*: any*/),
        "artwork.height": (v33/*: any*/),
        "artwork.id": (v32/*: any*/),
        "artwork.images": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Image"
        },
        "artwork.images.url": (v33/*: any*/),
        "artwork.internalID": (v32/*: any*/),
        "artwork.isPriceEstimateRequestable": (v35/*: any*/),
        "artwork.marketPriceInsights": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkPriceInsights"
        },
        "artwork.marketPriceInsights.annualLotsSold": (v41/*: any*/),
        "artwork.marketPriceInsights.annualValueSoldDisplayText": (v33/*: any*/),
        "artwork.marketPriceInsights.demandRank": (v37/*: any*/),
        "artwork.marketPriceInsights.demandRankDisplayText": (v33/*: any*/),
        "artwork.marketPriceInsights.liquidityRankDisplayText": (v33/*: any*/),
        "artwork.marketPriceInsights.medianSaleOverEstimatePercentage": (v37/*: any*/),
        "artwork.marketPriceInsights.sellThroughRate": (v37/*: any*/),
        "artwork.medium": (v33/*: any*/),
        "artwork.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "artwork.mediumType.name": (v33/*: any*/),
        "artwork.metric": (v33/*: any*/),
        "artwork.provenance": (v33/*: any*/),
        "artwork.slug": (v32/*: any*/),
        "artwork.submissionId": (v33/*: any*/),
        "artwork.title": (v33/*: any*/),
        "artwork.width": (v33/*: any*/),
        "marketPriceInsights": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MarketPriceInsights"
        },
        "marketPriceInsights.demandRank": (v37/*: any*/),
        "marketPriceInsights.id": (v32/*: any*/),
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.email": (v33/*: any*/),
        "me.id": (v32/*: any*/),
        "me.name": (v33/*: any*/),
        "me.phone": (v33/*: any*/)
      }
    },
    "name": "MyCollectionArtworkInsightsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "25ca90d753715be45e726e2e44363636";

export default node;

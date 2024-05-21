/**
 * @generated SignedSource<<73f976afaac1271aee9179ed3ea85962>>
 * @relayHash 09a8f6f133e1a1377a9e094f61615323
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 09a8f6f133e1a1377a9e094f61615323

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkQuery$variables = {
  artistInternalID: string;
  artworkId: string;
  medium: string;
};
export type MyCollectionArtworkQuery$data = {
  readonly _marketPriceInsights: {
    readonly annualLotsSold: number | null | undefined;
  } | null | undefined;
  readonly artwork: {
    readonly artist: {
      readonly auctionResultsConnection: {
        readonly totalCount: number | null | undefined;
      } | null | undefined;
      readonly formattedNationalityAndBirthday: string | null | undefined;
      readonly initials: string | null | undefined;
      readonly internalID: string;
      readonly targetSupply: {
        readonly isP1: boolean | null | undefined;
      };
    } | null | undefined;
    readonly artistNames: string | null | undefined;
    readonly artworkLocation: string | null | undefined;
    readonly attributionClass: {
      readonly name: string | null | undefined;
      readonly shortDescription: string | null | undefined;
    } | null | undefined;
    readonly category: string | null | undefined;
    readonly comparableAuctionResults: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
    readonly confidentialNotes: string | null | undefined;
    readonly consignmentSubmission: {
      readonly displayText: string | null | undefined;
    } | null | undefined;
    readonly date: string | null | undefined;
    readonly depth: string | null | undefined;
    readonly dimensions: {
      readonly cm: string | null | undefined;
      readonly in: string | null | undefined;
    } | null | undefined;
    readonly editionNumber: string | null | undefined;
    readonly editionSize: string | null | undefined;
    readonly height: string | null | undefined;
    readonly id: string;
    readonly images: ReadonlyArray<{
      readonly height: number | null | undefined;
      readonly imageURL: string | null | undefined;
      readonly internalID: string | null | undefined;
      readonly isDefault: boolean | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined> | null | undefined;
    readonly internalID: string;
    readonly isEdition: boolean | null | undefined;
    readonly marketPriceInsights: {
      readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_artworkPriceInsights" | "MyCollectionArtworkDemandIndex_artworkPriceInsights">;
    } | null | undefined;
    readonly medium: string | null | undefined;
    readonly metric: string | null | undefined;
    readonly pricePaid: {
      readonly currencyCode: string;
      readonly display: string | null | undefined;
      readonly minor: any;
    } | null | undefined;
    readonly provenance: string | null | undefined;
    readonly slug: string;
    readonly title: string | null | undefined;
    readonly width: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_artwork" | "MyCollectionArtworkHeader_artwork" | "MyCollectionArtworkInsights_artwork">;
  } | null | undefined;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_marketPriceInsights" | "MyCollectionArtworkInsights_marketPriceInsights">;
  } | null | undefined;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_me" | "MyCollectionArtworkInsights_me">;
  } | null | undefined;
};
export type MyCollectionArtworkQuery = {
  response: MyCollectionArtworkQuery$data;
  variables: MyCollectionArtworkQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artistInternalID"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artworkId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "medium"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkId"
  }
],
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
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "initials",
  "storageKey": null
},
v8 = [
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "confidentialNotes",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayText",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworkConsignmentSubmission",
  "kind": "LinkedField",
  "name": "consignmentSubmission",
  "plural": false,
  "selections": [
    (v14/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "Money",
  "kind": "LinkedField",
  "name": "pricePaid",
  "plural": false,
  "selections": [
    (v16/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currencyCode",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "dimensions",
  "kind": "LinkedField",
  "name": "dimensions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "in",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cm",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionSize",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionNumber",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shortDescription",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v27 = [
  {
    "kind": "Literal",
    "name": "includeAll",
    "value": true
  }
],
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDefault",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageURL",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEdition",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artworkLocation",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "provenance",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v38 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v39 = [
  {
    "kind": "Variable",
    "name": "artistId",
    "variableName": "artistInternalID"
  },
  {
    "kind": "Variable",
    "name": "medium",
    "variableName": "medium"
  }
],
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "annualLotsSold",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateText",
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistID",
  "storageKey": null
},
v45 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artist",
  "plural": false,
  "selections": [
    (v24/*: any*/),
    (v26/*: any*/)
  ],
  "storageKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUpcoming",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInArtsyAuction",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "externalURL",
  "storageKey": null
},
v49 = {
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
        (v23/*: any*/),
        (v30/*: any*/),
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
v50 = {
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
    (v16/*: any*/)
  ],
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dimensionText",
  "storageKey": null
},
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mediumText",
  "storageKey": null
},
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organization",
  "storageKey": null
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "boughtIn",
  "storageKey": null
},
v55 = {
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
v56 = {
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
    (v16/*: any*/),
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
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleDate",
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "demandRank",
  "storageKey": null
},
v59 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworkPriceInsights",
  "kind": "LinkedField",
  "name": "marketPriceInsights",
  "plural": false,
  "selections": [
    (v40/*: any*/),
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
    (v58/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRankDisplayText",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "AuctionResultConnection",
                "kind": "LinkedField",
                "name": "auctionResultsConnection",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": "auctionResultsConnection(first:3,sort:\"DATE_DESC\")"
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v15/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              (v24/*: any*/),
              (v25/*: any*/)
            ],
            "storageKey": null
          },
          (v26/*: any*/),
          {
            "alias": null,
            "args": (v27/*: any*/),
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/),
              (v23/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": "images(includeAll:true)"
          },
          (v4/*: any*/),
          (v31/*: any*/),
          (v32/*: any*/),
          (v33/*: any*/),
          (v34/*: any*/),
          (v35/*: any*/),
          (v36/*: any*/),
          (v37/*: any*/),
          (v30/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkHeader_artwork"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_artwork"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkAbout_artwork"
          },
          {
            "alias": null,
            "args": (v38/*: any*/),
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "comparableAuctionResults",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "comparableAuctionResults(first:6)"
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "MyCollectionArtworkArtistMarket_artworkPriceInsights"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MyCollectionArtworkDemandIndex_artworkPriceInsights"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v39/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_marketPriceInsights"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkAbout_marketPriceInsights"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "_marketPriceInsights",
        "args": (v39/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          (v40/*: any*/)
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkAbout_me"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "MyCollectionArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v26/*: any*/),
              (v41/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isPersonalArtist",
                "storageKey": null
              },
              (v36/*: any*/),
              (v24/*: any*/),
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
                          (v26/*: any*/),
                          (v4/*: any*/),
                          (v42/*: any*/),
                          (v43/*: any*/),
                          (v44/*: any*/),
                          (v45/*: any*/),
                          (v46/*: any*/),
                          (v47/*: any*/),
                          (v48/*: any*/),
                          (v49/*: any*/),
                          (v50/*: any*/),
                          (v51/*: any*/),
                          (v52/*: any*/),
                          (v53/*: any*/),
                          (v54/*: any*/),
                          (v55/*: any*/),
                          (v56/*: any*/),
                          (v57/*: any*/),
                          (v37/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
                ],
                "storageKey": "auctionResultsConnection(first:3,sort:\"DATE_DESC\")"
              },
              {
                "alias": "articles",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "PUBLISHED_AT_DESC"
                  }
                ],
                "concreteType": "ArticleConnection",
                "kind": "LinkedField",
                "name": "articlesConnection",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArticleEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Article",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v26/*: any*/),
                          (v4/*: any*/),
                          (v36/*: any*/),
                          (v41/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "publishedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnailImage",
                            "plural": false,
                            "selections": [
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
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "thumbnailTitle",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "vertical",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "byline",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "articlesConnection(first:10,sort:\"PUBLISHED_AT_DESC\")"
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v15/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/)
            ],
            "storageKey": null
          },
          (v26/*: any*/),
          {
            "alias": null,
            "args": (v27/*: any*/),
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/),
              (v23/*: any*/),
              (v4/*: any*/),
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
          (v4/*: any*/),
          (v31/*: any*/),
          (v32/*: any*/),
          (v33/*: any*/),
          (v34/*: any*/),
          (v35/*: any*/),
          (v36/*: any*/),
          (v37/*: any*/),
          (v30/*: any*/),
          {
            "alias": null,
            "args": (v27/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "figures",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isArtworkFigures"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "blurhash",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": "largeImageURL",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "larger"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"larger\")"
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 590
                      },
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": [
                          "normalized",
                          "larger",
                          "large"
                        ]
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 590
                      }
                    ],
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
                      }
                    ],
                    "storageKey": "resized(height:590,version:[\"normalized\",\"larger\",\"large\"],width:590)"
                  },
                  (v30/*: any*/),
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageVersions",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "versions",
                    "storageKey": null
                  },
                  (v28/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DeepZoom",
                    "kind": "LinkedField",
                    "name": "deepZoom",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "image",
                        "args": null,
                        "concreteType": "DeepZoomImage",
                        "kind": "LinkedField",
                        "name": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "tileSize",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "TileSize",
                            "storageKey": null
                          },
                          {
                            "alias": "url",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Url",
                            "storageKey": null
                          },
                          {
                            "alias": "format",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Format",
                            "storageKey": null
                          },
                          {
                            "alias": "size",
                            "args": null,
                            "concreteType": "DeepZoomImageSize",
                            "kind": "LinkedField",
                            "name": "Size",
                            "plural": false,
                            "selections": [
                              {
                                "alias": "width",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "Width",
                                "storageKey": null
                              },
                              {
                                "alias": "height",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "Height",
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
                "type": "Image",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "videoWidth",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "width",
                    "storageKey": null
                  },
                  {
                    "alias": "videoHeight",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "height",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "playerUrl",
                    "storageKey": null
                  },
                  (v26/*: any*/)
                ],
                "type": "Video",
                "abstractKey": null
              }
            ],
            "storageKey": "figures(includeAll:true)"
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
                "name": "state",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "stateLabel",
                "storageKey": null
              },
              (v14/*: any*/)
            ],
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
            "args": (v38/*: any*/),
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
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v26/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/),
                      (v46/*: any*/),
                      (v47/*: any*/),
                      (v48/*: any*/),
                      (v49/*: any*/),
                      (v50/*: any*/),
                      (v51/*: any*/),
                      (v52/*: any*/),
                      (v53/*: any*/),
                      (v54/*: any*/),
                      (v55/*: any*/),
                      (v56/*: any*/),
                      (v57/*: any*/),
                      (v37/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": "comparableAuctionResults(first:6)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkMedium",
            "kind": "LinkedField",
            "name": "mediumType",
            "plural": false,
            "selections": [
              (v24/*: any*/)
            ],
            "storageKey": null
          },
          (v59/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionOf",
            "storageKey": null
          },
          (v59/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v39/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          (v58/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lowRangeCents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "highRangeCents",
            "storageKey": null
          },
          (v26/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "_marketPriceInsights",
        "args": (v39/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          (v40/*: any*/),
          (v26/*: any*/)
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
          (v24/*: any*/),
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
          (v26/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "09a8f6f133e1a1377a9e094f61615323",
    "metadata": {},
    "name": "MyCollectionArtworkQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "cc02f3b040365a17086865bde59eebd2";

export default node;

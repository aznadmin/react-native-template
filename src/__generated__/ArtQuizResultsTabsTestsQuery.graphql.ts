/**
 * @generated SignedSource<<5272522def6c6d9f45e1adf0cad59450>>
 * @relayHash eaca4859d97a8a23c13bc8330c0f146a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID eaca4859d97a8a23c13bc8330c0f146a

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizResultsTabsTestsQuery$variables = Record<PropertyKey, never>;
export type ArtQuizResultsTabsTestsQuery$data = {
  readonly me: {
    readonly quiz: {
      readonly savedArtworks: ReadonlyArray<{
        readonly __typename: "Artwork";
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ArtQuizResultsTabs_me">;
  } | null | undefined;
};
export type ArtQuizResultsTabsTestsQuery = {
  response: ArtQuizResultsTabsTestsQuery$data;
  variables: ArtQuizResultsTabsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
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
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v5 = {
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
v6 = [
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
v7 = {
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
    (v3/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ResizedImageUrl",
      "kind": "LinkedField",
      "name": "resized",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": "image(includeAll:false)"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "name": "isEligibleToCreateAlert",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": "artistsArray",
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v9/*: any*/),
    (v11/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "AttributionClass",
  "kind": "LinkedField",
  "name": "attributionClass",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
},
v14 = {
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
        (v11/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "availability",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v18 = [
  (v11/*: any*/),
  (v1/*: any*/)
],
v19 = {
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
  "selections": (v18/*: any*/),
  "storageKey": "artists(shallow:true)"
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "widthCm",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heightCm",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isHangable",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAcquireable",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isBiddable",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInquireable",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isOfferable",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAuction",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isClosed",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "Sale",
  "kind": "LinkedField",
  "name": "sale",
  "plural": false,
  "selections": [
    (v30/*: any*/),
    (v31/*: any*/),
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
    (v32/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "storageKey": null
},
v34 = {
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
v35 = {
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
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extendedBiddingEndAt",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtwork",
  "kind": "LinkedField",
  "name": "saleArtwork",
  "plural": false,
  "selections": [
    (v34/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "formattedEndDateTime",
      "storageKey": null
    },
    (v35/*: any*/),
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
    (v32/*: any*/),
    (v36/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v18/*: any*/),
  "storageKey": null
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "realizedPrice",
  "storageKey": null
},
v40 = {
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
v41 = {
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
},
v42 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v43 = {
  "enumValues": null,
  "nullable": false,
  "plural": true,
  "type": "Artwork"
},
v44 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v45 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v46 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AttributionClass"
},
v47 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CollectionsConnection"
},
v48 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v49 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v50 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v51 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v52 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ResizedImageUrl"
},
v53 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v54 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v55 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v56 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkMedium"
},
v57 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Gene"
},
v58 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Partner"
},
v59 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Sale"
},
v60 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtwork"
},
v61 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCounts"
},
v62 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v63 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCurrentBid"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizResultsTabsTestsQuery",
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
            "args": null,
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Artwork",
                "kind": "LinkedField",
                "name": "savedArtworks",
                "plural": true,
                "selections": [
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtQuizResultsTabs_me"
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
    "name": "ArtQuizResultsTabsTestsQuery",
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
            "args": null,
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Artwork",
                "kind": "LinkedField",
                "name": "savedArtworks",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v33/*: any*/),
                  (v37/*: any*/),
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v40/*: any*/),
                  (v41/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "artist",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v29/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFollowed",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "formattedNationalityAndBirthday",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistBlurb",
                        "kind": "LinkedField",
                        "name": "biographyBlurb",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "text",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 15
                          },
                          {
                            "kind": "Literal",
                            "name": "sort",
                            "value": "PUBLISHED_AT_DESC"
                          }
                        ],
                        "concreteType": "ArtworkConnection",
                        "kind": "LinkedField",
                        "name": "artworksConnection",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ArtworkEdge",
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
                                  (v8/*: any*/),
                                  (v9/*: any*/),
                                  (v2/*: any*/),
                                  (v10/*: any*/),
                                  (v12/*: any*/),
                                  (v13/*: any*/),
                                  (v14/*: any*/),
                                  (v1/*: any*/),
                                  (v15/*: any*/),
                                  (v23/*: any*/),
                                  (v24/*: any*/),
                                  (v25/*: any*/),
                                  (v26/*: any*/),
                                  (v29/*: any*/),
                                  (v28/*: any*/),
                                  (v19/*: any*/),
                                  (v20/*: any*/),
                                  (v21/*: any*/),
                                  (v22/*: any*/),
                                  (v16/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "kind": "LinkedField",
                                    "name": "image",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "width",
                                            "value": 155
                                          }
                                        ],
                                        "concreteType": "ResizedImageUrl",
                                        "kind": "LinkedField",
                                        "name": "resized",
                                        "plural": false,
                                        "selections": (v6/*: any*/),
                                        "storageKey": "resized(width:155)"
                                      },
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isUnlisted",
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
                                      (v30/*: any*/),
                                      (v31/*: any*/),
                                      (v32/*: any*/),
                                      (v1/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v17/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "SaleArtwork",
                                    "kind": "LinkedField",
                                    "name": "saleArtwork",
                                    "plural": false,
                                    "selections": [
                                      (v34/*: any*/),
                                      (v35/*: any*/),
                                      (v32/*: any*/),
                                      (v36/*: any*/),
                                      (v1/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v38/*: any*/),
                                  (v39/*: any*/),
                                  (v27/*: any*/),
                                  (v40/*: any*/),
                                  (v41/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "artworksConnection(first:15,sort:\"PUBLISHED_AT_DESC\")"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Artwork",
                "kind": "LinkedField",
                "name": "recommendedArtworks",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v33/*: any*/),
                  (v37/*: any*/),
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v40/*: any*/),
                  (v41/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "eaca4859d97a8a23c13bc8330c0f146a",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v42/*: any*/),
        "me.quiz": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Quiz"
        },
        "me.quiz.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks": (v43/*: any*/),
        "me.quiz.recommendedArtworks.artistNames": (v44/*: any*/),
        "me.quiz.recommendedArtworks.artists": (v45/*: any*/),
        "me.quiz.recommendedArtworks.artists.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.artists.name": (v44/*: any*/),
        "me.quiz.recommendedArtworks.artistsArray": (v45/*: any*/),
        "me.quiz.recommendedArtworks.artistsArray.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.artistsArray.internalID": (v42/*: any*/),
        "me.quiz.recommendedArtworks.artistsArray.name": (v44/*: any*/),
        "me.quiz.recommendedArtworks.attributionClass": (v46/*: any*/),
        "me.quiz.recommendedArtworks.attributionClass.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.attributionClass.internalID": (v42/*: any*/),
        "me.quiz.recommendedArtworks.availability": (v44/*: any*/),
        "me.quiz.recommendedArtworks.customArtworkLists": (v47/*: any*/),
        "me.quiz.recommendedArtworks.customArtworkLists.totalCount": (v48/*: any*/),
        "me.quiz.recommendedArtworks.date": (v44/*: any*/),
        "me.quiz.recommendedArtworks.heightCm": (v49/*: any*/),
        "me.quiz.recommendedArtworks.href": (v44/*: any*/),
        "me.quiz.recommendedArtworks.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.image": (v50/*: any*/),
        "me.quiz.recommendedArtworks.image.aspectRatio": (v51/*: any*/),
        "me.quiz.recommendedArtworks.image.blurhash": (v44/*: any*/),
        "me.quiz.recommendedArtworks.image.resized": (v52/*: any*/),
        "me.quiz.recommendedArtworks.image.resized.height": (v48/*: any*/),
        "me.quiz.recommendedArtworks.image.resized.src": (v53/*: any*/),
        "me.quiz.recommendedArtworks.image.resized.srcSet": (v53/*: any*/),
        "me.quiz.recommendedArtworks.image.resized.width": (v48/*: any*/),
        "me.quiz.recommendedArtworks.image.url": (v44/*: any*/),
        "me.quiz.recommendedArtworks.internalID": (v42/*: any*/),
        "me.quiz.recommendedArtworks.isAcquireable": (v54/*: any*/),
        "me.quiz.recommendedArtworks.isBiddable": (v54/*: any*/),
        "me.quiz.recommendedArtworks.isEligibleToCreateAlert": (v55/*: any*/),
        "me.quiz.recommendedArtworks.isHangable": (v54/*: any*/),
        "me.quiz.recommendedArtworks.isInquireable": (v54/*: any*/),
        "me.quiz.recommendedArtworks.isOfferable": (v54/*: any*/),
        "me.quiz.recommendedArtworks.isSaved": (v54/*: any*/),
        "me.quiz.recommendedArtworks.mediumType": (v56/*: any*/),
        "me.quiz.recommendedArtworks.mediumType.filterGene": (v57/*: any*/),
        "me.quiz.recommendedArtworks.mediumType.filterGene.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.mediumType.filterGene.name": (v44/*: any*/),
        "me.quiz.recommendedArtworks.mediumType.filterGene.slug": (v42/*: any*/),
        "me.quiz.recommendedArtworks.partner": (v58/*: any*/),
        "me.quiz.recommendedArtworks.partner.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.partner.name": (v44/*: any*/),
        "me.quiz.recommendedArtworks.preview": (v50/*: any*/),
        "me.quiz.recommendedArtworks.preview.url": (v44/*: any*/),
        "me.quiz.recommendedArtworks.realizedPrice": (v44/*: any*/),
        "me.quiz.recommendedArtworks.sale": (v59/*: any*/),
        "me.quiz.recommendedArtworks.sale.cascadingEndTimeIntervalMinutes": (v48/*: any*/),
        "me.quiz.recommendedArtworks.sale.displayTimelyAt": (v44/*: any*/),
        "me.quiz.recommendedArtworks.sale.endAt": (v44/*: any*/),
        "me.quiz.recommendedArtworks.sale.extendedBiddingIntervalMinutes": (v48/*: any*/),
        "me.quiz.recommendedArtworks.sale.extendedBiddingPeriodMinutes": (v48/*: any*/),
        "me.quiz.recommendedArtworks.sale.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.sale.isAuction": (v54/*: any*/),
        "me.quiz.recommendedArtworks.sale.isClosed": (v54/*: any*/),
        "me.quiz.recommendedArtworks.sale.startAt": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork": (v60/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.counts": (v61/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.counts.bidderPositions": (v62/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.currentBid": (v63/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.currentBid.display": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.endAt": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.extendedBiddingEndAt": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.formattedEndDateTime": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.id": (v42/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.lotID": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleArtwork.lotLabel": (v44/*: any*/),
        "me.quiz.recommendedArtworks.saleMessage": (v44/*: any*/),
        "me.quiz.recommendedArtworks.slug": (v42/*: any*/),
        "me.quiz.recommendedArtworks.title": (v44/*: any*/),
        "me.quiz.recommendedArtworks.widthCm": (v49/*: any*/),
        "me.quiz.savedArtworks": (v43/*: any*/),
        "me.quiz.savedArtworks.__typename": (v53/*: any*/),
        "me.quiz.savedArtworks.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "me.quiz.savedArtworks.artist.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "me.quiz.savedArtworks.artist.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artistNames": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artists": (v45/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artists.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artists.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artistsArray": (v45/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artistsArray.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artistsArray.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.artistsArray.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.attributionClass": (v46/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.attributionClass.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.attributionClass.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.availability": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.customArtworkLists": (v47/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.customArtworkLists.totalCount": (v48/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.date": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.heightCm": (v49/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.href": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image": (v50/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.aspectRatio": (v51/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.blurhash": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.resized": (v52/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.resized.height": (v48/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.resized.src": (v53/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.resized.srcSet": (v53/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.resized.width": (v48/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.image.url": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isAcquireable": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isBiddable": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isEligibleToCreateAlert": (v55/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isHangable": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isInquireable": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isOfferable": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isSaved": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.isUnlisted": (v55/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.mediumType": (v56/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.mediumType.filterGene": (v57/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.mediumType.filterGene.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.mediumType.filterGene.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.mediumType.filterGene.slug": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.partner": (v58/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.partner.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.partner.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.preview": (v50/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.preview.url": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.realizedPrice": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.sale": (v59/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.sale.endAt": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.sale.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.sale.isAuction": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.sale.isClosed": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork": (v60/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.counts": (v61/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.counts.bidderPositions": (v62/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.currentBid": (v63/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.currentBid.display": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.endAt": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleArtwork.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.saleMessage": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.slug": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.title": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.artworksConnection.edges.node.widthCm": (v49/*: any*/),
        "me.quiz.savedArtworks.artist.biographyBlurb": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistBlurb"
        },
        "me.quiz.savedArtworks.artist.biographyBlurb.text": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.formattedNationalityAndBirthday": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.href": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.artist.isFollowed": (v54/*: any*/),
        "me.quiz.savedArtworks.artist.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artist.slug": (v42/*: any*/),
        "me.quiz.savedArtworks.artistNames": (v44/*: any*/),
        "me.quiz.savedArtworks.artists": (v45/*: any*/),
        "me.quiz.savedArtworks.artists.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artists.name": (v44/*: any*/),
        "me.quiz.savedArtworks.artistsArray": (v45/*: any*/),
        "me.quiz.savedArtworks.artistsArray.id": (v42/*: any*/),
        "me.quiz.savedArtworks.artistsArray.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.artistsArray.name": (v44/*: any*/),
        "me.quiz.savedArtworks.attributionClass": (v46/*: any*/),
        "me.quiz.savedArtworks.attributionClass.id": (v42/*: any*/),
        "me.quiz.savedArtworks.attributionClass.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.availability": (v44/*: any*/),
        "me.quiz.savedArtworks.customArtworkLists": (v47/*: any*/),
        "me.quiz.savedArtworks.customArtworkLists.totalCount": (v48/*: any*/),
        "me.quiz.savedArtworks.date": (v44/*: any*/),
        "me.quiz.savedArtworks.heightCm": (v49/*: any*/),
        "me.quiz.savedArtworks.href": (v44/*: any*/),
        "me.quiz.savedArtworks.id": (v42/*: any*/),
        "me.quiz.savedArtworks.image": (v50/*: any*/),
        "me.quiz.savedArtworks.image.aspectRatio": (v51/*: any*/),
        "me.quiz.savedArtworks.image.blurhash": (v44/*: any*/),
        "me.quiz.savedArtworks.image.resized": (v52/*: any*/),
        "me.quiz.savedArtworks.image.resized.height": (v48/*: any*/),
        "me.quiz.savedArtworks.image.resized.src": (v53/*: any*/),
        "me.quiz.savedArtworks.image.resized.srcSet": (v53/*: any*/),
        "me.quiz.savedArtworks.image.resized.width": (v48/*: any*/),
        "me.quiz.savedArtworks.image.url": (v44/*: any*/),
        "me.quiz.savedArtworks.internalID": (v42/*: any*/),
        "me.quiz.savedArtworks.isAcquireable": (v54/*: any*/),
        "me.quiz.savedArtworks.isBiddable": (v54/*: any*/),
        "me.quiz.savedArtworks.isEligibleToCreateAlert": (v55/*: any*/),
        "me.quiz.savedArtworks.isHangable": (v54/*: any*/),
        "me.quiz.savedArtworks.isInquireable": (v54/*: any*/),
        "me.quiz.savedArtworks.isOfferable": (v54/*: any*/),
        "me.quiz.savedArtworks.isSaved": (v54/*: any*/),
        "me.quiz.savedArtworks.mediumType": (v56/*: any*/),
        "me.quiz.savedArtworks.mediumType.filterGene": (v57/*: any*/),
        "me.quiz.savedArtworks.mediumType.filterGene.id": (v42/*: any*/),
        "me.quiz.savedArtworks.mediumType.filterGene.name": (v44/*: any*/),
        "me.quiz.savedArtworks.mediumType.filterGene.slug": (v42/*: any*/),
        "me.quiz.savedArtworks.partner": (v58/*: any*/),
        "me.quiz.savedArtworks.partner.id": (v42/*: any*/),
        "me.quiz.savedArtworks.partner.name": (v44/*: any*/),
        "me.quiz.savedArtworks.preview": (v50/*: any*/),
        "me.quiz.savedArtworks.preview.url": (v44/*: any*/),
        "me.quiz.savedArtworks.realizedPrice": (v44/*: any*/),
        "me.quiz.savedArtworks.sale": (v59/*: any*/),
        "me.quiz.savedArtworks.sale.cascadingEndTimeIntervalMinutes": (v48/*: any*/),
        "me.quiz.savedArtworks.sale.displayTimelyAt": (v44/*: any*/),
        "me.quiz.savedArtworks.sale.endAt": (v44/*: any*/),
        "me.quiz.savedArtworks.sale.extendedBiddingIntervalMinutes": (v48/*: any*/),
        "me.quiz.savedArtworks.sale.extendedBiddingPeriodMinutes": (v48/*: any*/),
        "me.quiz.savedArtworks.sale.id": (v42/*: any*/),
        "me.quiz.savedArtworks.sale.isAuction": (v54/*: any*/),
        "me.quiz.savedArtworks.sale.isClosed": (v54/*: any*/),
        "me.quiz.savedArtworks.sale.startAt": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork": (v60/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.counts": (v61/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.counts.bidderPositions": (v62/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.currentBid": (v63/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.currentBid.display": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.endAt": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.extendedBiddingEndAt": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.formattedEndDateTime": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.id": (v42/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.lotID": (v44/*: any*/),
        "me.quiz.savedArtworks.saleArtwork.lotLabel": (v44/*: any*/),
        "me.quiz.savedArtworks.saleMessage": (v44/*: any*/),
        "me.quiz.savedArtworks.slug": (v42/*: any*/),
        "me.quiz.savedArtworks.title": (v44/*: any*/),
        "me.quiz.savedArtworks.widthCm": (v49/*: any*/)
      }
    },
    "name": "ArtQuizResultsTabsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "0c2556514f5f5db23515b46f087001de";

export default node;

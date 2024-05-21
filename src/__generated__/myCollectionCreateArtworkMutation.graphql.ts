/**
 * @generated SignedSource<<a1260818b0ccad2e94ef337db2d0c1e8>>
 * @relayHash 68f3df61e87ed6d66cb60af3b58acf41
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 68f3df61e87ed6d66cb60af3b58acf41

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ArtworkAttributionClassType = "LIMITED_EDITION" | "OPEN_EDITION" | "UNIQUE" | "UNKNOWN_EDITION" | "%future added value";
export type ArtworkImportSource = "CONVECTION" | "MY_COLLECTION" | "%future added value";
export type MyCollectionCreateArtworkInput = {
  artistIds?: ReadonlyArray<string | null | undefined> | null | undefined;
  artists?: ReadonlyArray<MyCollectionArtistInput | null | undefined> | null | undefined;
  artworkLocation?: string | null | undefined;
  attributionClass?: ArtworkAttributionClassType | null | undefined;
  category?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  collectorLocation?: EditableLocation | null | undefined;
  confidentialNotes?: string | null | undefined;
  costCurrencyCode?: string | null | undefined;
  costMajor?: number | null | undefined;
  costMinor?: number | null | undefined;
  date?: string | null | undefined;
  depth?: string | null | undefined;
  editionNumber?: string | null | undefined;
  editionSize?: string | null | undefined;
  externalImageUrls?: ReadonlyArray<string | null | undefined> | null | undefined;
  height?: string | null | undefined;
  importSource?: ArtworkImportSource | null | undefined;
  isEdition?: boolean | null | undefined;
  medium?: string | null | undefined;
  metric?: string | null | undefined;
  pricePaidCents?: any | null | undefined;
  pricePaidCurrency?: string | null | undefined;
  provenance?: string | null | undefined;
  submissionId?: string | null | undefined;
  title: string;
  width?: string | null | undefined;
};
export type MyCollectionArtistInput = {
  displayName?: string | null | undefined;
};
export type EditableLocation = {
  address?: string | null | undefined;
  address2?: string | null | undefined;
  city?: string | null | undefined;
  coordinates?: ReadonlyArray<number> | null | undefined;
  country?: string | null | undefined;
  countryCode?: string | null | undefined;
  postalCode?: string | null | undefined;
  state?: string | null | undefined;
  stateCode?: string | null | undefined;
  summary?: string | null | undefined;
};
export type myCollectionCreateArtworkMutation$variables = {
  input: MyCollectionCreateArtworkInput;
};
export type myCollectionCreateArtworkMutation$data = {
  readonly myCollectionCreateArtwork: {
    readonly artworkOrError: {
      readonly artworkEdge?: {
        readonly __id: string;
        readonly node: {
          readonly artist: {
            readonly formattedNationalityAndBirthday: string | null | undefined;
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
          readonly hasMarketPriceInsights: boolean | null | undefined;
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
        } | null | undefined;
      } | null | undefined;
      readonly mutationError?: {
        readonly message: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type myCollectionCreateArtworkMutation = {
  response: myCollectionCreateArtworkMutation$data;
  variables: myCollectionCreateArtworkMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasMarketPriceInsights",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v5 = {
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "confidentialNotes",
  "storageKey": null
},
v9 = {
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
v10 = {
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
      "name": "display",
      "storageKey": null
    },
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
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v13 = {
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
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionSize",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionNumber",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shortDescription",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v21 = {
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageURL",
      "storageKey": null
    },
    (v20/*: any*/),
    (v16/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": "images(includeAll:true)"
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEdition",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artworkLocation",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "provenance",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v29 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "kind": "LinkedField",
      "name": "mutationError",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MyCollectionArtworkMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "myCollectionCreateArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionCreateArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionCreateArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MyCollectionEdge",
                    "kind": "LinkedField",
                    "name": "artworkEdge",
                    "plural": false,
                    "selections": [
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
                            "args": null,
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artist",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AttributionClass",
                            "kind": "LinkedField",
                            "name": "attributionClass",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
                              (v18/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v19/*: any*/),
                          (v21/*: any*/),
                          (v3/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v20/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "MyCollectionArtworkMutationSuccess",
                "abstractKey": null
              },
              (v30/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "myCollectionCreateArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionCreateArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionCreateArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MyCollectionEdge",
                    "kind": "LinkedField",
                    "name": "artworkEdge",
                    "plural": false,
                    "selections": [
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
                            "args": null,
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artist",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AttributionClass",
                            "kind": "LinkedField",
                            "name": "attributionClass",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
                              (v18/*: any*/),
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v19/*: any*/),
                          (v21/*: any*/),
                          (v3/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v20/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "MyCollectionArtworkMutationSuccess",
                "abstractKey": null
              },
              (v30/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "68f3df61e87ed6d66cb60af3b58acf41",
    "metadata": {},
    "name": "myCollectionCreateArtworkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "11dc6fc8d9d4c2cc81407cc391eba508";

export default node;

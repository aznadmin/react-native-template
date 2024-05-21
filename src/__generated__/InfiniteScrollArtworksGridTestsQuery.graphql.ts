/**
 * @generated SignedSource<<e1318fbffe6729d879c361de1b7f792c>>
 * @relayHash 5d0f3cabf5cceef78a05643407269286
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 5d0f3cabf5cceef78a05643407269286

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InfiniteScrollArtworksGridTestsQuery$variables = Record<PropertyKey, never>;
export type InfiniteScrollArtworksGridTestsQuery$data = {
  readonly artworksConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly image: {
          readonly aspectRatio: number;
        } | null | undefined;
        readonly slug: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
      readonly startCursor: string | null | undefined;
    };
  } | null | undefined;
};
export type InfiniteScrollArtworksGridTestsQuery$rawResponse = {
  readonly artworksConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artistNames: string | null | undefined;
        readonly artists: ReadonlyArray<{
          readonly id: string;
          readonly name: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly artistsArray: ReadonlyArray<{
          readonly id: string;
          readonly internalID: string;
          readonly name: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly attributionClass: {
          readonly id: string;
          readonly internalID: string;
        } | null | undefined;
        readonly availability: string | null | undefined;
        readonly customArtworkLists: {
          readonly totalCount: number | null | undefined;
        } | null | undefined;
        readonly date: string | null | undefined;
        readonly heightCm: number | null | undefined;
        readonly href: string | null | undefined;
        readonly id: string;
        readonly image: {
          readonly aspectRatio: number;
          readonly blurhash: string | null | undefined;
          readonly resized: {
            readonly height: number | null | undefined;
            readonly src: string;
            readonly srcSet: string;
            readonly width: number | null | undefined;
          } | null | undefined;
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly isAcquireable: boolean | null | undefined;
        readonly isBiddable: boolean | null | undefined;
        readonly isEligibleToCreateAlert: boolean;
        readonly isHangable: boolean | null | undefined;
        readonly isInquireable: boolean | null | undefined;
        readonly isOfferable: boolean | null | undefined;
        readonly isSaved: boolean | null | undefined;
        readonly mediumType: {
          readonly filterGene: {
            readonly id: string;
            readonly name: string | null | undefined;
            readonly slug: string;
          } | null | undefined;
        } | null | undefined;
        readonly partner: {
          readonly id: string;
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly preview: {
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly realizedPrice: string | null | undefined;
        readonly sale: {
          readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
          readonly displayTimelyAt: string | null | undefined;
          readonly endAt: string | null | undefined;
          readonly extendedBiddingIntervalMinutes: number | null | undefined;
          readonly extendedBiddingPeriodMinutes: number | null | undefined;
          readonly id: string;
          readonly isAuction: boolean | null | undefined;
          readonly isClosed: boolean | null | undefined;
          readonly startAt: string | null | undefined;
        } | null | undefined;
        readonly saleArtwork: {
          readonly counts: {
            readonly bidderPositions: any | null | undefined;
          } | null | undefined;
          readonly currentBid: {
            readonly display: string | null | undefined;
          } | null | undefined;
          readonly endAt: string | null | undefined;
          readonly extendedBiddingEndAt: string | null | undefined;
          readonly formattedEndDateTime: string | null | undefined;
          readonly id: string;
          readonly lotID: string | null | undefined;
          readonly lotLabel: string | null | undefined;
        } | null | undefined;
        readonly saleMessage: string | null | undefined;
        readonly slug: string;
        readonly title: string | null | undefined;
        readonly widthCm: number | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly id: string;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
      readonly startCursor: string | null | undefined;
    };
  } | null | undefined;
};
export type InfiniteScrollArtworksGridTestsQuery = {
  rawResponse: InfiniteScrollArtworksGridTestsQuery$rawResponse;
  response: InfiniteScrollArtworksGridTestsQuery$data;
  variables: InfiniteScrollArtworksGridTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v1 = {
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
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "includeAll",
    "value": false
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
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
  (v7/*: any*/),
  (v3/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "InfiniteScrollArtworksGridTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "FilterArtworksConnection",
        "kind": "LinkedField",
        "name": "artworksConnection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": (v4/*: any*/),
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "storageKey": "image(includeAll:false)"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ArtworkGridItem_artwork"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artworksConnection(first:10)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InfiniteScrollArtworksGridTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "FilterArtworksConnection",
        "kind": "LinkedField",
        "name": "artworksConnection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": (v4/*: any*/),
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  (v6/*: any*/),
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v3/*: any*/)
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
                      (v6/*: any*/),
                      (v3/*: any*/)
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
                          (v3/*: any*/)
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
                    "selections": (v8/*: any*/),
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
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startAt",
                        "storageKey": null
                      },
                      (v3/*: any*/)
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
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "extendedBiddingEndAt",
                        "storageKey": null
                      },
                      (v3/*: any*/)
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
                    "selections": (v8/*: any*/),
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
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "artworksConnection(first:10)"
      }
    ]
  },
  "params": {
    "id": "5d0f3cabf5cceef78a05643407269286",
    "metadata": {},
    "name": "InfiniteScrollArtworksGridTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "943329beab5f56210475352fd60dc9bf";

export default node;

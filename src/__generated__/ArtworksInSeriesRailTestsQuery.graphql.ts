/**
 * @generated SignedSource<<00be0c35ec6ee274af35a63c8ff619e4>>
 * @relayHash ad67b3cb65bf9d364ab29cb6576342a0
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ad67b3cb65bf9d364ab29cb6576342a0

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworksInSeriesRailTestsQuery$variables = Record<PropertyKey, never>;
export type ArtworksInSeriesRailTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworksInSeriesRail_artwork">;
  } | null | undefined;
};
export type ArtworksInSeriesRailTestsQuery$rawResponse = {
  readonly artwork: {
    readonly artistSeriesConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly filterArtworksConnection: {
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
                readonly isUnlisted: boolean;
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
                  readonly endAt: string | null | undefined;
                  readonly id: string;
                  readonly isAuction: boolean | null | undefined;
                  readonly isClosed: boolean | null | undefined;
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
                  readonly id: string;
                } | null | undefined;
                readonly saleMessage: string | null | undefined;
                readonly slug: string;
                readonly title: string | null | undefined;
                readonly widthCm: number | null | undefined;
              } | null | undefined;
            } | null | undefined> | null | undefined;
            readonly id: string;
          } | null | undefined;
          readonly internalID: string;
          readonly slug: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly internalID: string;
    readonly slug: string;
  } | null | undefined;
};
export type ArtworksInSeriesRailTestsQuery = {
  rawResponse: ArtworksInSeriesRailTestsQuery$rawResponse;
  response: ArtworksInSeriesRailTestsQuery$data;
  variables: ArtworksInSeriesRailTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork"
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
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v14 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v16 = {
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
    "name": "ArtworksInSeriesRailTestsQuery",
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
            "name": "ArtworksInSeriesRail_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworksInSeriesRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": [
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
                      {
                        "alias": null,
                        "args": [
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
                        "concreteType": "FilterArtworksConnection",
                        "kind": "LinkedField",
                        "name": "filterArtworksConnection",
                        "plural": false,
                        "selections": [
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
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  (v1/*: any*/),
                                  (v2/*: any*/),
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
                                      (v1/*: any*/),
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
                                          (v2/*: any*/),
                                          (v3/*: any*/),
                                          (v4/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v4/*: any*/),
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
                                    "name": "href",
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
                                    "selections": (v5/*: any*/),
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
                                    "name": "date",
                                    "storageKey": null
                                  },
                                  {
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
                                        "storageKey": "resized(width:155)"
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
                                      (v6/*: any*/),
                                      (v4/*: any*/)
                                    ],
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
                                      (v6/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "extendedBiddingEndAt",
                                        "storageKey": null
                                      },
                                      (v4/*: any*/)
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
                                    "selections": (v5/*: any*/),
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
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isSaved",
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
                          (v4/*: any*/)
                        ],
                        "storageKey": "filterArtworksConnection(first:20,input:{\"sort\":\"-decayed_merch\"})"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistSeriesConnection(first:1)"
          },
          (v4/*: any*/)
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ]
  },
  "params": {
    "id": "ad67b3cb65bf9d364ab29cb6576342a0",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": (v7/*: any*/),
        "artwork.artistSeriesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistSeriesConnection"
        },
        "artwork.artistSeriesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtistSeriesEdge"
        },
        "artwork.artistSeriesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistSeries"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "FilterArtworksEdge"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node": (v7/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artistNames": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artists": (v9/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artists.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artists.name": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artistsArray": (v9/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artistsArray.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artistsArray.internalID": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.artistsArray.name": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.attributionClass.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.attributionClass.internalID": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.availability": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.customArtworkLists.totalCount": (v11/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.date": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.heightCm": (v12/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.href": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image": (v13/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.blurhash": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.resized.height": (v11/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.resized.src": (v14/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.resized.srcSet": (v14/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.resized.width": (v11/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.image.url": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.internalID": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isAcquireable": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isBiddable": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isEligibleToCreateAlert": (v16/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isHangable": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isInquireable": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isOfferable": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isSaved": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.isUnlisted": (v16/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.mediumType.filterGene.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.mediumType.filterGene.name": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.mediumType.filterGene.slug": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.partner.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.partner.name": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.preview": (v13/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.preview.url": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.realizedPrice": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.sale.endAt": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.sale.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.sale.isAuction": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.sale.isClosed": (v15/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.currentBid.display": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.endAt": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleArtwork.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.saleMessage": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.slug": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.title": (v8/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.edges.node.widthCm": (v12/*: any*/),
        "artwork.artistSeriesConnection.edges.node.filterArtworksConnection.id": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.internalID": (v10/*: any*/),
        "artwork.artistSeriesConnection.edges.node.slug": (v14/*: any*/),
        "artwork.id": (v10/*: any*/),
        "artwork.internalID": (v10/*: any*/),
        "artwork.slug": (v10/*: any*/)
      }
    },
    "name": "ArtworksInSeriesRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e3f00a4cb7efcf8b149225b17481794d";

export default node;

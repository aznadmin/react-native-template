/**
 * @generated SignedSource<<58c3ee812d1928c9ecef1a1f990c443b>>
 * @relayHash 9d3995c015efed4dd58d99892bd4652f
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9d3995c015efed4dd58d99892bd4652f

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairFollowedArtistsRailTestsQuery$variables = {
  fairID: string;
};
export type FairFollowedArtistsRailTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairFollowedArtistsRail_fair">;
  } | null | undefined;
};
export type FairFollowedArtistsRailTestsQuery$rawResponse = {
  readonly fair: {
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
    readonly id: string;
    readonly internalID: string;
    readonly slug: string;
  } | null | undefined;
};
export type FairFollowedArtistsRailTestsQuery = {
  rawResponse: FairFollowedArtistsRailTestsQuery$rawResponse;
  response: FairFollowedArtistsRailTestsQuery$data;
  variables: FairFollowedArtistsRailTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fairID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fairID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FairFollowedArtistsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairFollowedArtistsRail_fair"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FairFollowedArtistsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  "includeArtworksByFollowedArtists": true
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
                      (v2/*: any*/),
                      (v3/*: any*/),
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
                          (v2/*: any*/),
                          (v4/*: any*/),
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
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/)
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
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
                        "selections": (v6/*: any*/),
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
                          (v7/*: any*/),
                          (v5/*: any*/)
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
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "extendedBiddingEndAt",
                            "storageKey": null
                          },
                          (v5/*: any*/)
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
                        "selections": (v6/*: any*/),
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
              (v5/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(first:20,input:{\"includeArtworksByFollowedArtists\":true})"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "9d3995c015efed4dd58d99892bd4652f",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "fair.filterArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "fair.filterArtworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "FilterArtworksEdge"
        },
        "fair.filterArtworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "fair.filterArtworksConnection.edges.node.artistNames": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists": (v9/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists.name": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray": (v9/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.internalID": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.name": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "fair.filterArtworksConnection.edges.node.attributionClass.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.attributionClass.internalID": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.availability": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "fair.filterArtworksConnection.edges.node.customArtworkLists.totalCount": (v11/*: any*/),
        "fair.filterArtworksConnection.edges.node.date": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.heightCm": (v12/*: any*/),
        "fair.filterArtworksConnection.edges.node.href": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.image": (v13/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "fair.filterArtworksConnection.edges.node.image.blurhash": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "fair.filterArtworksConnection.edges.node.image.resized.height": (v11/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.src": (v14/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.srcSet": (v14/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.width": (v11/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.url": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.internalID": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.isAcquireable": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isBiddable": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isEligibleToCreateAlert": (v16/*: any*/),
        "fair.filterArtworksConnection.edges.node.isHangable": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isInquireable": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isOfferable": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isSaved": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.isUnlisted": (v16/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.name": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.slug": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "fair.filterArtworksConnection.edges.node.partner.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.partner.name": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.preview": (v13/*: any*/),
        "fair.filterArtworksConnection.edges.node.preview.url": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.realizedPrice": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "fair.filterArtworksConnection.edges.node.sale.endAt": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.isAuction": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.isClosed": (v15/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "fair.filterArtworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "fair.filterArtworksConnection.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "fair.filterArtworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "fair.filterArtworksConnection.edges.node.saleArtwork.currentBid.display": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.endAt": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.id": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleMessage": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.slug": (v10/*: any*/),
        "fair.filterArtworksConnection.edges.node.title": (v8/*: any*/),
        "fair.filterArtworksConnection.edges.node.widthCm": (v12/*: any*/),
        "fair.filterArtworksConnection.id": (v10/*: any*/),
        "fair.id": (v10/*: any*/),
        "fair.internalID": (v10/*: any*/),
        "fair.slug": (v10/*: any*/)
      }
    },
    "name": "FairFollowedArtistsRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2063a2cf6c405bbbe06fc94476fc9f67";

export default node;

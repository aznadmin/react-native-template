/**
 * @generated SignedSource<<886fe92ef21fe9bc661b30adecf20521>>
 * @relayHash b08de3b6ee8013fc81ac73f83429e843
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b08de3b6ee8013fc81ac73f83429e843

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkHeaderTestsQuery$variables = Record<PropertyKey, never>;
export type ArtworkHeaderTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkHeader_artwork">;
  } | null | undefined;
};
export type ArtworkHeaderTestsQuery = {
  response: ArtworkHeaderTestsQuery$data;
  variables: ArtworkHeaderTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "abbas-kiarostami-untitled-7"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
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
  "name": "href",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v11 = {
  "enumValues": null,
  "nullable": false,
  "plural": true,
  "type": "ArtworkFigures"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "String"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkHeaderTestsQuery",
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
            "name": "ArtworkHeader_artwork"
          }
        ],
        "storageKey": "artwork(id:\"abbas-kiarostami-untitled-7\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkHeaderTestsQuery",
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
              (v1/*: any*/),
              (v2/*: any*/),
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
                "name": "cascadingEndTimeIntervalMinutes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isPreview",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liveStartAt",
                "storageKey": null
              },
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
          (v1/*: any*/),
          (v2/*: any*/),
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
            "name": "slug",
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
            "name": "date",
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
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
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
            "name": "isInAuction",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isForSale",
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
                "args": [
                  {
                    "kind": "Literal",
                    "name": "trim",
                    "value": true
                  }
                ],
                "kind": "ScalarField",
                "name": "lotLabel",
                "storageKey": "lotLabel(trim:true)"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lotID",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "extendedBiddingEndAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endedAt",
                "storageKey": null
              },
              (v1/*: any*/)
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
            "kind": "ScalarField",
            "name": "culturalMaker",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "figures",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isArtworkFigures"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "blurhash",
                    "storageKey": null
                  },
                  (v4/*: any*/),
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
                  },
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
                  (v1/*: any*/)
                ],
                "type": "Video",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "images",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "figures",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageURL",
                    "storageKey": null
                  }
                ],
                "type": "Image",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/)
                ],
                "type": "Video",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSetVideoAsCover",
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibilityLevel",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"abbas-kiarostami-untitled-7\")"
      }
    ]
  },
  "params": {
    "id": "b08de3b6ee8013fc81ac73f83429e843",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artistNames": (v8/*: any*/),
        "artwork.artists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "artwork.artists.href": (v8/*: any*/),
        "artwork.artists.id": (v9/*: any*/),
        "artwork.artists.name": (v8/*: any*/),
        "artwork.culturalMaker": (v8/*: any*/),
        "artwork.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "artwork.customArtworkLists.totalCount": (v10/*: any*/),
        "artwork.date": (v8/*: any*/),
        "artwork.figures": (v11/*: any*/),
        "artwork.figures.__isArtworkFigures": (v12/*: any*/),
        "artwork.figures.__typename": (v12/*: any*/),
        "artwork.figures.blurhash": (v8/*: any*/),
        "artwork.figures.deepZoom": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "DeepZoom"
        },
        "artwork.figures.deepZoom.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "DeepZoomImage"
        },
        "artwork.figures.deepZoom.image.format": (v8/*: any*/),
        "artwork.figures.deepZoom.image.size": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "DeepZoomImageSize"
        },
        "artwork.figures.deepZoom.image.size.height": (v10/*: any*/),
        "artwork.figures.deepZoom.image.size.width": (v10/*: any*/),
        "artwork.figures.deepZoom.image.tileSize": (v10/*: any*/),
        "artwork.figures.deepZoom.image.url": (v8/*: any*/),
        "artwork.figures.height": (v10/*: any*/),
        "artwork.figures.id": (v9/*: any*/),
        "artwork.figures.imageVersions": (v13/*: any*/),
        "artwork.figures.internalID": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "artwork.figures.isDefault": (v14/*: any*/),
        "artwork.figures.largeImageURL": (v8/*: any*/),
        "artwork.figures.playerUrl": (v12/*: any*/),
        "artwork.figures.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artwork.figures.resized.src": (v12/*: any*/),
        "artwork.figures.url": (v8/*: any*/),
        "artwork.figures.versions": (v13/*: any*/),
        "artwork.figures.videoHeight": (v15/*: any*/),
        "artwork.figures.videoWidth": (v15/*: any*/),
        "artwork.figures.width": (v10/*: any*/),
        "artwork.heightCm": (v16/*: any*/),
        "artwork.href": (v8/*: any*/),
        "artwork.id": (v9/*: any*/),
        "artwork.image": (v17/*: any*/),
        "artwork.image.url": (v8/*: any*/),
        "artwork.images": (v11/*: any*/),
        "artwork.images.__typename": (v12/*: any*/),
        "artwork.images.id": (v9/*: any*/),
        "artwork.images.imageURL": (v8/*: any*/),
        "artwork.internalID": (v9/*: any*/),
        "artwork.isForSale": (v14/*: any*/),
        "artwork.isHangable": (v14/*: any*/),
        "artwork.isInAuction": (v14/*: any*/),
        "artwork.isSaved": (v14/*: any*/),
        "artwork.isSetVideoAsCover": (v14/*: any*/),
        "artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.partner.id": (v9/*: any*/),
        "artwork.partner.name": (v8/*: any*/),
        "artwork.preview": (v17/*: any*/),
        "artwork.preview.url": (v8/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.cascadingEndTimeIntervalMinutes": (v10/*: any*/),
        "artwork.sale.endAt": (v8/*: any*/),
        "artwork.sale.extendedBiddingIntervalMinutes": (v10/*: any*/),
        "artwork.sale.extendedBiddingPeriodMinutes": (v10/*: any*/),
        "artwork.sale.id": (v9/*: any*/),
        "artwork.sale.internalID": (v9/*: any*/),
        "artwork.sale.isAuction": (v14/*: any*/),
        "artwork.sale.isClosed": (v14/*: any*/),
        "artwork.sale.isPreview": (v14/*: any*/),
        "artwork.sale.liveStartAt": (v8/*: any*/),
        "artwork.sale.startAt": (v8/*: any*/),
        "artwork.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.saleArtwork.endAt": (v8/*: any*/),
        "artwork.saleArtwork.endedAt": (v8/*: any*/),
        "artwork.saleArtwork.extendedBiddingEndAt": (v8/*: any*/),
        "artwork.saleArtwork.id": (v9/*: any*/),
        "artwork.saleArtwork.lotID": (v8/*: any*/),
        "artwork.saleArtwork.lotLabel": (v8/*: any*/),
        "artwork.saleMessage": (v8/*: any*/),
        "artwork.slug": (v9/*: any*/),
        "artwork.title": (v8/*: any*/),
        "artwork.visibilityLevel": {
          "enumValues": [
            "LISTED",
            "UNLISTED"
          ],
          "nullable": true,
          "plural": false,
          "type": "Visibility"
        },
        "artwork.widthCm": (v16/*: any*/)
      }
    },
    "name": "ArtworkHeaderTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b6edb4c8a25fa41a862baa3ca2ed45fa";

export default node;

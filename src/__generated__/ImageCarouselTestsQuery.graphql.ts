/**
 * @generated SignedSource<<30c644361614db1565e14a383d5d01eb>>
 * @relayHash 3717410f1ff948c129abba4672319c30
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3717410f1ff948c129abba4672319c30

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageCarouselTestsQuery$variables = Record<PropertyKey, never>;
export type ImageCarouselTestsQuery$data = {
  readonly artwork: {
    readonly figures: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_figures">;
    }>;
  } | null | undefined;
};
export type ImageCarouselTestsQuery$rawResponse = {
  readonly artwork: {
    readonly figures: ReadonlyArray<{
      readonly __typename: "Image";
      readonly __isArtworkFigures: "Image";
      readonly blurhash: string | null | undefined;
      readonly deepZoom: {
        readonly image: {
          readonly format: string | null | undefined;
          readonly size: {
            readonly height: number | null | undefined;
            readonly width: number | null | undefined;
          } | null | undefined;
          readonly tileSize: number | null | undefined;
          readonly url: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
      readonly height: number | null | undefined;
      readonly imageVersions: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly internalID: string | null | undefined;
      readonly isDefault: boolean | null | undefined;
      readonly largeImageURL: string | null | undefined;
      readonly resized: {
        readonly src: string;
      } | null | undefined;
      readonly url: string | null | undefined;
      readonly versions: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly width: number | null | undefined;
    } | {
      readonly __typename: "Video";
      readonly __isArtworkFigures: "Video";
      readonly id: string;
      readonly playerUrl: string;
      readonly videoHeight: number;
      readonly videoWidth: number;
    } | {
      readonly __typename: string;
      readonly __isArtworkFigures: string;
    }>;
    readonly id: string;
  } | null | undefined;
};
export type ImageCarouselTestsQuery = {
  rawResponse: ImageCarouselTestsQuery$rawResponse;
  response: ImageCarouselTestsQuery$data;
  variables: ImageCarouselTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "unused"
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ImageCarouselTestsQuery",
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "figures",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ImageCarousel_figures"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"unused\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ImageCarouselTestsQuery",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "internalID",
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
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"unused\")"
      }
    ]
  },
  "params": {
    "id": "3717410f1ff948c129abba4672319c30",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.figures": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArtworkFigures"
        },
        "artwork.figures.__isArtworkFigures": (v2/*: any*/),
        "artwork.figures.__typename": (v2/*: any*/),
        "artwork.figures.blurhash": (v3/*: any*/),
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
        "artwork.figures.deepZoom.image.format": (v3/*: any*/),
        "artwork.figures.deepZoom.image.size": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "DeepZoomImageSize"
        },
        "artwork.figures.deepZoom.image.size.height": (v4/*: any*/),
        "artwork.figures.deepZoom.image.size.width": (v4/*: any*/),
        "artwork.figures.deepZoom.image.tileSize": (v4/*: any*/),
        "artwork.figures.deepZoom.image.url": (v3/*: any*/),
        "artwork.figures.height": (v4/*: any*/),
        "artwork.figures.id": (v5/*: any*/),
        "artwork.figures.imageVersions": (v6/*: any*/),
        "artwork.figures.internalID": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "artwork.figures.isDefault": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "artwork.figures.largeImageURL": (v3/*: any*/),
        "artwork.figures.playerUrl": (v2/*: any*/),
        "artwork.figures.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artwork.figures.resized.src": (v2/*: any*/),
        "artwork.figures.url": (v3/*: any*/),
        "artwork.figures.versions": (v6/*: any*/),
        "artwork.figures.videoHeight": (v7/*: any*/),
        "artwork.figures.videoWidth": (v7/*: any*/),
        "artwork.figures.width": (v4/*: any*/),
        "artwork.id": (v5/*: any*/)
      }
    },
    "name": "ImageCarouselTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "60b4a36f3545ed4d66c8b7a8eb1e218d";

export default node;

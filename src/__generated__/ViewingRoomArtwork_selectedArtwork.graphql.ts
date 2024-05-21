/**
 * @generated SignedSource<<35de26e7993101c229234d0fa877b3a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomArtwork_selectedArtwork$data = {
  readonly additionalInformation: string | null | undefined;
  readonly artistNames: string | null | undefined;
  readonly date: string | null | undefined;
  readonly figures: ReadonlyArray<{
    readonly __typename: "Image";
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
    readonly playerUrl: string;
    readonly videoHeight: number;
    readonly videoWidth: number;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  }>;
  readonly heightCm: number | null | undefined;
  readonly href: string | null | undefined;
  readonly id: string;
  readonly image: {
    readonly aspectRatio: number;
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly isHangable: boolean | null | undefined;
  readonly saleMessage: string | null | undefined;
  readonly slug: string;
  readonly title: string | null | undefined;
  readonly widthCm: number | null | undefined;
  readonly " $fragmentType": "ViewingRoomArtwork_selectedArtwork";
};
export type ViewingRoomArtwork_selectedArtwork$key = {
  readonly " $data"?: ViewingRoomArtwork_selectedArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomArtwork_selectedArtwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "version",
    "value": "larger"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomArtwork_selectedArtwork",
  "selections": [
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
      "name": "artistNames",
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
      "name": "additionalInformation",
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
      "name": "href",
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
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": (v0/*: any*/),
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"larger\")"
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
      "name": "isHangable",
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
      "name": "id",
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
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/),
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
              "args": (v0/*: any*/),
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
            (v1/*: any*/),
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
            }
          ],
          "type": "Video",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "57d01bb6be36ffaef5ffb8dc985c6498";

export default node;

/**
 * @generated SignedSource<<8f125c4d3b79fa5379138bcacb42b7db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageCarousel_figures$data = ReadonlyArray<{
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
  readonly " $fragmentType": "ImageCarousel_figures";
} | {
  readonly __typename: "Video";
  readonly playerUrl: string;
  readonly videoHeight: number;
  readonly videoWidth: number;
  readonly " $fragmentType": "ImageCarousel_figures";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ImageCarousel_figures";
}>;
export type ImageCarousel_figures$key = ReadonlyArray<{
  readonly " $data"?: ImageCarousel_figures$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_figures">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ImageCarousel_figures",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
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
        (v0/*: any*/),
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
  "type": "ArtworkFigures",
  "abstractKey": "__isArtworkFigures"
};
})();

(node as any).hash = "76892dd5b3b459981615190fbe5a4df0";

export default node;

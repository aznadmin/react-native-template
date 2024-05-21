/**
 * @generated SignedSource<<2af6d236da86035a73cf483e84d82fae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemArtwork_artwork$data = {
  readonly artistNames: string | null | undefined;
  readonly date: string | null | undefined;
  readonly href: string | null | undefined;
  readonly image: {
    readonly blurhash: string | null | undefined;
    readonly thumbnailUrl: string | null | undefined;
  } | null | undefined;
  readonly partner: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly saleMessage: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ItemArtwork_artwork";
};
export type ItemArtwork_artwork$key = {
  readonly " $data"?: ItemArtwork_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemArtwork_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemArtwork_artwork",
  "selections": [
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
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": "thumbnailUrl",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "small"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"small\")"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blurhash",
          "storageKey": null
        }
      ],
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
      "name": "saleMessage",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "d804c886220f10eb309eb7ed26fe54b8";

export default node;

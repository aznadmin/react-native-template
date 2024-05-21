/**
 * @generated SignedSource<<23a59ce15b145206e7cba2c15a2ad450>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkPreview_artwork$data = {
  readonly artistNames: string | null | undefined;
  readonly date: string | null | undefined;
  readonly image: {
    readonly aspectRatio: number;
    readonly blurhash: string | null | undefined;
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArtworkPreview_artwork";
};
export type ArtworkPreview_artwork$key = {
  readonly " $data"?: ArtworkPreview_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPreview_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkPreview_artwork",
  "selections": [
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
      "name": "internalID",
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
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
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
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "a4304ac004a5ea2ba5f24def4845a884";

export default node;

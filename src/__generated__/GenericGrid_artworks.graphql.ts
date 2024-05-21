/**
 * @generated SignedSource<<69fa259aa6f2bbf8f6968ef5c7645f33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GenericGrid_artworks$data = ReadonlyArray<{
  readonly id: string;
  readonly image: {
    readonly aspectRatio: number;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork">;
  readonly " $fragmentType": "GenericGrid_artworks";
}>;
export type GenericGrid_artworks$key = ReadonlyArray<{
  readonly " $data"?: GenericGrid_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "GenericGrid_artworks",
  "selections": [
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
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "includeAll",
          "value": false
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "aspectRatio",
          "storageKey": null
        }
      ],
      "storageKey": "image(includeAll:false)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkGridItem_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "0e281b5fd4ed3aa7fbff45adad6badce";

export default node;

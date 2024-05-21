/**
 * @generated SignedSource<<e819a0a6f9ea9ed58073af086a2700f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkActions_artwork$data = {
  readonly heightCm: number | null | undefined;
  readonly id: string;
  readonly image: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly isHangable: boolean | null | undefined;
  readonly sale: {
    readonly isAuction: boolean | null | undefined;
    readonly isClosed: boolean | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly widthCm: number | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkSaveButton_artwork">;
  readonly " $fragmentType": "ArtworkActions_artwork";
};
export type ArtworkActions_artwork$key = {
  readonly " $data"?: ArtworkActions_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkActions_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkActions_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSaveButton_artwork"
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
      "kind": "ScalarField",
      "name": "slug",
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
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "c217c522db81756fef206c3c59b9ab7c";

export default node;

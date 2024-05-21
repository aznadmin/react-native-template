/**
 * @generated SignedSource<<4ff2ffd9d4e176cc5ad9b175f5fcb00a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkEditionSets_artwork$data = {
  readonly editionSets: ReadonlyArray<{
    readonly id: string;
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkEditionSetItem_item">;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ArtworkEditionSets_artwork";
};
export type ArtworkEditionSets_artwork$key = {
  readonly " $data"?: ArtworkEditionSets_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkEditionSets_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkEditionSets_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
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
          "name": "internalID",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtworkEditionSetItem_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "5ca8ffa76d5375d39931ecbbeec6515b";

export default node;

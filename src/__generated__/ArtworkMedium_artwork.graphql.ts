/**
 * @generated SignedSource<<7257030caa00d3a3839c09fe33177703>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkMedium_artwork$data = {
  readonly mediumType: {
    readonly longDescription: string | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkMedium_artwork";
};
export type ArtworkMedium_artwork$key = {
  readonly " $data"?: ArtworkMedium_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkMedium_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkMedium_artwork",
  "selections": [
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
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "longDescription",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "82e32beec44b4e58a3cca0e8b957c8ae";

export default node;

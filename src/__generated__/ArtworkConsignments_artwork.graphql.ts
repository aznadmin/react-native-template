/**
 * @generated SignedSource<<8e420447d837f499c0e8fc81235d8b2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkConsignments_artwork$data = {
  readonly artists: ReadonlyArray<{
    readonly isConsignable: boolean | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ArtworkConsignments_artwork";
};
export type ArtworkConsignments_artwork$key = {
  readonly " $data"?: ArtworkConsignments_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkConsignments_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkConsignments_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isConsignable",
          "storageKey": null
        },
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

(node as any).hash = "33e85e38108d27aac27ddab2ef77c448";

export default node;

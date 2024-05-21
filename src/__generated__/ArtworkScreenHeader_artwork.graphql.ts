/**
 * @generated SignedSource<<fc09c0913989c45b63fb023dfbf7fbaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkScreenHeader_artwork$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkScreenHeaderCreateAlert_artwork">;
  readonly " $fragmentType": "ArtworkScreenHeader_artwork";
};
export type ArtworkScreenHeader_artwork$key = {
  readonly " $data"?: ArtworkScreenHeader_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkScreenHeader_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkScreenHeader_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkScreenHeaderCreateAlert_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "8ccfd7d9f6457f9525f67cee92858865";

export default node;

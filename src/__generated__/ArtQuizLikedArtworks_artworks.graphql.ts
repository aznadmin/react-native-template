/**
 * @generated SignedSource<<9451eecaea5adb77016e1e6becfad320>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizLikedArtworks_artworks$data = ReadonlyArray<{
  readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
  readonly " $fragmentType": "ArtQuizLikedArtworks_artworks";
}>;
export type ArtQuizLikedArtworks_artworks$key = ReadonlyArray<{
  readonly " $data"?: ArtQuizLikedArtworks_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizLikedArtworks_artworks">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArtQuizLikedArtworks_artworks",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GenericGrid_artworks"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "b7f3b489a1fc13465209e680b5c2e079";

export default node;

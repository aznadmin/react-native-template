/**
 * @generated SignedSource<<506c7b07439a3be5463b38b0498d712c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizExploreArtworksFragment_artwork$data = ReadonlyArray<{
  readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
  readonly " $fragmentType": "ArtQuizExploreArtworksFragment_artwork";
}>;
export type ArtQuizExploreArtworksFragment_artwork$key = ReadonlyArray<{
  readonly " $data"?: ArtQuizExploreArtworksFragment_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizExploreArtworksFragment_artwork">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArtQuizExploreArtworksFragment_artwork",
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

(node as any).hash = "9c050a08d558cdb9eeb78380b6448cf7";

export default node;

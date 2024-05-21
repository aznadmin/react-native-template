/**
 * @generated SignedSource<<ade61d92d894ea1dfc6ca5f2b1f43d3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizExploreArtists_artworks$data = ReadonlyArray<{
  readonly artist: {
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtQuizArtist_artist">;
  } | null | undefined;
  readonly internalID: string;
  readonly " $fragmentType": "ArtQuizExploreArtists_artworks";
}>;
export type ArtQuizExploreArtists_artworks$key = ReadonlyArray<{
  readonly " $data"?: ArtQuizExploreArtists_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizExploreArtists_artworks">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArtQuizExploreArtists_artworks",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtQuizArtist_artist"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "58a6e8523009ffa40cac44411d8a435f";

export default node;

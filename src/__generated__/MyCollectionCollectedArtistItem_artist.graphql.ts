/**
 * @generated SignedSource<<9f560478b924ad497dc3592d8f44cef6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtistItem_artist$data = {
  readonly internalID: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistListItem_artist">;
  readonly " $fragmentType": "MyCollectionCollectedArtistItem_artist";
};
export type MyCollectionCollectedArtistItem_artist$key = {
  readonly " $data"?: MyCollectionCollectedArtistItem_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistItem_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionCollectedArtistItem_artist",
  "selections": [
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
      "name": "ArtistListItem_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "c86373cda8454892c14b74a428c5eeb5";

export default node;

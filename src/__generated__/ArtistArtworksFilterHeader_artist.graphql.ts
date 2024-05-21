/**
 * @generated SignedSource<<5c25cfa81bad985268af7faf7f118bc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistArtworksFilterHeader_artist$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "ArtistArtworksFilterHeader_artist";
};
export type ArtistArtworksFilterHeader_artist$key = {
  readonly " $data"?: ArtistArtworksFilterHeader_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistArtworksFilterHeader_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistArtworksFilterHeader_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "a68186921d0b043329954dd3173923ba";

export default node;

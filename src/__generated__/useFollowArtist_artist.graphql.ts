/**
 * @generated SignedSource<<2f146b11ebe7e18de4c1ee997e8d8c1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useFollowArtist_artist$data = {
  readonly counts: {
    readonly follows: any | null | undefined;
  };
  readonly id: string;
  readonly internalID: string;
  readonly isFollowed: boolean | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "useFollowArtist_artist";
} | null | undefined;
export type useFollowArtist_artist$key = {
  readonly " $data"?: useFollowArtist_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"useFollowArtist_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useFollowArtist_artist",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      "action": "NONE",
      "path": "id"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "internalID",
        "storageKey": null
      },
      "action": "NONE",
      "path": "internalID"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      "action": "NONE",
      "path": "slug"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowed",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "ArtistCounts",
        "kind": "LinkedField",
        "name": "counts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "follows",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "NONE",
      "path": "counts"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "02084f6dac1a5c945735a4a302816837";

export default node;

/**
 * @generated SignedSource<<d38737f7c4b7cb99506260b31782524c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistHeaderNavRight_artist$data = {
  readonly counts: {
    readonly follows: any | null | undefined;
  };
  readonly isFollowed: boolean | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"useFollowArtist_artist">;
  readonly " $fragmentType": "ArtistHeaderNavRight_artist";
} | null | undefined;
export type ArtistHeaderNavRight_artist$key = {
  readonly " $data"?: ArtistHeaderNavRight_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistHeaderNavRight_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistHeaderNavRight_artist",
  "selections": [
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useFollowArtist_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "1f3e2f4cb835688ce6aba1bac6d5245c";

export default node;

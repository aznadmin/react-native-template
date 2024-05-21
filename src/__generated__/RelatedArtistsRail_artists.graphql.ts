/**
 * @generated SignedSource<<0ab47b078e27a67d1b8e9fe05dcf1acf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArtistsRail_artists$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRailCell_relatedArtist">;
  readonly " $fragmentType": "RelatedArtistsRail_artists";
}>;
export type RelatedArtistsRail_artists$key = ReadonlyArray<{
  readonly " $data"?: RelatedArtistsRail_artists$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRail_artists">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RelatedArtistsRail_artists",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RelatedArtistsRailCell_relatedArtist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "3e5b5a1101849fa39273591d7e9280d2";

export default node;

/**
 * @generated SignedSource<<19fa326c6a1b5e210cccd4db6d5af318>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArtistsRailCell_artist$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "RelatedArtistsRailCell_artist";
} | null | undefined;
export type RelatedArtistsRailCell_artist$key = {
  readonly " $data"?: RelatedArtistsRailCell_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRailCell_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedArtistsRailCell_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
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
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "255e35b2a338828fe3d81bebba30c157";

export default node;

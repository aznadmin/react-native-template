/**
 * @generated SignedSource<<829a63d4c8ff5e5ca8602041b65dabd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditSavedSearchAlert_artists$data = ReadonlyArray<{
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "EditSavedSearchAlert_artists";
}>;
export type EditSavedSearchAlert_artists$key = ReadonlyArray<{
  readonly " $data"?: EditSavedSearchAlert_artists$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditSavedSearchAlert_artists">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditSavedSearchAlert_artists",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "948e98dfd2f042a4f28faec832519ab6";

export default node;

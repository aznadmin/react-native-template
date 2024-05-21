/**
 * @generated SignedSource<<1a8d7030114c3d216072375c5b491df6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Article_artist$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "Article_artist";
};
export type Article_artist$key = {
  readonly " $data"?: Article_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"Article_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Article_artist",
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

(node as any).hash = "f5b57852d48a1be1721d1488d3ca17a0";

export default node;

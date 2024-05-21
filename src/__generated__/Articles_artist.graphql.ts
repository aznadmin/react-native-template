/**
 * @generated SignedSource<<b040d3514b02b3a3d0a8c746ad879f10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Articles_artist$data = {
  readonly name: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"Article_artist">;
  readonly " $fragmentType": "Articles_artist";
};
export type Articles_artist$key = {
  readonly " $data"?: Articles_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"Articles_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Articles_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Article_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "3c8508e6ac33fea3c947a51c4a75b050";

export default node;

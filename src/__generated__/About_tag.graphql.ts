/**
 * @generated SignedSource<<e874a1342250aa3189cabfc6e9c98d64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type About_tag$data = {
  readonly description: string | null | undefined;
  readonly " $fragmentType": "About_tag";
};
export type About_tag$key = {
  readonly " $data"?: About_tag$data;
  readonly " $fragmentSpreads": FragmentRefs<"About_tag">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "About_tag",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "f2ab5c190084f979851aa2f23e8808f5";

export default node;

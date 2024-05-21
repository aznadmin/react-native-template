/**
 * @generated SignedSource<<5b4abb565a07b30d5c3a07801f394413>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectMaxBid_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ConfirmBid_me">;
  readonly " $fragmentType": "SelectMaxBid_me";
};
export type SelectMaxBid_me$key = {
  readonly " $data"?: SelectMaxBid_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectMaxBid_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectMaxBid_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ConfirmBid_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "a89deffbe0bc2e15f42b67f98064cfda";

export default node;

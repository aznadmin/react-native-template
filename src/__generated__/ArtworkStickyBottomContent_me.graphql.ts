/**
 * @generated SignedSource<<60accfe6d51873793781e9aa9f0b8e8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkStickyBottomContent_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_me">;
  readonly " $fragmentType": "ArtworkStickyBottomContent_me";
};
export type ArtworkStickyBottomContent_me$key = {
  readonly " $data"?: ArtworkStickyBottomContent_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkStickyBottomContent_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkStickyBottomContent_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkCommercialButtons_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "71510fcf40165694600682922ea8c7e1";

export default node;

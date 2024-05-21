/**
 * @generated SignedSource<<4c7e94dd565818385eccb17a72261e04>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Questions_artwork$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InquiryButtons_artwork">;
  readonly " $fragmentType": "Questions_artwork";
};
export type Questions_artwork$key = {
  readonly " $data"?: Questions_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"Questions_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Questions_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryButtons_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "008c3e13874cc79788bfb8e933af0717";

export default node;

/**
 * @generated SignedSource<<ab2427fbbbdddc7b2a45a9755ac8e6d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkCommercialButtons_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_me">;
  readonly " $fragmentType": "ArtworkCommercialButtons_me";
};
export type ArtworkCommercialButtons_me$key = {
  readonly " $data"?: ArtworkCommercialButtons_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkCommercialButtons_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BidButton_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "80f0077fd45378ff76c9c59928c52bc4";

export default node;

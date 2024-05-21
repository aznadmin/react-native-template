/**
 * @generated SignedSource<<e28f0f12a05ec287636fb006c000729f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MakeOfferButton_artwork$data = {
  readonly internalID: string;
  readonly " $fragmentType": "MakeOfferButton_artwork";
};
export type MakeOfferButton_artwork$key = {
  readonly " $data"?: MakeOfferButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MakeOfferButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MakeOfferButton_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "c704ec89c83e93427db1eca75f364aef";

export default node;

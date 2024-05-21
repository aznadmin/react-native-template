/**
 * @generated SignedSource<<d56d844c3334cdcc41fc81f6476a2d36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InquiryPurchaseButton_artwork$data = {
  readonly internalID: string;
  readonly " $fragmentType": "InquiryPurchaseButton_artwork";
};
export type InquiryPurchaseButton_artwork$key = {
  readonly " $data"?: InquiryPurchaseButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"InquiryPurchaseButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InquiryPurchaseButton_artwork",
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

(node as any).hash = "2c01680f5b5622da3cb63b923f18c303";

export default node;

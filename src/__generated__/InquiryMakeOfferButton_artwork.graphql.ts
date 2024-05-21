/**
 * @generated SignedSource<<0ad942085c9a94477a1394acf0856821>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InquiryMakeOfferButton_artwork$data = {
  readonly internalID: string;
  readonly " $fragmentType": "InquiryMakeOfferButton_artwork";
};
export type InquiryMakeOfferButton_artwork$key = {
  readonly " $data"?: InquiryMakeOfferButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"InquiryMakeOfferButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InquiryMakeOfferButton_artwork",
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

(node as any).hash = "de8ff637fbf5198ccec4eeb6aefcb734";

export default node;

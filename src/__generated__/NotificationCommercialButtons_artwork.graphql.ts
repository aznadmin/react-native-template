/**
 * @generated SignedSource<<0c8a599b8fd659ec1ba03aeb7cbb9a93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NotificationCommercialButtons_artwork$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BuyNowButton_artwork" | "CreateArtworkAlertModal_artwork" | "InquiryButtons_artwork" | "MakeOfferButton_artwork">;
  readonly " $fragmentType": "NotificationCommercialButtons_artwork";
};
export type NotificationCommercialButtons_artwork$key = {
  readonly " $data"?: NotificationCommercialButtons_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"NotificationCommercialButtons_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotificationCommercialButtons_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MakeOfferButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BuyNowButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryButtons_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateArtworkAlertModal_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "6c0ad7c2ae56cd1c0c64ea2818ec5f1d";

export default node;

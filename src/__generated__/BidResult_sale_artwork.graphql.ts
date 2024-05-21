/**
 * @generated SignedSource<<9a61cde9288fdcd5a0646c6d354a28f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidResult_sale_artwork$data = {
  readonly endAt: string | null | undefined;
  readonly extendedBiddingEndAt: string | null | undefined;
  readonly sale: {
    readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
    readonly endAt: string | null | undefined;
    readonly liveStartAt: string | null | undefined;
    readonly slug: string;
  } | null | undefined;
  readonly " $fragmentType": "BidResult_sale_artwork";
};
export type BidResult_sale_artwork$key = {
  readonly " $data"?: BidResult_sale_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"BidResult_sale_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidResult_sale_artwork",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingEndAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "liveStartAt",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cascadingEndTimeIntervalMinutes",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};
})();

(node as any).hash = "88bffd9986a999d5afa95dad9363663f";

export default node;

/**
 * @generated SignedSource<<20ea7e7a21d0ee01cc810a2575d7cb38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkCommercialButtons_artwork$data = {
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
  } | null | undefined> | null | undefined;
  readonly isAcquireable: boolean | null | undefined;
  readonly isBuyNowable: boolean | null | undefined;
  readonly isInAuction: boolean | null | undefined;
  readonly isInquireable: boolean | null | undefined;
  readonly isOfferable: boolean | null | undefined;
  readonly sale: {
    readonly internalID: string;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_artwork" | "BuyNowButton_artwork" | "InquiryButtons_artwork" | "MakeOfferButton_artwork">;
  readonly " $fragmentType": "ArtworkCommercialButtons_artwork";
};
export type ArtworkCommercialButtons_artwork$key = {
  readonly " $data"?: ArtworkCommercialButtons_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "internalID",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkCommercialButtons_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInAuction",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isOfferable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAcquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isBuyNowable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BuyNowButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MakeOfferButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryButtons_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BidButton_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "41d00fb1d5d7e303cee31ac745eb17f3";

export default node;

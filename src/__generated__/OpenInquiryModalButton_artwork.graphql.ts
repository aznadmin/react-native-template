/**
 * @generated SignedSource<<b721cbcd7da6086a4a185f855e2e428c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OpenInquiryModalButton_artwork$data = {
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly isAcquireable: boolean | null | undefined;
  readonly isEdition: boolean | null | undefined;
  readonly isOfferable: boolean | null | undefined;
  readonly isOfferableFromInquiry: boolean | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"InquiryMakeOfferButton_artwork" | "InquiryPurchaseButton_artwork">;
  readonly " $fragmentType": "OpenInquiryModalButton_artwork";
};
export type OpenInquiryModalButton_artwork$key = {
  readonly " $data"?: OpenInquiryModalButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"OpenInquiryModalButton_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpenInquiryModalButton_artwork",
  "selections": [
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
      "name": "isEdition",
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
      "name": "isOfferableFromInquiry",
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
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryMakeOfferButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryPurchaseButton_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "3c97f8815bbde6bc45fbcf494a872469";

export default node;

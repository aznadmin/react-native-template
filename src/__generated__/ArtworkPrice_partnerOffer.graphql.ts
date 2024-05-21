/**
 * @generated SignedSource<<9e5261b444281696a39a2ea158b8cb59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkPrice_partnerOffer$data = {
  readonly endAt: string | null | undefined;
  readonly isAvailable: boolean | null | undefined;
  readonly priceWithDiscount: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkPrice_partnerOffer";
};
export type ArtworkPrice_partnerOffer$key = {
  readonly " $data"?: ArtworkPrice_partnerOffer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPrice_partnerOffer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkPrice_partnerOffer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAvailable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Money",
      "kind": "LinkedField",
      "name": "priceWithDiscount",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "display",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PartnerOfferToCollector",
  "abstractKey": null
};

(node as any).hash = "3348cd2046fb821c6e5f6603d3d04fd5";

export default node;

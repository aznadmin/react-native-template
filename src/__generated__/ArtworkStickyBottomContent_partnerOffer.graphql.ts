/**
 * @generated SignedSource<<d87a207336b611148d216bef6eff7472>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkStickyBottomContent_partnerOffer$data = {
  readonly internalID: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_partnerOffer" | "ArtworkPrice_partnerOffer">;
  readonly " $fragmentType": "ArtworkStickyBottomContent_partnerOffer";
};
export type ArtworkStickyBottomContent_partnerOffer$key = {
  readonly " $data"?: ArtworkStickyBottomContent_partnerOffer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkStickyBottomContent_partnerOffer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkStickyBottomContent_partnerOffer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkPrice_partnerOffer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkCommercialButtons_partnerOffer"
    }
  ],
  "type": "PartnerOfferToCollector",
  "abstractKey": null
};

(node as any).hash = "b7cd8b63f026595f8d0ab8804be54dcb";

export default node;

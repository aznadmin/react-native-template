/**
 * @generated SignedSource<<caab5d66121a63421ad88901e7c369f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkPartnerOfferNote_partnerOffer$data = {
  readonly isAvailable: boolean | null | undefined;
  readonly note: string | null | undefined;
  readonly " $fragmentType": "ArtworkPartnerOfferNote_partnerOffer";
};
export type ArtworkPartnerOfferNote_partnerOffer$key = {
  readonly " $data"?: ArtworkPartnerOfferNote_partnerOffer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPartnerOfferNote_partnerOffer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkPartnerOfferNote_partnerOffer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAvailable",
      "storageKey": null
    }
  ],
  "type": "PartnerOfferToCollector",
  "abstractKey": null
};

(node as any).hash = "c5b71718db3c55778e04f949b0bac490";

export default node;

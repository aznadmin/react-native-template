/**
 * @generated SignedSource<<372002a14023674dedc07817d82129f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkCommercialButtons_partnerOffer$data = {
  readonly endAt: string | null | undefined;
  readonly internalID: string;
  readonly isAvailable: boolean | null | undefined;
  readonly " $fragmentType": "ArtworkCommercialButtons_partnerOffer";
};
export type ArtworkCommercialButtons_partnerOffer$key = {
  readonly " $data"?: ArtworkCommercialButtons_partnerOffer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkCommercialButtons_partnerOffer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkCommercialButtons_partnerOffer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
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
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    }
  ],
  "type": "PartnerOfferToCollector",
  "abstractKey": null
};

(node as any).hash = "3b1defb2614e0ca2a20f636af2127702";

export default node;

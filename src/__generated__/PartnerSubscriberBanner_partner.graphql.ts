/**
 * @generated SignedSource<<b6238653c4e8e5a2bf9cdddb6e66a013>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerSubscriberBanner_partner$data = {
  readonly hasFairPartnership: boolean | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "PartnerSubscriberBanner_partner";
};
export type PartnerSubscriberBanner_partner$key = {
  readonly " $data"?: PartnerSubscriberBanner_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerSubscriberBanner_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerSubscriberBanner_partner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasFairPartnership",
      "storageKey": null
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "cd29183c26bfd1f6c809b4656179e0e9";

export default node;

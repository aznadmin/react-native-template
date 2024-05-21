/**
 * @generated SignedSource<<38fab72f671ece87e9ff2d8bed4f60c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerFollowButton_partner$data = {
  readonly internalID: string;
  readonly profile: {
    readonly counts: {
      readonly follows: any | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly internalID: string;
    readonly isFollowed: boolean | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "PartnerFollowButton_partner";
};
export type PartnerFollowButton_partner$key = {
  readonly " $data"?: PartnerFollowButton_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerFollowButton_partner">;
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
  "name": "PartnerFollowButton_partner",
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
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFollowed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ProfileCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "follows",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Partner",
  "abstractKey": null
};
})();

(node as any).hash = "8b80fac1bb6a763e1e73646a3fd4702d";

export default node;

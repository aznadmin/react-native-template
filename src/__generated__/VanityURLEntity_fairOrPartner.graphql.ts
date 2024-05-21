/**
 * @generated SignedSource<<7f494765025e3a20e9c1987dff077077>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VanityURLEntity_fairOrPartner$data = {
  readonly __typename: "Fair";
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"Fair_fair">;
  readonly " $fragmentType": "VanityURLEntity_fairOrPartner";
} | {
  readonly __typename: "Partner";
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"Partner_partner">;
  readonly " $fragmentType": "VanityURLEntity_fairOrPartner";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "VanityURLEntity_fairOrPartner";
};
export type VanityURLEntity_fairOrPartner$key = {
  readonly " $data"?: VanityURLEntity_fairOrPartner$data;
  readonly " $fragmentSpreads": FragmentRefs<"VanityURLEntity_fairOrPartner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VanityURLEntity_fairOrPartner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Fair_fair"
        }
      ],
      "type": "Fair",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Partner_partner"
        }
      ],
      "type": "Partner",
      "abstractKey": null
    }
  ],
  "type": "VanityURLEntityType",
  "abstractKey": "__isVanityURLEntityType"
};

(node as any).hash = "3ae5543df35572fc60aac50787784650";

export default node;

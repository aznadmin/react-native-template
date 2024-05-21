/**
 * @generated SignedSource<<55b996aaa3cac839de5f0b306f87a74c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerLocationSection_partner$data = {
  readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly locations: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "PartnerLocationSection_partner";
};
export type PartnerLocationSection_partner$key = {
  readonly " $data"?: PartnerLocationSection_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerLocationSection_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerLocationSection_partner",
  "selections": [
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cities",
      "storageKey": null
    },
    {
      "alias": "locations",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        }
      ],
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "locationsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "locationsConnection(first:0)"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "432784fab5ee05283a2555d2b160dff6";

export default node;

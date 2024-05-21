/**
 * @generated SignedSource<<62150843d548e76a0d0f3bc058b94119>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleInfo_sale$data = {
  readonly buyersPremium: ReadonlyArray<{
    readonly amount: string | null | undefined;
    readonly percent: number | null | undefined;
  } | null | undefined> | null | undefined;
  readonly description: string | null | undefined;
  readonly endAt: string | null | undefined;
  readonly internalID: string;
  readonly isWithBuyersPremium: boolean | null | undefined;
  readonly liveStartAt: string | null | undefined;
  readonly name: string | null | undefined;
  readonly registrationEndsAt: string | null | undefined;
  readonly slug: string;
  readonly startAt: string | null | undefined;
  readonly timeZone: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_sale">;
  readonly " $fragmentType": "SaleInfo_sale";
};
export type SaleInfo_sale$key = {
  readonly " $data"?: SaleInfo_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleInfo_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleInfo_sale",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_sale"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
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
      "name": "internalID",
      "storageKey": null
    },
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
      "name": "liveStartAt",
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
      "name": "startAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "registrationEndsAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "timeZone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWithBuyersPremium",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "BuyersPremium",
      "kind": "LinkedField",
      "name": "buyersPremium",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "percent",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "cfdad82aa72dea8ea33c489659e22efa";

export default node;

/**
 * @generated SignedSource<<43e02bdcfdd71b4da53ac453582e9a19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Inbox_me$data = {
  readonly myBids: {
    readonly active: ReadonlyArray<{
      readonly sale: {
        readonly internalID: string;
      } | null | undefined;
      readonly saleArtworks: ReadonlyArray<{
        readonly internalID: string;
      } | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"Conversations_me" | "MyBids_me">;
  readonly " $fragmentType": "Inbox_me";
};
export type Inbox_me$key = {
  readonly " $data"?: Inbox_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Inbox_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "internalID",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Inbox_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Conversations_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyBids_me"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MyBids",
      "kind": "LinkedField",
      "name": "myBids",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MyBid",
          "kind": "LinkedField",
          "name": "active",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Sale",
              "kind": "LinkedField",
              "name": "sale",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtwork",
              "kind": "LinkedField",
              "name": "saleArtworks",
              "plural": true,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "9c0d7b482db8d867dd6d3821288d6f16";

export default node;

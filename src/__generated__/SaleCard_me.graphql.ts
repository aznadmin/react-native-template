/**
 * @generated SignedSource<<329aac7032b949dea695345c9400f18c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleCard_me$data = {
  readonly isIdentityVerified: boolean | null | undefined;
  readonly pendingIdentityVerification: {
    readonly internalID: string;
  } | null | undefined;
  readonly " $fragmentType": "SaleCard_me";
};
export type SaleCard_me$key = {
  readonly " $data"?: SaleCard_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleCard_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleCard_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isIdentityVerified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "IdentityVerification",
      "kind": "LinkedField",
      "name": "pendingIdentityVerification",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "a6d33548a1e01a6e18da781cc760867b";

export default node;

/**
 * @generated SignedSource<<8e6034f1bf746e8d11cdf2ec3f449f12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountDeleteAccount_me$data = {
  readonly hasPassword: boolean;
  readonly " $fragmentType": "MyAccountDeleteAccount_me";
};
export type MyAccountDeleteAccount_me$key = {
  readonly " $data"?: MyAccountDeleteAccount_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountDeleteAccount_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountDeleteAccount_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPassword",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "9fe620b3e88ac0e7b67a7439a15dd0d0";

export default node;

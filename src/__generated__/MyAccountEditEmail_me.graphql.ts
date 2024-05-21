/**
 * @generated SignedSource<<2f09bc04d540c71d3bb25250cfd86981>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditEmail_me$data = {
  readonly email: string | null | undefined;
  readonly " $fragmentType": "MyAccountEditEmail_me";
};
export type MyAccountEditEmail_me$key = {
  readonly " $data"?: MyAccountEditEmail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditEmail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountEditEmail_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "18e2f212786da91f965d1384aaae9239";

export default node;

/**
 * @generated SignedSource<<d7af5c0b875259e369ad375ffe2e3099>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SellWithArtsyHome_me$data = {
  readonly email: string | null | undefined;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly phone: string | null | undefined;
  readonly " $fragmentType": "SellWithArtsyHome_me";
};
export type SellWithArtsyHome_me$key = {
  readonly " $data"?: SellWithArtsyHome_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SellWithArtsyHome_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SellWithArtsyHome_me",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "1de9837019a51c8e909d171fb637b4ca";

export default node;

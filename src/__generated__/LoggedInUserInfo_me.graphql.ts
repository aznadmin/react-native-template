/**
 * @generated SignedSource<<2dbffa559e101322cbb458367a013887>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoggedInUserInfo_me$data = {
  readonly email: string | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "LoggedInUserInfo_me";
};
export type LoggedInUserInfo_me$key = {
  readonly " $data"?: LoggedInUserInfo_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoggedInUserInfo_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LoggedInUserInfo_me",
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "3f8a214bac317a12a0137e848174b735";

export default node;

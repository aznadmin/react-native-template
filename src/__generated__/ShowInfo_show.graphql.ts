/**
 * @generated SignedSource<<3c5f91a034756168422998b82923256d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowInfo_show$data = {
  readonly about: string | null | undefined;
  readonly href: string | null | undefined;
  readonly " $fragmentType": "ShowInfo_show";
};
export type ShowInfo_show$key = {
  readonly " $data"?: ShowInfo_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowInfo_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowInfo_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": "about",
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "b096e3541ddc617d96a5eb413037bc28";

export default node;

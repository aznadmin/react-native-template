/**
 * @generated SignedSource<<e56cae26d5e4b1c891bffb7c543a9c23>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairEmptyState_fair$data = {
  readonly endAt: string | null | undefined;
  readonly isActive: boolean | null | undefined;
  readonly " $fragmentType": "FairEmptyState_fair";
};
export type FairEmptyState_fair$key = {
  readonly " $data"?: FairEmptyState_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairEmptyState_fair">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairEmptyState_fair",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "0a03e1fa92ef01b0d307471ac69588f3";

export default node;

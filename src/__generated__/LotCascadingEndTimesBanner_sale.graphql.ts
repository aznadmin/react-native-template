/**
 * @generated SignedSource<<34bbbda99860f364dfdf460e4e007fad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotCascadingEndTimesBanner_sale$data = {
  readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
  readonly extendedBiddingIntervalMinutes: number | null | undefined;
  readonly " $fragmentType": "LotCascadingEndTimesBanner_sale";
};
export type LotCascadingEndTimesBanner_sale$key = {
  readonly " $data"?: LotCascadingEndTimesBanner_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotCascadingEndTimesBanner_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LotCascadingEndTimesBanner_sale",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cascadingEndTimeIntervalMinutes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingIntervalMinutes",
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "00043be32d88d07d82db69b54745c36c";

export default node;

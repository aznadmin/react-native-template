/**
 * @generated SignedSource<<acba564579bbd7620e98a9d99f00137a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairTiming_fair$data = {
  readonly endAt: string | null | undefined;
  readonly exhibitionPeriod: string | null | undefined;
  readonly startAt: string | null | undefined;
  readonly " $fragmentType": "FairTiming_fair";
};
export type FairTiming_fair$key = {
  readonly " $data"?: FairTiming_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairTiming_fair">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairTiming_fair",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "SHORT"
        }
      ],
      "kind": "ScalarField",
      "name": "exhibitionPeriod",
      "storageKey": "exhibitionPeriod(format:\"SHORT\")"
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
      "name": "endAt",
      "storageKey": null
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "67896022576593e321a241a927fe81e6";

export default node;

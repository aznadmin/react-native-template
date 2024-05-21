/**
 * @generated SignedSource<<3e95a25556857e7ce3465df4922929ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestForPriceEstimateBanner_me$data = {
  readonly email: string | null | undefined;
  readonly name: string | null | undefined;
  readonly phone: string | null | undefined;
  readonly " $fragmentType": "RequestForPriceEstimateBanner_me";
};
export type RequestForPriceEstimateBanner_me$key = {
  readonly " $data"?: RequestForPriceEstimateBanner_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestForPriceEstimateBanner_me",
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

(node as any).hash = "e11a0515cf3289d0ef099d3c41566fb9";

export default node;

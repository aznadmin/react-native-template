/**
 * @generated SignedSource<<b27e1555d9852d026fdefe2912f587ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestForPriceEstimateBanner_marketPriceInsights$data = {
  readonly demandRank: number | null | undefined;
  readonly " $fragmentType": "RequestForPriceEstimateBanner_marketPriceInsights";
};
export type RequestForPriceEstimateBanner_marketPriceInsights$key = {
  readonly " $data"?: RequestForPriceEstimateBanner_marketPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_marketPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestForPriceEstimateBanner_marketPriceInsights",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "demandRank",
      "storageKey": null
    }
  ],
  "type": "MarketPriceInsights",
  "abstractKey": null
};

(node as any).hash = "631228334696a395cfc407ea146a571b";

export default node;

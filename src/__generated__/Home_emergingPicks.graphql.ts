/**
 * @generated SignedSource<<f7e876f74210e0fa8824234bf7d55bc2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_emergingPicks$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MarketingCollectionRail_marketingCollection">;
  readonly " $fragmentType": "Home_emergingPicks";
};
export type Home_emergingPicks$key = {
  readonly " $data"?: Home_emergingPicks$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_emergingPicks">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_emergingPicks",
  "selections": [
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "-decayed_merch"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "MarketingCollectionRail_marketingCollection"
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "f7dcab43c9bf91234ec9f95c1a2ecbfc";

export default node;

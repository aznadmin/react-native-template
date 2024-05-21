/**
 * @generated SignedSource<<6dcaaa2944eaa3d0cf01f0db81e6f6b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionResultsRail_auctionResults$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly internalID: string;
      readonly " $fragmentSpreads": FragmentRefs<"AuctionResultListItem_auctionResult">;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "AuctionResultsRail_auctionResults";
};
export type AuctionResultsRail_auctionResults$key = {
  readonly " $data"?: AuctionResultsRail_auctionResults$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionResultsRail_auctionResults">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionResultsRail_auctionResults",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AuctionResultEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AuctionResult",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AuctionResultListItem_auctionResult"
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "internalID",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AuctionResultConnection",
  "abstractKey": null
};

(node as any).hash = "5d46bb02726aa7ed04688a649662b28f";

export default node;

/**
 * @generated SignedSource<<36e2061acb862a6decd32b639434fb2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ComparableWorks_auctionResult$data = {
  readonly comparableAuctionResults: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly artistID: string;
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"AuctionResultListItem_auctionResult">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ComparableWorks_auctionResult";
};
export type ComparableWorks_auctionResult$key = {
  readonly " $data"?: ComparableWorks_auctionResult$data;
  readonly " $fragmentSpreads": FragmentRefs<"ComparableWorks_auctionResult">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ComparableWorks_auctionResult",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "comparableAuctionResults",
      "plural": false,
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
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
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
                  "name": "artistID",
                  "storageKey": null
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
      "storageKey": "comparableAuctionResults(first:3)"
    }
  ],
  "type": "AuctionResult",
  "abstractKey": null
};

(node as any).hash = "728d224b9ccbe709da270787ffa81726";

export default node;

/**
 * @generated SignedSource<<d20914848e4dbec5aeb569def920486c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CurrentlyRunningAuctions_viewer$data = {
  readonly sales: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly live_start_at: string | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"SaleListItem_sale">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "CurrentlyRunningAuctions_viewer";
};
export type CurrentlyRunningAuctions_viewer$key = {
  readonly " $data"?: CurrentlyRunningAuctions_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CurrentlyRunningAuctions_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./CurrentlyRunningAuctionsRefetchQuery.graphql')
    }
  },
  "name": "CurrentlyRunningAuctions_viewer",
  "selections": [
    {
      "alias": "sales",
      "args": [
        {
          "kind": "Literal",
          "name": "auctionState",
          "value": "OPEN"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "isAuction",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "live",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "TIMELY_AT_NAME_ASC"
        }
      ],
      "concreteType": "SaleConnection",
      "kind": "LinkedField",
      "name": "salesConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Sale",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SaleListItem_sale"
                },
                {
                  "alias": "live_start_at",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "liveStartAt",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "salesConnection(auctionState:\"OPEN\",first:100,isAuction:true,live:true,sort:\"TIMELY_AT_NAME_ASC\")"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "f667cef298c4d936953c549f74ba6429";

export default node;

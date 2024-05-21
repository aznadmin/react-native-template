/**
 * @generated SignedSource<<0869f66b98fa32ce808ff9187801388c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpcomingAuctions_viewer$data = {
  readonly sales: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"SaleListItem_sale">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "UpcomingAuctions_viewer";
};
export type UpcomingAuctions_viewer$key = {
  readonly " $data"?: UpcomingAuctions_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpcomingAuctions_viewer">;
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
      "operation": require('./UpcomingAuctionsRefetchQuery.graphql')
    }
  },
  "name": "UpcomingAuctions_viewer",
  "selections": [
    {
      "alias": "sales",
      "args": [
        {
          "kind": "Literal",
          "name": "auctionState",
          "value": "UPCOMING"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "isAuction",
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "salesConnection(auctionState:\"UPCOMING\",first:10,isAuction:true,sort:\"TIMELY_AT_NAME_ASC\")"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "bfada19c394f75f04946f9978f0c0b16";

export default node;

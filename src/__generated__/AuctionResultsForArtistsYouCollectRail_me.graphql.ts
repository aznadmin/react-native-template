/**
 * @generated SignedSource<<5266fdda86ee4892ea72e54e0e081cfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionResultsForArtistsYouCollectRail_me$data = {
  readonly myCollectionAuctionResults: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artistID: string;
        readonly id: string;
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"AuctionResultListItem_auctionResult">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "AuctionResultsForArtistsYouCollectRail_me";
};
export type AuctionResultsForArtistsYouCollectRail_me$key = {
  readonly " $data"?: AuctionResultsForArtistsYouCollectRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionResultsForArtistsYouCollectRail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionResultsForArtistsYouCollectRail_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        },
        {
          "kind": "Literal",
          "name": "state",
          "value": "PAST"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "myCollectionAuctionResults",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
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
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "artistID",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "myCollectionAuctionResults(first:3,state:\"PAST\")"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "04aa174c7f17083a5c77b76ec1fc8351";

export default node;

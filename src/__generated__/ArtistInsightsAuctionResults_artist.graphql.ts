/**
 * @generated SignedSource<<cb40da80a85a20a1482447d4d8515b57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistInsightsAuctionResults_artist$data = {
  readonly auctionResultsConnection: {
    readonly createdYearRange: {
      readonly endAt: number | null | undefined;
      readonly startAt: number | null | undefined;
    } | null | undefined;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly internalID: string;
        readonly isUpcoming: boolean | null | undefined;
        readonly saleDate: string | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"AuctionResultListItem_auctionResult">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly birthday: string | null | undefined;
  readonly id: string;
  readonly internalID: string;
  readonly pastAuctionResults: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly statuses: {
    readonly auctionLots: boolean | null | undefined;
  } | null | undefined;
  readonly upcomingAuctionResults: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArtistInsightsAuctionResults_artist";
};
export type ArtistInsightsAuctionResults_artist$key = {
  readonly " $data"?: ArtistInsightsAuctionResults_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistInsightsAuctionResults_artist">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "kind": "Variable",
  "name": "allowEmptyCreatedDates",
  "variableName": "allowEmptyCreatedDates"
},
v3 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "categories"
},
v4 = {
  "kind": "Variable",
  "name": "earliestCreatedYear",
  "variableName": "earliestCreatedYear"
},
v5 = {
  "kind": "Variable",
  "name": "keyword",
  "variableName": "keyword"
},
v6 = {
  "kind": "Variable",
  "name": "latestCreatedYear",
  "variableName": "latestCreatedYear"
},
v7 = {
  "kind": "Variable",
  "name": "organizations",
  "variableName": "organizations"
},
v8 = {
  "kind": "Variable",
  "name": "sizes",
  "variableName": "sizes"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "allowEmptyCreatedDates"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "categories"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": 1000,
      "kind": "LocalArgument",
      "name": "earliestCreatedYear"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "keyword"
    },
    {
      "defaultValue": 2050,
      "kind": "LocalArgument",
      "name": "latestCreatedYear"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "organizations"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sizes"
    },
    {
      "defaultValue": "DATE_DESC",
      "kind": "LocalArgument",
      "name": "sort"
    },
    {
      "defaultValue": "ALL",
      "kind": "LocalArgument",
      "name": "state"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "auctionResultsConnection"
        ]
      }
    ]
  },
  "name": "ArtistInsightsAuctionResults_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "birthday",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistStatuses",
      "kind": "LinkedField",
      "name": "statuses",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "auctionLots",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "pastAuctionResults",
      "args": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/),
        (v8/*: any*/),
        {
          "kind": "Literal",
          "name": "state",
          "value": "PAST"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "auctionResultsConnection",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    },
    {
      "alias": "upcomingAuctionResults",
      "args": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/),
        (v8/*: any*/),
        {
          "kind": "Literal",
          "name": "state",
          "value": "UPCOMING"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "auctionResultsConnection",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    },
    {
      "alias": "auctionResultsConnection",
      "args": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/),
        (v8/*: any*/),
        {
          "kind": "Variable",
          "name": "sort",
          "variableName": "sort"
        },
        {
          "kind": "Variable",
          "name": "state",
          "variableName": "state"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "__artist_auctionResultsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "YearRange",
          "kind": "LinkedField",
          "name": "createdYearRange",
          "plural": false,
          "selections": [
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
          "storageKey": null
        },
        (v9/*: any*/),
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
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "saleDate",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isUpcoming",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AuctionResultListItem_auctionResult"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
})();

(node as any).hash = "9327cf9ab341eb45a474a4c8adf74ffa";

export default node;

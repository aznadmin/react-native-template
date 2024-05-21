/**
 * @generated SignedSource<<2a409b5257a1c65a118a179724667131>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtistsRail_me$data = {
  readonly id: string;
  readonly userInterestsConnection: {
    readonly edges: ReadonlyArray<{
      readonly internalID: string;
      readonly node: {
        readonly internalID?: string;
        readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsRail_artist">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MyCollectionCollectedArtistsRail_me";
};
export type MyCollectionCollectedArtistsRail_me$key = {
  readonly " $data"?: MyCollectionCollectedArtistsRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsRail_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "userInterestsConnection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./MyCollectionCollectedArtistsRail_myCollectionInfoRefetch.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "MyCollectionCollectedArtistsRail_me",
  "selections": [
    {
      "alias": "userInterestsConnection",
      "args": [
        {
          "kind": "Literal",
          "name": "category",
          "value": "COLLECTED_BEFORE"
        },
        {
          "kind": "Literal",
          "name": "interestType",
          "value": "ARTIST"
        }
      ],
      "concreteType": "UserInterestConnection",
      "kind": "LinkedField",
      "name": "__MyCollectionCollectedArtistsRail_userInterestsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserInterestEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "MyCollectionCollectedArtistsRail_artist"
                    }
                  ],
                  "type": "Artist",
                  "abstractKey": null
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
      "storageKey": "__MyCollectionCollectedArtistsRail_userInterestsConnection_connection(category:\"COLLECTED_BEFORE\",interestType:\"ARTIST\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "d00a851fefafbc42c53de1a29ccd7d00";

export default node;

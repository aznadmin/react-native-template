/**
 * @generated SignedSource<<d8c7c458adf16cc0451452e0b47dd402>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtistsPrivacyArtistsList_me$data = {
  readonly id: string;
  readonly userInterestsConnection: {
    readonly edges: ReadonlyArray<{
      readonly internalID: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"SelectArtistToShareListItem_artist">;
      } | null | undefined;
      readonly private: boolean;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MyCollectionCollectedArtistsPrivacyArtistsList_me";
};
export type MyCollectionCollectedArtistsPrivacyArtistsList_me$key = {
  readonly " $data"?: MyCollectionCollectedArtistsPrivacyArtistsList_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsPrivacyArtistsList_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "userInterestsConnection"
];
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
      "operation": require('./MyCollectionCollectedArtistsPrivacyArtistsList_myCollectionInfoRefetch.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "MyCollectionCollectedArtistsPrivacyArtistsList_me",
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
      "name": "__MyCollectionCollectedArtistsPrivacyArtistsList_userInterestsConnection_connection",
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
              "name": "private",
              "storageKey": null
            },
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
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "SelectArtistToShareListItem_artist"
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
      "storageKey": "__MyCollectionCollectedArtistsPrivacyArtistsList_userInterestsConnection_connection(category:\"COLLECTED_BEFORE\",interestType:\"ARTIST\")"
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

(node as any).hash = "e185f8425d5298ddc437864e3be9a7a9";

export default node;

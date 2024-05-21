/**
 * @generated SignedSource<<d6e996b11286596a16c0fb056e357140>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomsList_viewingRooms$data = {
  readonly viewingRooms: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomsListItem_item">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ViewingRoomsList_viewingRooms";
};
export type ViewingRoomsList_viewingRooms$key = {
  readonly " $data"?: ViewingRoomsList_viewingRooms$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomsList_viewingRooms">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "viewingRooms"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
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
      "fragmentPathInResult": [],
      "operation": require('./ViewingRoomsList_viewingRoomsRefetch.graphql')
    }
  },
  "name": "ViewingRoomsList_viewingRooms",
  "selections": [
    {
      "alias": "viewingRooms",
      "args": null,
      "concreteType": "ViewingRoomConnection",
      "kind": "LinkedField",
      "name": "__ViewingRoomsList_viewingRooms_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ViewingRoomEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ViewingRoom",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ViewingRoomsListItem_item"
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
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "a0af5b79c7711894363352535c741db7";

export default node;

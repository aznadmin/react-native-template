/**
 * @generated SignedSource<<3f123091084eb4fa4570be427cc8949a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_OFFER_CREATED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ActivityList_viewer$data = {
  readonly notificationsConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artworks: {
          readonly totalCount: number | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly item: {
          readonly article?: {
            readonly internalID: string;
          } | null | undefined;
          readonly viewingRoomsConnection?: {
            readonly totalCount: number | null | undefined;
          } | null | undefined;
        } | null | undefined;
        readonly notificationType: NotificationTypesEnum;
        readonly " $fragmentSpreads": FragmentRefs<"ActivityItem_notification">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ActivityList_viewer";
};
export type ActivityList_viewer$key = {
  readonly " $data"?: ActivityList_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActivityList_viewer">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "notificationsConnection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "types"
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
        "viewer"
      ],
      "operation": require('./ActivityList_viewerRefetch.graphql')
    }
  },
  "name": "ActivityList_viewer",
  "selections": [
    {
      "alias": "notificationsConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "notificationTypes",
          "variableName": "types"
        }
      ],
      "concreteType": "NotificationConnection",
      "kind": "LinkedField",
      "name": "__ActivityList_notificationsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "NotificationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Notification",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "notificationType",
                  "storageKey": null
                },
                {
                  "alias": "artworks",
                  "args": null,
                  "concreteType": "ArtworkConnection",
                  "kind": "LinkedField",
                  "name": "artworksConnection",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "item",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "first",
                              "value": 1
                            }
                          ],
                          "concreteType": "ViewingRoomsConnection",
                          "kind": "LinkedField",
                          "name": "viewingRoomsConnection",
                          "plural": false,
                          "selections": (v2/*: any*/),
                          "storageKey": "viewingRoomsConnection(first:1)"
                        }
                      ],
                      "type": "ViewingRoomPublishedNotificationItem",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Article",
                          "kind": "LinkedField",
                          "name": "article",
                          "plural": false,
                          "selections": [
                            (v1/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "type": "ArticleFeaturedArtistNotificationItem",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ActivityItem_notification"
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
  "type": "Viewer",
  "abstractKey": null
};
})();

(node as any).hash = "0c8a927b5b1e0d213781b2fdfea2c291";

export default node;

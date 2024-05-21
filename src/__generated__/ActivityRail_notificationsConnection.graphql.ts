/**
 * @generated SignedSource<<8d2794d4730b34572e565f0728b561a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_OFFER_CREATED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ActivityRail_notificationsConnection$data = {
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
        readonly " $fragmentSpreads": FragmentRefs<"ActivityRailItem_item">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ActivityRail_notificationsConnection";
};
export type ActivityRail_notificationsConnection$key = {
  readonly " $data"?: ActivityRail_notificationsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActivityRail_notificationsConnection">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
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
      "name": "count"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActivityRail_notificationsConnection",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count"
        }
      ],
      "concreteType": "NotificationConnection",
      "kind": "LinkedField",
      "name": "notificationsConnection",
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
                (v0/*: any*/),
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
                  "selections": (v1/*: any*/),
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
                          "selections": (v1/*: any*/),
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
                            (v0/*: any*/)
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
                  "name": "ActivityRailItem_item"
                }
              ],
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

(node as any).hash = "780bcaa3ac687a26ecce68275e195129";

export default node;

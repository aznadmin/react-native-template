/**
 * @generated SignedSource<<6ad0b4ef0e58a8bc5953b614ded2455c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_OFFER_CREATED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomPublishedNotification_notification$data = {
  readonly headline: string;
  readonly item: {
    readonly partner?: {
      readonly href: string | null | undefined;
      readonly name: string | null | undefined;
      readonly profile: {
        readonly id: string;
        readonly image: {
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly isFollowed: boolean | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly viewingRoomsConnection?: {
      readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomPublishedNotificationsList_viewingRoomsConnection">;
    } | null | undefined;
  } | null | undefined;
  readonly notificationType: NotificationTypesEnum;
  readonly publishedAt: string;
  readonly " $fragmentType": "ViewingRoomPublishedNotification_notification";
};
export type ViewingRoomPublishedNotification_notification$key = {
  readonly " $data"?: ViewingRoomPublishedNotification_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomPublishedNotification_notification">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomPublishedNotification_notification",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "headline",
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
              "args": null,
              "concreteType": "Partner",
              "kind": "LinkedField",
              "name": "partner",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "href",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Profile",
                  "kind": "LinkedField",
                  "name": "profile",
                  "plural": false,
                  "selections": [
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
                      "name": "isFollowed",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Image",
                      "kind": "LinkedField",
                      "name": "image",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "version",
                              "value": "wide"
                            }
                          ],
                          "kind": "ScalarField",
                          "name": "url",
                          "storageKey": "url(version:\"wide\")"
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 10
                }
              ],
              "concreteType": "ViewingRoomsConnection",
              "kind": "LinkedField",
              "name": "viewingRoomsConnection",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ViewingRoomPublishedNotificationsList_viewingRoomsConnection"
                }
              ],
              "storageKey": "viewingRoomsConnection(first:10)"
            }
          ],
          "type": "ViewingRoomPublishedNotificationItem",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "notificationType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "RELATIVE"
        }
      ],
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": "publishedAt(format:\"RELATIVE\")"
    }
  ],
  "type": "Notification",
  "abstractKey": null
};

(node as any).hash = "79daa63f8f7d1989a9de4e955ba6d27f";

export default node;

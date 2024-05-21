/**
 * @generated SignedSource<<a1aaf64569cc02037f8213a19ed10216>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NotificationTypesEnum = "ARTICLE_FEATURED_ARTIST" | "ARTWORK_ALERT" | "ARTWORK_PUBLISHED" | "PARTNER_OFFER_CREATED" | "PARTNER_SHOW_OPENED" | "VIEWING_ROOM_PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ActivityItem_notification$data = {
  readonly headline: string;
  readonly id: string;
  readonly internalID: string;
  readonly isUnread: boolean;
  readonly item: {
    readonly available?: boolean | null | undefined;
    readonly expiresAt?: string | null | undefined;
  } | null | undefined;
  readonly message: string;
  readonly notificationType: NotificationTypesEnum;
  readonly objectsCount: number;
  readonly previewImages: ReadonlyArray<{
    readonly blurhash: string | null | undefined;
    readonly url: string | null | undefined;
  }>;
  readonly publishedAt: string;
  readonly targetHref: string;
  readonly title: string;
  readonly " $fragmentType": "ActivityItem_notification";
};
export type ActivityItem_notification$key = {
  readonly " $data"?: ActivityItem_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActivityItem_notification">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActivityItem_notification",
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
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "message",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "targetHref",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isUnread",
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
      "args": null,
      "kind": "ScalarField",
      "name": "objectsCount",
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
              "kind": "ScalarField",
              "name": "available",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "expiresAt",
              "storageKey": null
            }
          ],
          "type": "PartnerOfferCreatedNotificationItem",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 4
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "previewImages",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "thumbnail"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"thumbnail\")"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blurhash",
          "storageKey": null
        }
      ],
      "storageKey": "previewImages(size:4)"
    }
  ],
  "type": "Notification",
  "abstractKey": null
};

(node as any).hash = "5f0a62464cf63d77e90cd3c65e6d1cf1";

export default node;

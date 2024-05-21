/**
 * @generated SignedSource<<1dd0ed322bbc1db00cb6d90b2fd32778>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkPublishedNotification_notification$data = {
  readonly artworksConnection: {
    readonly totalCount: number | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"NotificationArtworkList_artworksConnection">;
  } | null | undefined;
  readonly headline: string;
  readonly item: {
    readonly artists?: ReadonlyArray<{
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
      readonly name: string | null | undefined;
      readonly slug: string;
    }>;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkPublishedNotification_notification";
};
export type ArtworkPublishedNotification_notification$key = {
  readonly " $data"?: ArtworkPublishedNotification_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPublishedNotification_notification">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkPublishedNotification_notification",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NotificationArtworkList_artworksConnection"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:10)"
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
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artists",
              "plural": true,
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
                  "name": "isFollowed",
                  "storageKey": null
                },
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
                  "name": "slug",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "ArtworkPublishedNotificationItem",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Notification",
  "abstractKey": null
};

(node as any).hash = "90f5f34f3c7c5222399ff006d3e6469a";

export default node;

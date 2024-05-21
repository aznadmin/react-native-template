/**
 * @generated SignedSource<<00544ac681351e2d80b5f7141e31c90b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomPublishedNotificationsList_viewingRoomsConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly internalID: string;
      readonly slug: string;
      readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomsListItem_item">;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ViewingRoomPublishedNotificationsList_viewingRoomsConnection";
};
export type ViewingRoomPublishedNotificationsList_viewingRoomsConnection$key = {
  readonly " $data"?: ViewingRoomPublishedNotificationsList_viewingRoomsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomPublishedNotificationsList_viewingRoomsConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomPublishedNotificationsList_viewingRoomsConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ViewingRoomsEdge",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ViewingRoomsListItem_item"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ViewingRoomsConnection",
  "abstractKey": null
};

(node as any).hash = "8a1918701c9d279bcd4efea9352e49f0";

export default node;

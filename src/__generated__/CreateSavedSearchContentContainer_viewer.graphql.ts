/**
 * @generated SignedSource<<455ec4566b911197053974641e17554f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SubGroupStatus = "SUBSCRIBED" | "UNSUBSCRIBED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainer_viewer$data = {
  readonly notificationPreferences: ReadonlyArray<{
    readonly channel: string;
    readonly name: string;
    readonly status: SubGroupStatus;
  }>;
  readonly " $fragmentType": "CreateSavedSearchContentContainer_viewer";
};
export type CreateSavedSearchContentContainer_viewer$key = {
  readonly " $data"?: CreateSavedSearchContentContainer_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainer_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateSavedSearchContentContainer_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "NotificationPreference",
      "kind": "LinkedField",
      "name": "notificationPreferences",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
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
          "name": "channel",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "d3dd74ae3bcea1285f616419890b55b2";

export default node;

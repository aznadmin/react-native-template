/**
 * @generated SignedSource<<5f4238c08cfb31181b98cacc8bebd136>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SubGroupStatus = "SUBSCRIBED" | "UNSUBSCRIBED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EditSavedSearchAlert_viewer$data = {
  readonly notificationPreferences: ReadonlyArray<{
    readonly channel: string;
    readonly name: string;
    readonly status: SubGroupStatus;
  }>;
  readonly " $fragmentType": "EditSavedSearchAlert_viewer";
};
export type EditSavedSearchAlert_viewer$key = {
  readonly " $data"?: EditSavedSearchAlert_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditSavedSearchAlert_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditSavedSearchAlert_viewer",
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

(node as any).hash = "ab86539ba47e71e49bcefcf729e92c71";

export default node;

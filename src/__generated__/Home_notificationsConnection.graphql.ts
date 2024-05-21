/**
 * @generated SignedSource<<7692300ecc7a581ca0b404ed9da9ff25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_notificationsConnection$data = {
  readonly notificationsConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ActivityRail_notificationsConnection">;
  readonly " $fragmentType": "Home_notificationsConnection";
};
export type Home_notificationsConnection$key = {
  readonly " $data"?: Home_notificationsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_notificationsConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_notificationsConnection",
  "selections": [
    {
      "args": [
        {
          "kind": "Literal",
          "name": "count",
          "value": 10
        }
      ],
      "kind": "FragmentSpread",
      "name": "ActivityRail_notificationsConnection"
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "notificationsConnection(first:10)"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "195d8fcc53001e751581aa286deb016b";

export default node;

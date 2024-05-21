/**
 * @generated SignedSource<<eaa61c462b77c23c763cabce63cd8644>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotifications_me$data = {
  readonly receiveLotOpeningSoonNotification: boolean | null | undefined;
  readonly receiveNewSalesNotification: boolean | null | undefined;
  readonly receiveNewWorksNotification: boolean | null | undefined;
  readonly receiveOrderNotification: boolean | null | undefined;
  readonly receiveOutbidNotification: boolean | null | undefined;
  readonly receivePartnerOfferNotification: boolean | null | undefined;
  readonly receivePartnerShowNotification: boolean | null | undefined;
  readonly receivePromotionNotification: boolean | null | undefined;
  readonly receivePurchaseNotification: boolean | null | undefined;
  readonly receiveSaleOpeningClosingNotification: boolean | null | undefined;
  readonly receiveViewingRoomNotification: boolean | null | undefined;
  readonly " $fragmentType": "MyProfilePushNotifications_me";
};
export type MyProfilePushNotifications_me$key = {
  readonly " $data"?: MyProfilePushNotifications_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyProfilePushNotifications_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveLotOpeningSoonNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveNewSalesNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveNewWorksNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveOutbidNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receivePromotionNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receivePurchaseNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveSaleOpeningClosingNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveOrderNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receiveViewingRoomNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receivePartnerShowNotification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "receivePartnerOfferNotification",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "586aadedb0b65b74a51923a75a6f4b40";

export default node;

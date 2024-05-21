/**
 * @generated SignedSource<<2419070c13f196a117148676d9c418f6>>
 * @relayHash bee8efa672091dc6df810c2931879419
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID bee8efa672091dc6df810c2931879419

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SubGroupInputStatus = "SUBSCRIBED" | "UNSUBSCRIBED" | "%future added value";
export type updateNotificationPreferencesMutationInput = {
  authenticationToken?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  subscriptionGroups: ReadonlyArray<NotificationPreferenceInput>;
};
export type NotificationPreferenceInput = {
  channel?: string | null | undefined;
  name: string;
  status: SubGroupInputStatus;
};
export type updateNotificationPreferencesMutation$variables = {
  input: updateNotificationPreferencesMutationInput;
};
export type updateNotificationPreferencesMutation$data = {
  readonly updateNotificationPreferences: {
    readonly clientMutationId: string | null | undefined;
  } | null | undefined;
};
export type updateNotificationPreferencesMutation = {
  response: updateNotificationPreferencesMutation$data;
  variables: updateNotificationPreferencesMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "updateNotificationPreferencesMutationPayload",
    "kind": "LinkedField",
    "name": "updateNotificationPreferences",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "updateNotificationPreferencesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateNotificationPreferencesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "bee8efa672091dc6df810c2931879419",
    "metadata": {},
    "name": "updateNotificationPreferencesMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "6c1e056dae4681cefda36f01ea35c036";

export default node;

/**
 * @generated SignedSource<<147a9382fed9871379991013bf206144>>
 * @relayHash b347580584cd5a6c18c28920854e1278
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b347580584cd5a6c18c28920854e1278

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type deleteAlertInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type deleteSavedSearchAlertMutation$variables = {
  input: deleteAlertInput;
};
export type deleteSavedSearchAlertMutation$data = {
  readonly deleteAlert: {
    readonly responseOrError: {
      readonly alert?: {
        readonly internalID: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type deleteSavedSearchAlertMutation = {
  response: deleteSavedSearchAlertMutation$data;
  variables: deleteSavedSearchAlertMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "deleteAlertPayload",
        "kind": "LinkedField",
        "name": "deleteAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Alert",
                    "kind": "LinkedField",
                    "name": "alert",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "DeleteAlertSuccess",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "deleteAlertPayload",
        "kind": "LinkedField",
        "name": "deleteAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Alert",
                    "kind": "LinkedField",
                    "name": "alert",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "DeleteAlertSuccess",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b347580584cd5a6c18c28920854e1278",
    "metadata": {},
    "name": "deleteSavedSearchAlertMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "652f5e3b54636481f60292c6256ac625";

export default node;

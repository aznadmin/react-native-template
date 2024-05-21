/**
 * @generated SignedSource<<d3b96ca6447bad7852a8875c1306a4f5>>
 * @relayHash 7b6a7cadd05092bf22e9f9cba84e0a23
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7b6a7cadd05092bf22e9f9cba84e0a23

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateConversationMutationInput = {
  clientMutationId?: string | null | undefined;
  conversationId: string;
  dismissed?: boolean | null | undefined;
  fromLastViewedMessageId?: string | null | undefined;
  sellerOutcome?: string | null | undefined;
  sellerOutcomeComment?: string | null | undefined;
  toLastViewedMessageId?: string | null | undefined;
};
export type UpdateConversationMutation$variables = {
  input: UpdateConversationMutationInput;
};
export type UpdateConversationMutation$data = {
  readonly updateConversation: {
    readonly conversation: {
      readonly from_last_viewed_message_id: string | null | undefined;
      readonly internalID: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type UpdateConversationMutation = {
  response: UpdateConversationMutation$data;
  variables: UpdateConversationMutation$variables;
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
},
v3 = {
  "alias": "from_last_viewed_message_id",
  "args": null,
  "kind": "ScalarField",
  "name": "fromLastViewedMessageID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateConversationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateConversationMutationPayload",
        "kind": "LinkedField",
        "name": "updateConversation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "UpdateConversationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateConversationMutationPayload",
        "kind": "LinkedField",
        "name": "updateConversation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "7b6a7cadd05092bf22e9f9cba84e0a23",
    "metadata": {},
    "name": "UpdateConversationMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "81599675babd532c54fc6eb4de8b3371";

export default node;

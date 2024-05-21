/**
 * @generated SignedSource<<9e871241028ee25d55a2c404f5322d2d>>
 * @relayHash fc2f341104ce396015eafa4a10e55d94
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID fc2f341104ce396015eafa4a10e55d94

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SendConversationMessageMutationInput = {
  attachments?: ReadonlyArray<ConversationMessageAttachmentInput> | null | undefined;
  bodyHTML?: string | null | undefined;
  bodyText: string;
  clientMutationId?: string | null | undefined;
  from: string;
  fromId?: string | null | undefined;
  id: string;
  replyAll?: boolean | null | undefined;
  replyToMessageID: string;
  to?: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type ConversationMessageAttachmentInput = {
  id?: string | null | undefined;
  name: string;
  size?: string | null | undefined;
  type: string;
  url: string;
};
export type SendConversationMessageMutation$variables = {
  input: SendConversationMessageMutationInput;
};
export type SendConversationMessageMutation$data = {
  readonly sendConversationMessage: {
    readonly messageEdge: {
      readonly node: {
        readonly body: string | null | undefined;
        readonly id: string;
        readonly impulse_id: string;
        readonly is_from_user: boolean | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"Message_message">;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type SendConversationMessageMutation = {
  response: SendConversationMessageMutation$data;
  variables: SendConversationMessageMutation$variables;
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
  "alias": "impulse_id",
  "args": null,
  "kind": "ScalarField",
  "name": "impulseID",
  "storageKey": null
},
v3 = {
  "alias": "is_from_user",
  "args": null,
  "kind": "ScalarField",
  "name": "isFromUser",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
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
    "name": "SendConversationMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendConversationMessageMutationPayload",
        "kind": "LinkedField",
        "name": "sendConversationMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "kind": "LinkedField",
            "name": "messageEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Message_message"
                  }
                ],
                "storageKey": null
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
    "name": "SendConversationMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendConversationMessageMutationPayload",
        "kind": "LinkedField",
        "name": "sendConversationMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "kind": "LinkedField",
            "name": "messageEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFromUser",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFirstMessage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageInitiator",
                    "kind": "LinkedField",
                    "name": "from",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "email",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Attachment",
                    "kind": "LinkedField",
                    "name": "attachments",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "contentType",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "downloadURL",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fileName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
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
    "id": "fc2f341104ce396015eafa4a10e55d94",
    "metadata": {},
    "name": "SendConversationMessageMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "de9c31165ba6aff10f299db16ec743b0";

export default node;

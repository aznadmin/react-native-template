/**
 * @generated SignedSource<<b3982c8b0a96aea05ce6db8b2a978cb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Conversation_me$data = {
  readonly conversation: {
    readonly from: {
      readonly email: string;
    };
    readonly id: string;
    readonly internalID: string | null | undefined;
    readonly lastMessageID: string | null | undefined;
    readonly to: {
      readonly name: string;
    };
    readonly unread: boolean | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Composer_conversation" | "Messages_conversation">;
  } | null | undefined;
  readonly " $fragmentType": "Conversation_me";
};
export type Conversation_me$key = {
  readonly " $data"?: Conversation_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Conversation_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "conversationID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Conversation_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "conversationID"
        }
      ],
      "concreteType": "Conversation",
      "kind": "LinkedField",
      "name": "conversation",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Composer_conversation"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Messages_conversation"
        },
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
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastMessageID",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "unread",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ConversationResponder",
          "kind": "LinkedField",
          "name": "to",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ConversationInitiator",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "2bfd3ee73217a3dcf4b69d4865420109";

export default node;

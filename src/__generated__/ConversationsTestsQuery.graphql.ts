/**
 * @generated SignedSource<<911e312416b26b1530ef830e2178f3a8>>
 * @relayHash 6a9b3e793bf424e3eeb2d86739a4bdab
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6a9b3e793bf424e3eeb2d86739a4bdab

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationsTestsQuery$variables = Record<PropertyKey, never>;
export type ConversationsTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Conversations_me">;
  } | null | undefined;
};
export type ConversationsTestsQuery = {
  response: ConversationsTestsQuery$data;
  variables: ConversationsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "blurhash",
    "storageKey": null
  }
],
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Conversations_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ConversationsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "conversations",
            "args": (v0/*: any*/),
            "concreteType": "ConversationConnection",
            "kind": "LinkedField",
            "name": "conversationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Conversation",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": "last_message",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ConversationResponder",
                        "kind": "LinkedField",
                        "name": "to",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessageAt",
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
                        "concreteType": "ConversationItem",
                        "kind": "LinkedField",
                        "name": "items",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "item",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "date",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "artistNames",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "kind": "LinkedField",
                                    "name": "image",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  },
                                  (v1/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Partner",
                                    "kind": "LinkedField",
                                    "name": "partner",
                                    "plural": false,
                                    "selections": [
                                      (v1/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "Artwork",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Fair",
                                    "kind": "LinkedField",
                                    "name": "fair",
                                    "plural": false,
                                    "selections": (v4/*: any*/),
                                    "storageKey": null
                                  },
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "kind": "LinkedField",
                                    "name": "coverImage",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "Show",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v3/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalUnreadCount",
                "storageKey": null
              }
            ],
            "storageKey": "conversationsConnection(after:\"\",first:10)"
          },
          {
            "alias": "conversations",
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Conversations_conversations",
            "kind": "LinkedHandle",
            "name": "conversationsConnection"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "6a9b3e793bf424e3eeb2d86739a4bdab",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.conversations": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationConnection"
        },
        "me.conversations.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationEdge"
        },
        "me.conversations.edges.cursor": (v7/*: any*/),
        "me.conversations.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "me.conversations.edges.node.__typename": (v7/*: any*/),
        "me.conversations.edges.node.id": (v8/*: any*/),
        "me.conversations.edges.node.internalID": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "me.conversations.edges.node.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversations.edges.node.items.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationItemType"
        },
        "me.conversations.edges.node.items.item.__isNode": (v7/*: any*/),
        "me.conversations.edges.node.items.item.__typename": (v7/*: any*/),
        "me.conversations.edges.node.items.item.artistNames": (v9/*: any*/),
        "me.conversations.edges.node.items.item.coverImage": (v10/*: any*/),
        "me.conversations.edges.node.items.item.coverImage.blurhash": (v9/*: any*/),
        "me.conversations.edges.node.items.item.coverImage.url": (v9/*: any*/),
        "me.conversations.edges.node.items.item.date": (v9/*: any*/),
        "me.conversations.edges.node.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversations.edges.node.items.item.fair.id": (v8/*: any*/),
        "me.conversations.edges.node.items.item.fair.name": (v9/*: any*/),
        "me.conversations.edges.node.items.item.id": (v8/*: any*/),
        "me.conversations.edges.node.items.item.image": (v10/*: any*/),
        "me.conversations.edges.node.items.item.image.blurhash": (v9/*: any*/),
        "me.conversations.edges.node.items.item.image.url": (v9/*: any*/),
        "me.conversations.edges.node.items.item.internalID": (v8/*: any*/),
        "me.conversations.edges.node.items.item.name": (v9/*: any*/),
        "me.conversations.edges.node.items.item.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "me.conversations.edges.node.items.item.partner.id": (v8/*: any*/),
        "me.conversations.edges.node.items.item.partner.internalID": (v8/*: any*/),
        "me.conversations.edges.node.items.item.title": (v9/*: any*/),
        "me.conversations.edges.node.lastMessage": (v9/*: any*/),
        "me.conversations.edges.node.lastMessageAt": (v9/*: any*/),
        "me.conversations.edges.node.last_message": (v9/*: any*/),
        "me.conversations.edges.node.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversations.edges.node.to.id": (v8/*: any*/),
        "me.conversations.edges.node.to.name": (v7/*: any*/),
        "me.conversations.edges.node.unread": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "me.conversations.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversations.pageInfo.endCursor": (v9/*: any*/),
        "me.conversations.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "me.conversations.totalUnreadCount": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "me.id": (v8/*: any*/)
      }
    },
    "name": "ConversationsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1ce6c9c77b0615883bc152300e102875";

export default node;

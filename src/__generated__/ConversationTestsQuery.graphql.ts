/**
 * @generated SignedSource<<403a6c18ef1533b29e6d043e854fa4d9>>
 * @relayHash b3a9320003514b2ce0bd117425cc8a32
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b3a9320003514b2ce0bd117425cc8a32

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationTestsQuery$variables = {
  conversationID: string;
};
export type ConversationTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Conversation_me">;
  } | null | undefined;
};
export type ConversationTestsQuery = {
  response: ConversationTestsQuery$data;
  variables: ConversationTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "kind": "InlineFragment",
  "selections": (v9/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = [
  (v12/*: any*/),
  (v8/*: any*/)
],
v14 = [
  (v4/*: any*/),
  (v8/*: any*/)
],
v15 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stateReason",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromParticipant",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "definesTotal",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "offerAmountChanged",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v22 = [
  (v15/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
],
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderConnectionWithTotalCount"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "CommerceOrderEdge"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOrder"
},
v26 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v27 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOffer"
},
v29 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v30 = {
  "enumValues": [
    "BUYER",
    "SELLER"
  ],
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderParticipantEnum"
},
v31 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v32 = {
  "enumValues": [
    "ABANDONED",
    "APPROVED",
    "CANCELED",
    "FULFILLED",
    "IN_REVIEW",
    "PENDING",
    "PROCESSING_APPROVAL",
    "REFUNDED",
    "SUBMITTED"
  ],
  "nullable": false,
  "plural": false,
  "type": "CommerceOrderStateEnum"
},
v33 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v34 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ID"
},
v35 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ConversationItemType"
},
v36 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v37 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationTestsQuery",
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
            "name": "Conversation_me"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConversationTestsQuery",
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
                "alias": "conversationID",
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
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
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "artworkID",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "internalID",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
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
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v11/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": (v13/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v12/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v9/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Show",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "liveArtwork",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isOfferableFromInquiry",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isOfferable",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isAcquireable",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isEdition",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EditionSet",
                            "kind": "LinkedField",
                            "name": "editionSets",
                            "plural": true,
                            "selections": (v14/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "activeOrders",
                "args": [
                  (v15/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": [
                      "APPROVED",
                      "FULFILLED",
                      "SUBMITTED",
                      "REFUNDED",
                      "PROCESSING_APPROVAL"
                    ]
                  }
                ],
                "concreteType": "CommerceOrderConnectionWithTotalCount",
                "kind": "LinkedField",
                "name": "orderConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceOrderEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mode",
                            "storageKey": null
                          },
                          (v16/*: any*/),
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "stateExpiresAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lastTransactionFailed",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceOffer",
                                "kind": "LinkedField",
                                "name": "lastOffer",
                                "plural": false,
                                "selections": [
                                  (v18/*: any*/),
                                  (v11/*: any*/),
                                  (v19/*: any*/),
                                  (v20/*: any*/),
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 5
                                  }
                                ],
                                "concreteType": "CommerceOfferConnection",
                                "kind": "LinkedField",
                                "name": "offers",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOfferEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": (v14/*: any*/),
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "offers(first:5)"
                              }
                            ],
                            "type": "CommerceOfferOrder",
                            "abstractKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,states:[\"APPROVED\",\"FULFILLED\",\"SUBMITTED\",\"REFUNDED\",\"PROCESSING_APPROVAL\"])"
              },
              (v8/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationInitiator",
                "kind": "LinkedField",
                "name": "from",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationResponder",
                "kind": "LinkedField",
                "name": "to",
                "plural": false,
                "selections": (v13/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v15/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "participantType",
                    "value": "BUYER"
                  }
                ],
                "concreteType": "CommerceOrderConnectionWithTotalCount",
                "kind": "LinkedField",
                "name": "orderConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceOrderEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "orderHistory",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isCommerceOrderEventUnion"
                              },
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v11/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "orderUpdateState",
                                    "storageKey": null
                                  },
                                  (v16/*: any*/),
                                  (v17/*: any*/)
                                ],
                                "type": "CommerceOrderStateChangedEvent",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v11/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOffer",
                                    "kind": "LinkedField",
                                    "name": "offer",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "amount",
                                        "storageKey": null
                                      },
                                      (v18/*: any*/),
                                      (v19/*: any*/),
                                      (v20/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "respondsTo",
                                        "plural": false,
                                        "selections": [
                                          (v18/*: any*/),
                                          (v8/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "CommerceOfferSubmittedEvent",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,participantType:\"BUYER\")"
              },
              {
                "alias": null,
                "args": (v22/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messagesConnection",
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
                        "name": "startCursor",
                        "storageKey": null
                      },
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
                        "name": "hasPreviousPage",
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
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v8/*: any*/),
                          (v4/*: any*/),
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
                            "kind": "ScalarField",
                            "name": "body",
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Attachment",
                            "kind": "LinkedField",
                            "name": "attachments",
                            "plural": true,
                            "selections": [
                              (v8/*: any*/),
                              (v4/*: any*/),
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MessageInitiator",
                            "kind": "LinkedField",
                            "name": "from",
                            "plural": false,
                            "selections": [
                              (v21/*: any*/)
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
                "storageKey": "messagesConnection(first:10,sort:\"DESC\")"
              },
              {
                "alias": null,
                "args": (v22/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Messages_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
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
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b3a9320003514b2ce0bd117425cc8a32",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.conversation": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "me.conversation.activeOrders": (v23/*: any*/),
        "me.conversation.activeOrders.edges": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node": (v25/*: any*/),
        "me.conversation.activeOrders.edges.node.__typename": (v26/*: any*/),
        "me.conversation.activeOrders.edges.node.id": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.internalID": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer": (v28/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.createdAt": (v26/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.definesTotal": (v29/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.fromParticipant": (v30/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.id": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.offerAmountChanged": (v29/*: any*/),
        "me.conversation.activeOrders.edges.node.lastTransactionFailed": (v31/*: any*/),
        "me.conversation.activeOrders.edges.node.mode": {
          "enumValues": [
            "BUY",
            "OFFER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderModeEnum"
        },
        "me.conversation.activeOrders.edges.node.offers": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOfferConnection"
        },
        "me.conversation.activeOrders.edges.node.offers.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOfferEdge"
        },
        "me.conversation.activeOrders.edges.node.offers.edges.node": (v28/*: any*/),
        "me.conversation.activeOrders.edges.node.offers.edges.node.id": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.offers.edges.node.internalID": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.state": (v32/*: any*/),
        "me.conversation.activeOrders.edges.node.stateExpiresAt": (v33/*: any*/),
        "me.conversation.activeOrders.edges.node.stateReason": (v33/*: any*/),
        "me.conversation.conversationID": (v34/*: any*/),
        "me.conversation.from": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationInitiator"
        },
        "me.conversation.from.email": (v26/*: any*/),
        "me.conversation.from.id": (v27/*: any*/),
        "me.conversation.id": (v27/*: any*/),
        "me.conversation.internalID": (v34/*: any*/),
        "me.conversation.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversation.items.item": (v35/*: any*/),
        "me.conversation.items.item.__isNode": (v26/*: any*/),
        "me.conversation.items.item.__typename": (v26/*: any*/),
        "me.conversation.items.item.artistNames": (v33/*: any*/),
        "me.conversation.items.item.artworkID": (v27/*: any*/),
        "me.conversation.items.item.coverImage": (v36/*: any*/),
        "me.conversation.items.item.coverImage.aspectRatio": (v37/*: any*/),
        "me.conversation.items.item.coverImage.blurhash": (v33/*: any*/),
        "me.conversation.items.item.coverImage.url": (v33/*: any*/),
        "me.conversation.items.item.createdAt": (v33/*: any*/),
        "me.conversation.items.item.date": (v33/*: any*/),
        "me.conversation.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversation.items.item.fair.id": (v27/*: any*/),
        "me.conversation.items.item.fair.name": (v33/*: any*/),
        "me.conversation.items.item.href": (v33/*: any*/),
        "me.conversation.items.item.id": (v27/*: any*/),
        "me.conversation.items.item.image": (v36/*: any*/),
        "me.conversation.items.item.image.aspectRatio": (v37/*: any*/),
        "me.conversation.items.item.image.blurhash": (v33/*: any*/),
        "me.conversation.items.item.image.url": (v33/*: any*/),
        "me.conversation.items.item.internalID": (v27/*: any*/),
        "me.conversation.items.item.name": (v33/*: any*/),
        "me.conversation.items.item.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "me.conversation.items.item.partner.__isNode": (v26/*: any*/),
        "me.conversation.items.item.partner.__typename": (v26/*: any*/),
        "me.conversation.items.item.partner.id": (v27/*: any*/),
        "me.conversation.items.item.partner.name": (v33/*: any*/),
        "me.conversation.items.item.slug": (v27/*: any*/),
        "me.conversation.items.item.title": (v33/*: any*/),
        "me.conversation.items.liveArtwork": (v35/*: any*/),
        "me.conversation.items.liveArtwork.__isNode": (v26/*: any*/),
        "me.conversation.items.liveArtwork.__typename": (v26/*: any*/),
        "me.conversation.items.liveArtwork.editionSets": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "EditionSet"
        },
        "me.conversation.items.liveArtwork.editionSets.id": (v27/*: any*/),
        "me.conversation.items.liveArtwork.editionSets.internalID": (v27/*: any*/),
        "me.conversation.items.liveArtwork.id": (v27/*: any*/),
        "me.conversation.items.liveArtwork.internalID": (v27/*: any*/),
        "me.conversation.items.liveArtwork.isAcquireable": (v31/*: any*/),
        "me.conversation.items.liveArtwork.isEdition": (v31/*: any*/),
        "me.conversation.items.liveArtwork.isOfferable": (v31/*: any*/),
        "me.conversation.items.liveArtwork.isOfferableFromInquiry": (v31/*: any*/),
        "me.conversation.items.liveArtwork.slug": (v27/*: any*/),
        "me.conversation.lastMessageID": (v33/*: any*/),
        "me.conversation.messagesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageConnection"
        },
        "me.conversation.messagesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "MessageEdge"
        },
        "me.conversation.messagesConnection.edges.cursor": (v26/*: any*/),
        "me.conversation.messagesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Message"
        },
        "me.conversation.messagesConnection.edges.node.__typename": (v26/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Attachment"
        },
        "me.conversation.messagesConnection.edges.node.attachments.contentType": (v26/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.downloadURL": (v26/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.fileName": (v26/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.id": (v27/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.internalID": (v27/*: any*/),
        "me.conversation.messagesConnection.edges.node.body": (v33/*: any*/),
        "me.conversation.messagesConnection.edges.node.createdAt": (v33/*: any*/),
        "me.conversation.messagesConnection.edges.node.from": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageInitiator"
        },
        "me.conversation.messagesConnection.edges.node.from.email": (v33/*: any*/),
        "me.conversation.messagesConnection.edges.node.id": (v27/*: any*/),
        "me.conversation.messagesConnection.edges.node.internalID": (v27/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFirstMessage": (v31/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFromUser": (v31/*: any*/),
        "me.conversation.messagesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversation.messagesConnection.pageInfo.endCursor": (v33/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasNextPage": (v29/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasPreviousPage": (v29/*: any*/),
        "me.conversation.messagesConnection.pageInfo.startCursor": (v33/*: any*/),
        "me.conversation.orderConnection": (v23/*: any*/),
        "me.conversation.orderConnection.edges": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node": (v25/*: any*/),
        "me.conversation.orderConnection.edges.node.__typename": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.id": (v27/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "CommerceOrderEventUnion"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.__isCommerceOrderEventUnion": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.__typename": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.createdAt": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "CommerceOffer"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.offer.amount": (v33/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.definesTotal": (v29/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.fromParticipant": (v30/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.id": (v27/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.offerAmountChanged": (v29/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo": (v28/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.fromParticipant": (v30/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.id": (v27/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.orderUpdateState": (v33/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.state": (v32/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.stateReason": (v33/*: any*/),
        "me.conversation.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversation.to.id": (v27/*: any*/),
        "me.conversation.to.name": (v26/*: any*/),
        "me.conversation.unread": (v31/*: any*/),
        "me.id": (v27/*: any*/)
      }
    },
    "name": "ConversationTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "64e0e5fa20a72cb800d56c9645fd6790";

export default node;

/**
 * @generated SignedSource<<3f041ca3c3d910bef1618d734107375f>>
 * @relayHash f13a1e3f9edab81a2e15f0b2e09aa384
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f13a1e3f9edab81a2e15f0b2e09aa384

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BidderPositionInput = {
  artworkID: string;
  clientMutationId?: string | null | undefined;
  maxBidAmountCents: number;
  saleID: string;
};
export type ConfirmBidCreateBidderPositionMutation$variables = {
  input: BidderPositionInput;
};
export type ConfirmBidCreateBidderPositionMutation$data = {
  readonly createBidderPosition: {
    readonly result: {
      readonly message_description_md: string | null | undefined;
      readonly message_header: string | null | undefined;
      readonly position: {
        readonly internalID: string;
        readonly saleArtwork: {
          readonly artwork: {
            readonly myLotStanding: ReadonlyArray<{
              readonly activeBid: {
                readonly isWinning: boolean | null | undefined;
              } | null | undefined;
              readonly mostRecentBid: {
                readonly maxBid: {
                  readonly display: string | null | undefined;
                } | null | undefined;
              } | null | undefined;
            }> | null | undefined;
          } | null | undefined;
          readonly counts: {
            readonly bidderPositions: any | null | undefined;
          } | null | undefined;
          readonly currentBid: {
            readonly display: string | null | undefined;
          } | null | undefined;
          readonly reserveMessage: string | null | undefined;
        } | null | undefined;
        readonly suggested_next_bid: {
          readonly cents: number | null | undefined;
          readonly display: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
      readonly status: string;
    } | null | undefined;
  } | null | undefined;
};
export type ConfirmBidCreateBidderPositionMutation = {
  response: ConfirmBidCreateBidderPositionMutation$data;
  variables: ConfirmBidCreateBidderPositionMutation$variables;
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
  "name": "status",
  "storageKey": null
},
v3 = {
  "alias": "message_header",
  "args": null,
  "kind": "ScalarField",
  "name": "messageHeader",
  "storageKey": null
},
v4 = {
  "alias": "message_description_md",
  "args": null,
  "kind": "ScalarField",
  "name": "messageDescriptionMD",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v7 = {
  "alias": "suggested_next_bid",
  "args": null,
  "concreteType": "BidderPositionSuggestedNextBid",
  "kind": "LinkedField",
  "name": "suggestedNextBid",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cents",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reserveMessage",
  "storageKey": null
},
v9 = [
  (v6/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCurrentBid",
  "kind": "LinkedField",
  "name": "currentBid",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCounts",
  "kind": "LinkedField",
  "name": "counts",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bidderPositions",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "live",
    "value": true
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isWinning",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "BidderPositionMaxBid",
  "kind": "LinkedField",
  "name": "maxBid",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmBidCreateBidderPositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BidderPositionPayload",
        "kind": "LinkedField",
        "name": "createBidderPosition",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BidderPositionResult",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaleArtwork",
                    "kind": "LinkedField",
                    "name": "saleArtwork",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": (v12/*: any*/),
                            "concreteType": "LotStanding",
                            "kind": "LinkedField",
                            "name": "myLotStanding",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "BidderPosition",
                                "kind": "LinkedField",
                                "name": "activeBid",
                                "plural": false,
                                "selections": [
                                  (v13/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "BidderPosition",
                                "kind": "LinkedField",
                                "name": "mostRecentBid",
                                "plural": false,
                                "selections": [
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "myLotStanding(live:true)"
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
    "name": "ConfirmBidCreateBidderPositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BidderPositionPayload",
        "kind": "LinkedField",
        "name": "createBidderPosition",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BidderPositionResult",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaleArtwork",
                    "kind": "LinkedField",
                    "name": "saleArtwork",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": (v12/*: any*/),
                            "concreteType": "LotStanding",
                            "kind": "LinkedField",
                            "name": "myLotStanding",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "BidderPosition",
                                "kind": "LinkedField",
                                "name": "activeBid",
                                "plural": false,
                                "selections": [
                                  (v13/*: any*/),
                                  (v15/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "BidderPosition",
                                "kind": "LinkedField",
                                "name": "mostRecentBid",
                                "plural": false,
                                "selections": [
                                  (v14/*: any*/),
                                  (v15/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "myLotStanding(live:true)"
                          },
                          (v15/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
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
    "id": "f13a1e3f9edab81a2e15f0b2e09aa384",
    "metadata": {},
    "name": "ConfirmBidCreateBidderPositionMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "ea8fe1b16086285f4e116fe45d482dd2";

export default node;

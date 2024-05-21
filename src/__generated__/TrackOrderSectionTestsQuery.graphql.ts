/**
 * @generated SignedSource<<3c989f9575791be8ae5bf44ada5b2d9e>>
 * @relayHash ef4a9640648bb7779c0693a359a6f513
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ef4a9640648bb7779c0693a359a6f513

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TrackOrderSectionTestsQuery$variables = Record<PropertyKey, never>;
export type TrackOrderSectionTestsQuery$data = {
  readonly commerceOrder: {
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"TrackOrderSection_section">;
  } | null | undefined;
};
export type TrackOrderSectionTestsQuery = {
  response: TrackOrderSectionTestsQuery$data;
  variables: TrackOrderSectionTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TrackOrderSectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TrackOrderSection_section"
          }
        ],
        "storageKey": "commerceOrder(id:\"some-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TrackOrderSectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isCommerceOrder"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayState",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "CommerceLineItemConnection",
            "kind": "LinkedField",
            "name": "lineItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceLineItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceLineItem",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShipment",
                        "kind": "LinkedField",
                        "name": "shipment",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "status",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingNumber",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryStart",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryEnd",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "estimatedDeliveryWindow",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v2/*: any*/),
                        "concreteType": "CommerceFulfillmentConnection",
                        "kind": "LinkedField",
                        "name": "fulfillments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceFulfillmentEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceFulfillment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "createdAt",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "trackingId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "estimatedDelivery",
                                    "storageKey": null
                                  },
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "fulfillments(first:1)"
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "lineItems(first:1)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "commerceOrder(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "id": "ef4a9640648bb7779c0693a359a6f513",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "commerceOrder": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "commerceOrder.__isCommerceOrder": (v4/*: any*/),
        "commerceOrder.__typename": (v4/*: any*/),
        "commerceOrder.displayState": {
          "enumValues": [
            "ABANDONED",
            "APPROVED",
            "CANCELED",
            "FULFILLED",
            "IN_TRANSIT",
            "PENDING",
            "PROCESSING",
            "PROCESSING_APPROVAL",
            "REFUNDED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderDisplayStateEnum"
        },
        "commerceOrder.id": (v5/*: any*/),
        "commerceOrder.internalID": (v5/*: any*/),
        "commerceOrder.lineItems": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItemConnection"
        },
        "commerceOrder.lineItems.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceLineItemEdge"
        },
        "commerceOrder.lineItems.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItem"
        },
        "commerceOrder.lineItems.edges.node.fulfillments": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceFulfillmentConnection"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceFulfillmentEdge"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceFulfillment"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.createdAt": (v4/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.estimatedDelivery": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.id": (v5/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.trackingId": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.id": (v5/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceShipment"
        },
        "commerceOrder.lineItems.edges.node.shipment.deliveryEnd": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.deliveryStart": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.estimatedDeliveryWindow": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.id": (v5/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.status": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.trackingNumber": (v6/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.trackingUrl": (v6/*: any*/)
      }
    },
    "name": "TrackOrderSectionTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "ee9d582dd24c59d3fa11cdfe30c28560";

export default node;

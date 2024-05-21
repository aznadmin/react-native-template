/**
 * @generated SignedSource<<6c6352e7474e2a71de256d912d6dd4db>>
 * @relayHash 163de5a856541fd3220a8a92c2966093
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 163de5a856541fd3220a8a92c2966093

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WirePaymentSectionTestsQuery$variables = Record<PropertyKey, never>;
export type WirePaymentSectionTestsQuery$data = {
  readonly commerceOrder: {
    readonly " $fragmentSpreads": FragmentRefs<"WirePaymentSection_order">;
  } | null | undefined;
};
export type WirePaymentSectionTestsQuery = {
  response: WirePaymentSectionTestsQuery$data;
  variables: WirePaymentSectionTestsQuery$variables;
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WirePaymentSectionTestsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "WirePaymentSection_order"
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
    "name": "WirePaymentSectionTestsQuery",
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
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isCommerceOrder"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currencyCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "source",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "commerceOrder(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "id": "163de5a856541fd3220a8a92c2966093",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "commerceOrder": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "commerceOrder.__isCommerceOrder": (v1/*: any*/),
        "commerceOrder.__typename": (v1/*: any*/),
        "commerceOrder.code": (v1/*: any*/),
        "commerceOrder.currencyCode": (v1/*: any*/),
        "commerceOrder.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "commerceOrder.source": {
          "enumValues": [
            "artwork_page",
            "inquiry",
            "partner_offer",
            "private_sale"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderSourceEnum"
        }
      }
    },
    "name": "WirePaymentSectionTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "66b4c2f8e557c8dece5499fcafbaacad";

export default node;

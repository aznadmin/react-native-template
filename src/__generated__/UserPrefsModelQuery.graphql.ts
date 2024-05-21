/**
 * @generated SignedSource<<e3356e670693b0bb6da1bc88d7fad248>>
 * @relayHash 0576609d00abbe7e4857274245482120
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 0576609d00abbe7e4857274245482120

import { ConcreteRequest, Query } from 'relay-runtime';
export type CurrencyPreference = "EUR" | "GBP" | "USD" | "%future added value";
export type LengthUnitPreference = "CM" | "IN" | "%future added value";
export type UserPrefsModelQuery$variables = Record<PropertyKey, never>;
export type UserPrefsModelQuery$data = {
  readonly me: {
    readonly currencyPreference: CurrencyPreference;
    readonly lengthUnitPreference: LengthUnitPreference;
    readonly priceRange: string | null | undefined;
  } | null | undefined;
};
export type UserPrefsModelQuery = {
  response: UserPrefsModelQuery$data;
  variables: UserPrefsModelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lengthUnitPreference",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currencyPreference",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRange",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserPrefsModelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "UserPrefsModelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    ]
  },
  "params": {
    "id": "0576609d00abbe7e4857274245482120",
    "metadata": {},
    "name": "UserPrefsModelQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f84c75df4fa6a6cb95dbc8c011d47351";

export default node;

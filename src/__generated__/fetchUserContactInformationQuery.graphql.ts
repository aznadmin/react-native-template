/**
 * @generated SignedSource<<59d51bcd487c779da033b4c1521dac65>>
 * @relayHash e4586ad4442f6b2ae60a6349703936e7
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e4586ad4442f6b2ae60a6349703936e7

import { ConcreteRequest, Query } from 'relay-runtime';
export type fetchUserContactInformationQuery$variables = Record<PropertyKey, never>;
export type fetchUserContactInformationQuery$data = {
  readonly me: {
    readonly email: string | null | undefined;
    readonly name: string | null | undefined;
    readonly phoneNumber: {
      readonly isValid: boolean | null | undefined;
      readonly originalNumber: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type fetchUserContactInformationQuery = {
  response: fetchUserContactInformationQuery$data;
  variables: fetchUserContactInformationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "PhoneNumberType",
  "kind": "LinkedField",
  "name": "phoneNumber",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isValid",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "originalNumber",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "fetchUserContactInformationQuery",
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
    "name": "fetchUserContactInformationQuery",
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
    "id": "e4586ad4442f6b2ae60a6349703936e7",
    "metadata": {},
    "name": "fetchUserContactInformationQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f70c5881fefd450e9d24710ac315fb89";

export default node;

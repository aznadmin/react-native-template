/**
 * @generated SignedSource<<cb165fb7c4df496c9dc6160030e6191e>>
 * @relayHash 2a9481ee99ef977b10d9916f3943a168
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2a9481ee99ef977b10d9916f3943a168

import { ConcreteRequest, Query } from 'relay-runtime';
export type TimeOffsetProviderQuery$variables = Record<PropertyKey, never>;
export type TimeOffsetProviderQuery$data = {
  readonly system: {
    readonly time: {
      readonly unix: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type TimeOffsetProviderQuery = {
  response: TimeOffsetProviderQuery$data;
  variables: TimeOffsetProviderQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "System",
    "kind": "LinkedField",
    "name": "system",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SystemTime",
        "kind": "LinkedField",
        "name": "time",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "unix",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TimeOffsetProviderQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TimeOffsetProviderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "2a9481ee99ef977b10d9916f3943a168",
    "metadata": {},
    "name": "TimeOffsetProviderQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "ff8ce7414100bd7ef9284bc9352ade24";

export default node;

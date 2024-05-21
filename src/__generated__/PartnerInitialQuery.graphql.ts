/**
 * @generated SignedSource<<0121eb6e8144418859187210a67aba2f>>
 * @relayHash 303add45f5c1c9798d93701fd93682d7
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 303add45f5c1c9798d93701fd93682d7

import { ConcreteRequest, Query } from 'relay-runtime';
export type PartnerInitialQuery$variables = {
  partnerID: string;
};
export type PartnerInitialQuery$data = {
  readonly partner: {
    readonly displayArtistsSection: boolean | null | undefined;
  } | null | undefined;
};
export type PartnerInitialQuery = {
  response: PartnerInitialQuery$data;
  variables: PartnerInitialQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "partnerID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "partnerID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayArtistsSection",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerInitialQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PartnerInitialQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
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
    "id": "303add45f5c1c9798d93701fd93682d7",
    "metadata": {},
    "name": "PartnerInitialQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "220444220616b5447a741ffe07279cdf";

export default node;

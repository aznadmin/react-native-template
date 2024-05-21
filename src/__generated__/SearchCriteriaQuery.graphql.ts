/**
 * @generated SignedSource<<413fd399d44ba57930933472ff221dc7>>
 * @relayHash ce53ad9a1a3f1d1e256af1d6117f4d53
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ce53ad9a1a3f1d1e256af1d6117f4d53

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchCriteriaQuery$variables = {
  alertId: string;
};
export type SearchCriteriaQuery$data = {
  readonly me: {
    readonly alert: {
      readonly acquireable: boolean | null | undefined;
      readonly additionalGeneIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly atAuction: boolean | null | undefined;
      readonly attributionClass: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly colors: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly dimensionRange: string | null | undefined;
      readonly height: string | null | undefined;
      readonly inquireableOnly: boolean | null | undefined;
      readonly locationCities: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly majorPeriods: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly materialsTerms: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly offerable: boolean | null | undefined;
      readonly partnerIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly priceRange: string | null | undefined;
      readonly sizes: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly width: string | null | undefined;
    } | null | undefined;
    readonly email: string | null | undefined;
  } | null | undefined;
};
export type SearchCriteriaQuery = {
  response: SearchCriteriaQuery$data;
  variables: SearchCriteriaQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "alertId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "alertId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "acquireable",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "additionalGeneIDs",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "atAuction",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "attributionClass",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "colors",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dimensionRange",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "inquireableOnly",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationCities",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "majorPeriods",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialsTerms",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "offerable",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "partnerIDs",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRange",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sizes",
  "storageKey": null
},
v19 = {
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
    "name": "SearchCriteriaQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/)
            ],
            "storageKey": null
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
    "name": "SearchCriteriaQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v19/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "ce53ad9a1a3f1d1e256af1d6117f4d53",
    "metadata": {},
    "name": "SearchCriteriaQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "fae26ccacd0a548e32a14f7b03464fcd";

export default node;

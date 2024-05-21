/**
 * @generated SignedSource<<1b0999861de561def652ec90c0150de5>>
 * @relayHash eaa237911a19c5c76a5bca49f994e70a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID eaa237911a19c5c76a5bca49f994e70a

import { ConcreteRequest, Query } from 'relay-runtime';
export type SavedSearchAlertQuery$variables = {
  alertId: string;
};
export type SavedSearchAlertQuery$data = {
  readonly me: {
    readonly alert: {
      readonly acquireable: boolean | null | undefined;
      readonly additionalGeneIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly artistIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly artistSeriesIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly atAuction: boolean | null | undefined;
      readonly attributionClass: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly colors: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly dimensionRange: string | null | undefined;
      readonly displayName: string;
      readonly height: string | null | undefined;
      readonly inquireableOnly: boolean | null | undefined;
      readonly locationCities: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly majorPeriods: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly materialsTerms: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly offerable: boolean | null | undefined;
      readonly partnerIDs: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly priceRange: string | null | undefined;
      readonly settings: {
        readonly details: string | null | undefined;
        readonly email: boolean;
        readonly name: string | null | undefined;
        readonly push: boolean;
      };
      readonly sizes: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly width: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type SavedSearchAlertQuery = {
  response: SavedSearchAlertQuery$data;
  variables: SavedSearchAlertQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "alertId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "alertId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "acquireable",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "additionalGeneIDs",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistIDs",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistSeriesIDs",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "atAuction",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "attributionClass",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "colors",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dimensionRange",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sizes",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "inquireableOnly",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationCities",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "majorPeriods",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "materialsTerms",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "offerable",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "partnerIDs",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceRange",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "AlertSettings",
  "kind": "LinkedField",
  "name": "settings",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "push",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "details",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v22 = {
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
    "name": "SavedSearchAlertQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/)
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
    "name": "SavedSearchAlertQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/)
            ],
            "storageKey": null
          },
          (v22/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "eaa237911a19c5c76a5bca49f994e70a",
    "metadata": {},
    "name": "SavedSearchAlertQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1330afe34f4aff0c31e3c56a9d5dee0b";

export default node;

/**
 * @generated SignedSource<<c884e322b37ea804351ef1fddd11451c>>
 * @relayHash c8bda1a9e29fd6a0bee240435af7819d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c8bda1a9e29fd6a0bee240435af7819d

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AlertSettingsFrequency = "DAILY" | "INSTANT" | "%future added value";
export type createAlertInput = {
  acquireable?: boolean | null | undefined;
  additionalGeneIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  artistIDs: ReadonlyArray<string | null | undefined>;
  artistSeriesIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  atAuction?: boolean | null | undefined;
  attributionClass?: ReadonlyArray<string | null | undefined> | null | undefined;
  clientMutationId?: string | null | undefined;
  colors?: ReadonlyArray<string | null | undefined> | null | undefined;
  dimensionRange?: string | null | undefined;
  height?: string | null | undefined;
  inquireableOnly?: boolean | null | undefined;
  keyword?: string | null | undefined;
  locationCities?: ReadonlyArray<string | null | undefined> | null | undefined;
  majorPeriods?: ReadonlyArray<string | null | undefined> | null | undefined;
  materialsTerms?: ReadonlyArray<string | null | undefined> | null | undefined;
  offerable?: boolean | null | undefined;
  partnerIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  priceRange?: string | null | undefined;
  settings?: AlertSettingsInput | null | undefined;
  sizes?: ReadonlyArray<string | null | undefined> | null | undefined;
  width?: string | null | undefined;
};
export type AlertSettingsInput = {
  details?: string | null | undefined;
  email?: boolean | null | undefined;
  frequency?: AlertSettingsFrequency | null | undefined;
  name?: string | null | undefined;
  push?: boolean | null | undefined;
};
export type createSavedSearchAlertMutation$variables = {
  input: createAlertInput;
};
export type createSavedSearchAlertMutation$data = {
  readonly createAlert: {
    readonly responseOrError: {
      readonly alert?: {
        readonly internalID: string;
        readonly searchCriteriaID: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createSavedSearchAlertMutation = {
  response: createSavedSearchAlertMutation$data;
  variables: createSavedSearchAlertMutation$variables;
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
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchCriteriaID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "createAlertPayload",
        "kind": "LinkedField",
        "name": "createAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Alert",
                    "kind": "LinkedField",
                    "name": "alert",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "CreateAlertSuccess",
                "abstractKey": null
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
    "name": "createSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "createAlertPayload",
        "kind": "LinkedField",
        "name": "createAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
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
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Alert",
                    "kind": "LinkedField",
                    "name": "alert",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
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
                ],
                "type": "CreateAlertSuccess",
                "abstractKey": null
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
    "id": "c8bda1a9e29fd6a0bee240435af7819d",
    "metadata": {},
    "name": "createSavedSearchAlertMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "ed8b6e72afc23c9961f24e6f36298912";

export default node;

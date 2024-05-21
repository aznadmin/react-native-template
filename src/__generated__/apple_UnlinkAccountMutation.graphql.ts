/**
 * @generated SignedSource<<8cfec9763abea9168e4613f68b08a7be>>
 * @relayHash a45cc703708c27461362ceaed2039010
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a45cc703708c27461362ceaed2039010

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthenticationProvider = "APPLE" | "FACEBOOK" | "GOOGLE" | "%future added value";
export type apple_UnlinkAccountMutation$variables = {
  provider: AuthenticationProvider;
};
export type apple_UnlinkAccountMutation$data = {
  readonly unlinkAuthentication: {
    readonly me: {
      readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
    };
  } | null | undefined;
};
export type apple_UnlinkAccountMutation = {
  response: apple_UnlinkAccountMutation$data;
  variables: apple_UnlinkAccountMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "provider"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "provider",
        "variableName": "provider"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
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
    "name": "apple_UnlinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "unlinkAuthentication",
        "plural": false,
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "MyAccount_me"
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
    "name": "apple_UnlinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "unlinkAuthentication",
        "plural": false,
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
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "paddleNumber",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPassword",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priceRange",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priceRangeMax",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priceRangeMin",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AuthenticationType",
                "kind": "LinkedField",
                "name": "authentications",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "provider",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kinds",
                    "value": [
                      "sms",
                      "app",
                      "backup"
                    ]
                  }
                ],
                "concreteType": null,
                "kind": "LinkedField",
                "name": "secondFactors",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  }
                ],
                "storageKey": "secondFactors(kinds:[\"sms\",\"app\",\"backup\"])"
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "a45cc703708c27461362ceaed2039010",
    "metadata": {},
    "name": "apple_UnlinkAccountMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "c038edca629763edb8b787ca1139e8a9";

export default node;

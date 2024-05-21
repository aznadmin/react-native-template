/**
 * @generated SignedSource<<b51082892c554499e00067d2d09c5d78>>
 * @relayHash 0bb5663f23cd61950d97cc4fadbeac28
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 0bb5663f23cd61950d97cc4fadbeac28

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthenticationProvider = "APPLE" | "FACEBOOK" | "GOOGLE" | "%future added value";
export type google_LinkAccountMutation$variables = {
  oauthToken: string;
  provider: AuthenticationProvider;
};
export type google_LinkAccountMutation$data = {
  readonly linkAuthentication: {
    readonly me: {
      readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
    };
  } | null | undefined;
};
export type google_LinkAccountMutation = {
  response: google_LinkAccountMutation$data;
  variables: google_LinkAccountMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "oauthToken"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "provider"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "oauthToken",
        "variableName": "oauthToken"
      },
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "google_LinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "linkAuthentication",
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "google_LinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "linkAuthentication",
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
                  (v3/*: any*/)
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
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "0bb5663f23cd61950d97cc4fadbeac28",
    "metadata": {},
    "name": "google_LinkAccountMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "bcb961463e29ac6e9da48618da38594e";

export default node;

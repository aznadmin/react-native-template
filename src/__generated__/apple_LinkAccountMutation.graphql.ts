/**
 * @generated SignedSource<<d7035eec2e521a4b855f84b02c24bbde>>
 * @relayHash d23b32a3dd80fb8ddf8129d040aa82d0
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d23b32a3dd80fb8ddf8129d040aa82d0

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthenticationProvider = "APPLE" | "FACEBOOK" | "GOOGLE" | "%future added value";
export type apple_LinkAccountMutation$variables = {
  appleUid: string;
  email: string;
  idToken: string;
  name: string;
  oauthToken: string;
  provider: AuthenticationProvider;
};
export type apple_LinkAccountMutation$data = {
  readonly linkAuthentication: {
    readonly me: {
      readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
    };
  } | null | undefined;
};
export type apple_LinkAccountMutation = {
  response: apple_LinkAccountMutation$data;
  variables: apple_LinkAccountMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "appleUid"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "idToken"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "oauthToken"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "provider"
},
v6 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "appleUid",
        "variableName": "appleUid"
      },
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "idToken",
        "variableName": "idToken"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
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
v7 = {
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "apple_LinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
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
      (v5/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "apple_LinkAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
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
                  (v7/*: any*/)
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
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "d23b32a3dd80fb8ddf8129d040aa82d0",
    "metadata": {},
    "name": "apple_LinkAccountMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "f402393ace149e2037e5e9fe2244644b";

export default node;

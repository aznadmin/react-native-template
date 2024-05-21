/**
 * @generated SignedSource<<d2f75079136313b33e5cd16e15a5c4b0>>
 * @relayHash 911a1269a5a33b71e9f3a4fac6edcc98
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 911a1269a5a33b71e9f3a4fac6edcc98

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowShowInput = {
  clientMutationId?: string | null | undefined;
  partnerShowID?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ShowItemRowMutation$variables = {
  input: FollowShowInput;
};
export type ShowItemRowMutation$data = {
  readonly followShow: {
    readonly show: {
      readonly internalID: string;
      readonly is_followed: boolean | null | undefined;
      readonly slug: string;
    } | null | undefined;
  } | null | undefined;
};
export type ShowItemRowMutation = {
  response: ShowItemRowMutation$data;
  variables: ShowItemRowMutation$variables;
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
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": "is_followed",
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowItemRowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowShowPayload",
        "kind": "LinkedField",
        "name": "followShow",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Show",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
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
    "name": "ShowItemRowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowShowPayload",
        "kind": "LinkedField",
        "name": "followShow",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Show",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "911a1269a5a33b71e9f3a4fac6edcc98",
    "metadata": {},
    "name": "ShowItemRowMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "89791c55f4d66bcc372618b690e8ca2d";

export default node;

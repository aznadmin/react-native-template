/**
 * @generated SignedSource<<6b8fbe8e78af64754447baa4967a9b20>>
 * @relayHash 05520c75c82279a720e4e44a4c424fca
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 05520c75c82279a720e4e44a4c424fca

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowProfileInput = {
  clientMutationId?: string | null | undefined;
  profileID?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type PartnerFollowButtonFollowMutation$variables = {
  input: FollowProfileInput;
};
export type PartnerFollowButtonFollowMutation$data = {
  readonly followProfile: {
    readonly profile: {
      readonly counts: {
        readonly follows: any | null | undefined;
      } | null | undefined;
      readonly id: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null | undefined;
      readonly slug: string;
    } | null | undefined;
  } | null | undefined;
};
export type PartnerFollowButtonFollowMutation = {
  response: PartnerFollowButtonFollowMutation$data;
  variables: PartnerFollowButtonFollowMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FollowProfilePayload",
    "kind": "LinkedField",
    "name": "followProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProfileCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "follows",
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerFollowButtonFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PartnerFollowButtonFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "05520c75c82279a720e4e44a4c424fca",
    "metadata": {},
    "name": "PartnerFollowButtonFollowMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "b2af8a650ff09a2c72c62fc002e34b8c";

export default node;

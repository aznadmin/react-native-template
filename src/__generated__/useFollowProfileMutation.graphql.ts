/**
 * @generated SignedSource<<a6542ba8df874e5beee105b317cea5ac>>
 * @relayHash e51b5355b9551c22551f518e3fb2a70d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e51b5355b9551c22551f518e3fb2a70d

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowProfileInput = {
  clientMutationId?: string | null | undefined;
  profileID?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type useFollowProfileMutation$variables = {
  input: FollowProfileInput;
};
export type useFollowProfileMutation$data = {
  readonly followProfile: {
    readonly profile: {
      readonly id: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type useFollowProfileMutation = {
  response: useFollowProfileMutation$data;
  variables: useFollowProfileMutation$variables;
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
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
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
    "name": "useFollowProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useFollowProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "e51b5355b9551c22551f518e3fb2a70d",
    "metadata": {},
    "name": "useFollowProfileMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "1c78f879d9d774ad588aa04344b973b1";

export default node;

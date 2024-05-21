/**
 * @generated SignedSource<<6c1e61e9d9cd88eb8bfdbbaf140a8075>>
 * @relayHash bff3eff2171c364713c377f5c6a9e977
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID bff3eff2171c364713c377f5c6a9e977

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowProfileInput = {
  clientMutationId?: string | null | undefined;
  profileID?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type OnboardingPartnerListItemNewFollowArtistMutation$variables = {
  input: FollowProfileInput;
};
export type OnboardingPartnerListItemNewFollowArtistMutation$data = {
  readonly followProfile: {
    readonly profile: {
      readonly id: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type OnboardingPartnerListItemNewFollowArtistMutation = {
  response: OnboardingPartnerListItemNewFollowArtistMutation$data;
  variables: OnboardingPartnerListItemNewFollowArtistMutation$variables;
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
    "name": "OnboardingPartnerListItemNewFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OnboardingPartnerListItemNewFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "bff3eff2171c364713c377f5c6a9e977",
    "metadata": {},
    "name": "OnboardingPartnerListItemNewFollowArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "2bef864f2f8972055d5b5ee54cfc5e48";

export default node;

/**
 * @generated SignedSource<<37f15a988e7309b478462e8c341d7f9c>>
 * @relayHash 5a883d2767665aa3eeb134f8780d4263
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 5a883d2767665aa3eeb134f8780d4263

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateArtistMutationInput = {
  birthday?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  deathday?: string | null | undefined;
  displayName: string;
  firstName?: string | null | undefined;
  isPersonalArtist?: boolean | null | undefined;
  lastName?: string | null | undefined;
  middleName?: string | null | undefined;
  nationality?: string | null | undefined;
};
export type createArtistMutation$variables = {
  input: CreateArtistMutationInput;
};
export type createArtistMutation$data = {
  readonly createArtist: {
    readonly artistOrError: {
      readonly __typename: "CreateArtistFailure";
      readonly mutationError: {
        readonly message: string;
      } | null | undefined;
    } | {
      readonly __typename: "CreateArtistSuccess";
      readonly artist: {
        readonly displayName: string | null | undefined;
        readonly internalID: string;
      } | null | undefined;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    } | null | undefined;
  } | null | undefined;
};
export type createArtistMutation = {
  response: createArtistMutation$data;
  variables: createArtistMutation$variables;
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
  "name": "__typename",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "kind": "LinkedField",
      "name": "mutationError",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CreateArtistFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createArtistMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateArtistMutationPayload",
        "kind": "LinkedField",
        "name": "createArtist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artistOrError",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "artist",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "CreateArtistSuccess",
                "abstractKey": null
              },
              (v5/*: any*/)
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
    "name": "createArtistMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateArtistMutationPayload",
        "kind": "LinkedField",
        "name": "createArtist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artistOrError",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "artist",
                    "plural": false,
                    "selections": [
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
                "type": "CreateArtistSuccess",
                "abstractKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "5a883d2767665aa3eeb134f8780d4263",
    "metadata": {},
    "name": "createArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "0346f7b3fdf1361ad503fafcc5ead54a";

export default node;

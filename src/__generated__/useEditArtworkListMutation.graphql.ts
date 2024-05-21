/**
 * @generated SignedSource<<feb0210b40dd412bbc261b5cb43490d9>>
 * @relayHash d210f5554ea7649084188508a2106758
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d210f5554ea7649084188508a2106758

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateCollectionInput = {
  clientMutationId?: string | null | undefined;
  id: string;
  name: string;
  shareableWithPartners?: boolean | null | undefined;
};
export type useEditArtworkListMutation$variables = {
  input: updateCollectionInput;
};
export type useEditArtworkListMutation$data = {
  readonly updateCollection: {
    readonly responseOrError: {
      readonly __typename: "UpdateCollectionFailure";
      readonly mutationError: {
        readonly fieldErrors: ReadonlyArray<{
          readonly message: string;
          readonly name: string;
        } | null | undefined> | null | undefined;
      } | null | undefined;
    } | {
      readonly __typename: "UpdateCollectionSuccess";
      readonly artworkList: {
        readonly internalID: string;
        readonly name: string;
        readonly shareableWithPartners: boolean;
      } | null | undefined;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    } | null | undefined;
  } | null | undefined;
};
export type useEditArtworkListMutation = {
  response: useEditArtworkListMutation$data;
  variables: useEditArtworkListMutation$variables;
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shareableWithPartners",
  "storageKey": null
},
v6 = {
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
          "concreteType": "FieldErrorResults",
          "kind": "LinkedField",
          "name": "fieldErrors",
          "plural": true,
          "selections": [
            (v4/*: any*/),
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
      "storageKey": null
    }
  ],
  "type": "UpdateCollectionFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useEditArtworkListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateCollectionPayload",
        "kind": "LinkedField",
        "name": "updateCollection",
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
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "artworkList",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "UpdateCollectionSuccess",
                "abstractKey": null
              },
              (v6/*: any*/)
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
    "name": "useEditArtworkListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateCollectionPayload",
        "kind": "LinkedField",
        "name": "updateCollection",
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
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "artworkList",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
                "type": "UpdateCollectionSuccess",
                "abstractKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "d210f5554ea7649084188508a2106758",
    "metadata": {},
    "name": "useEditArtworkListMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "41fcc15f348aa97c991fcfa5af210aa0";

export default node;

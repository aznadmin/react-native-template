/**
 * @generated SignedSource<<f4625cfd2b4a1559764b4bc329dcab08>>
 * @relayHash 22522b5eebbd84f33bb7cf88870fcd15
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 22522b5eebbd84f33bb7cf88870fcd15

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateMeCollectionsMutationInput = {
  attributes: ReadonlyArray<UpdateMeCollectionInput>;
  clientMutationId?: string | null | undefined;
};
export type UpdateMeCollectionInput = {
  id: string;
  shareableWithPartners: boolean;
};
export type useUpdateArtworkListOfferSettingsMutation$variables = {
  input: updateMeCollectionsMutationInput;
};
export type useUpdateArtworkListOfferSettingsMutation$data = {
  readonly updateMeCollectionsMutation: {
    readonly meCollectionsOrErrors: ReadonlyArray<{
      readonly collection?: {
        readonly artworksCount: number;
        readonly id: string;
        readonly name: string;
        readonly shareableWithPartners: boolean;
      } | null | undefined;
      readonly mutationError?: {
        readonly message: string;
        readonly type: string | null | undefined;
      } | null | undefined;
    }>;
  } | null | undefined;
};
export type useUpdateArtworkListOfferSettingsMutation = {
  response: useUpdateArtworkListOfferSettingsMutation$data;
  variables: useUpdateArtworkListOfferSettingsMutation$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
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
          "name": "shareableWithPartners",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworksCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UpdateMeCollectionsSuccess",
  "abstractKey": null
},
v3 = {
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
          "name": "type",
          "storageKey": null
        },
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
  "type": "UpdateMeCollectionsFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateArtworkListOfferSettingsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateMeCollectionsMutationPayload",
        "kind": "LinkedField",
        "name": "updateMeCollectionsMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "meCollectionsOrErrors",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "useUpdateArtworkListOfferSettingsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateMeCollectionsMutationPayload",
        "kind": "LinkedField",
        "name": "updateMeCollectionsMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "meCollectionsOrErrors",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
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
    "id": "22522b5eebbd84f33bb7cf88870fcd15",
    "metadata": {},
    "name": "useUpdateArtworkListOfferSettingsMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "0142d8eb9bc5c5e7f840169144997751";

export default node;

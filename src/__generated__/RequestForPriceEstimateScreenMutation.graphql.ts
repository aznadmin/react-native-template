/**
 * @generated SignedSource<<92f9aed37c891d9ce091b25afcd8c6cc>>
 * @relayHash ecaaa789f9d3a1ec2becc1cf59876c6e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ecaaa789f9d3a1ec2becc1cf59876c6e

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RequestPriceEstimateInput = {
  artworkId: string;
  clientMutationId?: string | null | undefined;
  requesterEmail?: string | null | undefined;
  requesterName?: string | null | undefined;
  requesterPhoneNumber?: string | null | undefined;
};
export type RequestForPriceEstimateScreenMutation$variables = {
  input: RequestPriceEstimateInput;
};
export type RequestForPriceEstimateScreenMutation$data = {
  readonly requestPriceEstimate: {
    readonly priceEstimateParamsOrError: {
      readonly mutationError?: {
        readonly error: string | null | undefined;
      } | null | undefined;
      readonly submittedPriceEstimateParams?: {
        readonly artworkId: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type RequestForPriceEstimateScreenMutation = {
  response: RequestForPriceEstimateScreenMutation$data;
  variables: RequestForPriceEstimateScreenMutation$variables;
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
      "concreteType": "SubmittedPriceEstimateParams",
      "kind": "LinkedField",
      "name": "submittedPriceEstimateParams",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworkId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RequestPriceEstimatedMutationSuccess",
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
          "name": "error",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RequestPriceEstimatedMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestForPriceEstimateScreenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestPriceEstimatePayload",
        "kind": "LinkedField",
        "name": "requestPriceEstimate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "priceEstimateParamsOrError",
            "plural": false,
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
    "name": "RequestForPriceEstimateScreenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestPriceEstimatePayload",
        "kind": "LinkedField",
        "name": "requestPriceEstimate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "priceEstimateParamsOrError",
            "plural": false,
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
    "id": "ecaaa789f9d3a1ec2becc1cf59876c6e",
    "metadata": {},
    "name": "RequestForPriceEstimateScreenMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "fdef1468a66c582cfff68917f36ab6d4";

export default node;

/**
 * @generated SignedSource<<eb5ff7e501fb309863ca622ac98b2698>>
 * @relayHash 260a1942dc4c4e19ca972ce4c3f16e3c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 260a1942dc4c4e19ca972ce4c3f16e3c

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateConsignmentInquiryMutationInput = {
  clientMutationId?: string | null | undefined;
  email: string;
  message: string;
  name: string;
  phoneNumber?: string | null | undefined;
  recipientEmail?: string | null | undefined;
  userId?: string | null | undefined;
};
export type ConsignmentInquiryScreenMutation$variables = {
  input: CreateConsignmentInquiryMutationInput;
};
export type ConsignmentInquiryScreenMutation$data = {
  readonly createConsignmentInquiry: {
    readonly consignmentInquiryOrError: {
      readonly consignmentInquiry?: {
        readonly internalID: number;
      } | null | undefined;
      readonly mutationError?: {
        readonly error: string | null | undefined;
        readonly message: string;
        readonly statusCode: number | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ConsignmentInquiryScreenMutation = {
  response: ConsignmentInquiryScreenMutation$data;
  variables: ConsignmentInquiryScreenMutation$variables;
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
      "concreteType": "ConsignmentInquiry",
      "kind": "LinkedField",
      "name": "consignmentInquiry",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ConsignmentInquiryMutationSuccess",
  "abstractKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ConsignmentInquiryMutationError",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "statusCode",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ConsignmentInquiryMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConsignmentInquiryScreenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateConsignmentInquiryMutationPayload",
        "kind": "LinkedField",
        "name": "createConsignmentInquiry",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "consignmentInquiryOrError",
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
    "name": "ConsignmentInquiryScreenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateConsignmentInquiryMutationPayload",
        "kind": "LinkedField",
        "name": "createConsignmentInquiry",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "consignmentInquiryOrError",
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
    "id": "260a1942dc4c4e19ca972ce4c3f16e3c",
    "metadata": {},
    "name": "ConsignmentInquiryScreenMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "aeaa7e28eb5934ca220d3edd16bb6d67";

export default node;

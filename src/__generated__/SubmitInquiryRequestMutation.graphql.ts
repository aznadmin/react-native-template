/**
 * @generated SignedSource<<e0b48f3baf6b8305b7acb3332384fba3>>
 * @relayHash e1a8058daf49935f0c3659d86230efde
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e1a8058daf49935f0c3659d86230efde

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SubmitInquiryRequestMutationInput = {
  clientMutationId?: string | null | undefined;
  contactGallery?: boolean | null | undefined;
  inquireableID: string;
  inquireableType: string;
  message?: string | null | undefined;
  questions?: ReadonlyArray<InquiryQuestionInput | null | undefined> | null | undefined;
};
export type InquiryQuestionInput = {
  details?: string | null | undefined;
  questionID: string;
};
export type SubmitInquiryRequestMutation$variables = {
  input: SubmitInquiryRequestMutationInput;
};
export type SubmitInquiryRequestMutation$data = {
  readonly submitInquiryRequestMutation: {
    readonly inquiryRequest: {
      readonly inquireable: {
        readonly __typename: "Artwork";
        readonly artists: ReadonlyArray<{
          readonly birthday: string | null | undefined;
          readonly name: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly title: string | null | undefined;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type SubmitInquiryRequestMutation = {
  response: SubmitInquiryRequestMutation$data;
  variables: SubmitInquiryRequestMutation$variables;
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
  "name": "title",
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
  "name": "birthday",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitInquiryRequestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmitInquiryRequestMutationPayload",
        "kind": "LinkedField",
        "name": "submitInquiryRequestMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "InquiryRequest",
            "kind": "LinkedField",
            "name": "inquiryRequest",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "inquireable",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Artwork",
                    "abstractKey": null
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
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubmitInquiryRequestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmitInquiryRequestMutationPayload",
        "kind": "LinkedField",
        "name": "submitInquiryRequestMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "InquiryRequest",
            "kind": "LinkedField",
            "name": "inquiryRequest",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "inquireable",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Artwork",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
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
    "id": "e1a8058daf49935f0c3659d86230efde",
    "metadata": {},
    "name": "SubmitInquiryRequestMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "eaf73a3a8eeaa9811ff235217157b4b2";

export default node;

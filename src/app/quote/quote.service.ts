import { Injectable } from "@angular/core";

const coveragesList = [
  {
    title: "Excess Liability",
    coverageType: "excessLiability",
    steps: [
      {
        id: "excessLiabilityGeneralInformation",
        title: "General Information",
        elements: [
          {
            elementId: "insuredDetails",
            title: "Insured Details",
            fields: {
              namedInsured: {default: "", required: true},
              businessType: {default: "", required: true},
              effectiveDate: {default: "", required: true},
              expirationDate: {default: "", required: true},
              term: {default: "", required: true},
          },
            show: true,
            settings: {}
          },
          {
            elementId: "mailingAddress",
            title: "Mailing Address",
            fields: {
              street1: {default: "", required: true},
              street2: {default: "", required: true},
              city: {default: "", required: true},
              zip: {default: "", required: true},
              state: {default: "", required: true},
            },
            show: true,
            settings: {}
          },
          {
            elementId: "physicalAddress",
            title: "Physical Address",
            fields: {
              street1: {default: "", required: true},
              street2: {default: "", required: true},
              city: {default: "", required: true},
              zip: {default: "", required: true},
              state: {default: "", required: true},
            },
            show: true,
            settings: {}
          },
          {
            elementId: "map",
            fields: {},
            show: true,
            settings: {}
          }
        ],
      },
      {
        id: "excessLiabilitySupplementalQuestions",
        title: "Supp. Questions",
        elements: [
          {
            elementId: "questions",
            title: "",
            settings: {}
          }
        ],
      },
      {
        title: "Review",
        elements: [
          {
            elementId: "",
            title: "",
            fields: [],
            settings: {}
          }
        ],
      },
      {
        title: "Bind",
        elements: [{

        }],
      },
    ],
  },
  {
    title: "Inland Marine - Contractors",
    coverageType: "imContractors",
    steps: [
      {
        id: "imContractorsGeneralInformation",
        title: "General Information",
        elements: [
          {
            elementId: "insuredDetails",
            title: "Insured Details",
            fields: {
              namedInsured: {default: "", required: true},
              businessType: {default: "", required: true},
              effectiveDate: {default: "", required: true},
              expirationDate: {default: "", required: true},
              term: {default: "", required: true},
          },
            show: true,
            settings: {}
          },
          {
            elementId: "mailingAddress",
            title: "Mailing Address",
            fields: {
              street1: {default: "", required: true},
              street2: {default: "", required: true},
              city: {default: "", required: true},
              zip: {default: "", required: true},
              state: {default: "", required: true},
            },
            show: false,
            settings: {}
          },
          {
            elementId: "physicalAddress",
            title: "Physical Address",
            fields: {
              street1: {default: "", required: true},
              street2: {default: "", required: true},
              city: {default: "", required: true},
              zip: {default: "", required: true},
              state: {default: "", required: true},
            },
            show: false,
            settings: {}
          },
          {
            elementId: "map",
            fields: {},
            show: true,
            settings: {}
          }
        ],
      },
      {
        id: "imContractorsSupplementalQuestions",
        title: "Supp. Questions",
        elements: [
          {
            elementId: "questions",
            title: "",
            settings: {}
          }
        ],
      },
      {
        title: "Review",
        elements: [
          {
            elementId: "",
            title: "",
            fields: [],
            settings: {}
          }
        ],
      },
      {
        title: "Bind",
        elements: [{

        }],
      },
    ],
  },
];

@Injectable({
  providedIn: "root",
})
export class QuoteService {
  constructor() {}

  getexcessLiabilitySteps() {
    return coveragesList.find((obj) => obj.coverageType === "excessLiability");
  }

  getCoveragesList() {
   return coveragesList;
  }

  getCoverageSteps(coverageType: string) {
    return coveragesList.find((obj) => obj.coverageType === coverageType);
  }
}

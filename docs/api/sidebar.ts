import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/fjord-expense-api",
    },
    {
      type: "category",
      label: "Expenses",
      items: [
        {
          type: "doc",
          id: "api/list-expenses",
          label: "List expenses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-expense",
          label: "Create an expense",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-expense",
          label: "Get an expense",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-expense",
          label: "Update an expense",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-expense",
          label: "Delete an expense",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/submit-expense",
          label: "Submit an expense for approval",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bulk-create-expenses",
          label: "Create multiple expenses",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Receipts",
      items: [
        {
          type: "doc",
          id: "api/create-receipt",
          label: "Upload a receipt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-receipt",
          label: "Get a receipt",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-receipt",
          label: "Delete a receipt",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/download-receipt",
          label: "Download a receipt file",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Approvals",
      items: [
        {
          type: "doc",
          id: "api/list-approvals",
          label: "List pending approvals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/approve-approval",
          label: "Approve an expense",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reject-approval",
          label: "Reject an expense",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Reports",
      items: [
        {
          type: "doc",
          id: "api/list-reports",
          label: "List expense reports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-report",
          label: "Generate an expense report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-report",
          label: "Get a report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/download-report-pdf",
          label: "Download report as PDF",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Invoices",
      items: [
        {
          type: "doc",
          id: "api/create-invoice",
          label: "Create an invoice",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-invoices",
          label: "List invoices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice",
          label: "Get an invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/send-invoice",
          label: "Send an invoice",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Categories",
      items: [
        {
          type: "doc",
          id: "api/list-categories",
          label: "List expense categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-category",
          label: "Get a category",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "api/create-webhook",
          label: "Create a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-webhooks",
          label: "List webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-webhook",
          label: "Delete a webhook",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

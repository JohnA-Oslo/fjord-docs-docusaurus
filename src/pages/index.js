import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="API reference and guides for the Fjord Expense platform">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <h1>Fjord Expense API documentation</h1>
            <p>The Fjord Expense API provides programmatic access to expense management, receipt handling, approval workflows, and invoice generation.</p>
            <p>This is a demo API created as a playground and to experiment with various technical documentation capabilities around API documentation.</p>

            <h2>Overview</h2>
            <p>The API allows you to:</p>
            <ul>
              <li>Create and manage employee expense entries</li>
              <li>Upload and attach receipts to expenses</li>
              <li>Submit expenses for approval and process approvals</li>
              <li>Generate expense reports</li>
              <li>Create invoices from approved expenses</li>
              <li>Configure webhooks for event notifications</li>
            </ul>

            <h2>Base URLs</h2>
            <ul>
              <li><strong>Production:</strong> <code>https://api.fjordexpense.example.com/v1</code></li>
              <li><strong>Sandbox:</strong> <code>https://sandbox.fjordexpense.example.com/v1</code></li>
            </ul>
            <p>Use the sandbox environment for testing and development. The sandbox resets daily at 00:00 UTC.</p>

            <h2>Getting started</h2>
            <p>If you are new to the API read these guides first:</p>
            <ol>
              <li><Link to="/docs/getting-started/quickstart">Quick Start Guide</Link> - Describes how to make your first API call</li>
              <li><Link to="/docs/getting-started/authentication">Authentication</Link> - Learn how to authenticate your requests</li>
              <li><Link to="/docs/getting-started/rate-limits">Rate Limits</Link> - Understand API usage limits</li>
            </ol>

            <h2>Common use cases</h2>
            <p><strong>Employee expense submission:</strong> Employees create expenses, attach receipts, and submit for approval. See <Link to="/docs/guides/expenses">Managing Expenses</Link>.</p>
            <p><strong>Manager approval workflow:</strong> Managers review pending expenses and approve or reject them. See <Link to="/docs/guides/approvals">Approval Workflows</Link>.</p>
            <p><strong>Client invoicing:</strong> Generate invoices from approved expenses for billing clients. See <Link to="/docs/guides/invoicing">Generating Invoices</Link>.</p>

            <h2>API reference</h2>
            <p>Complete endpoint documentation is available in the <Link to="/docs/api-reference">API Reference</Link>.</p>

            <h2>Support</h2>
            <p>For questions or issues with this demonstration API:</p>
            <ul>
              <li><strong>Email:</strong> api@fjordexpense.example.com</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/JohnA-Oslo/fjord-expense-api">github.com/JohnA-Oslo/fjord-expense-api</a></li>
            </ul>

          </div>
        </div>
      </main>
    </Layout>
  );
}
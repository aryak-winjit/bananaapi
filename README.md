# Repository Guidelines & Pull Request Standards

Welcome to the repository! To maintain a clean, traceable, and compliant workflow, please adhere to the following setup instructions and Pull Request (PR) rules.

---

## 🚀 Getting Started (Node.js)

### Prerequisites

* **Node.js**: Version **18.x** or higher (LTS recommended)
* **npm**: Version **9.x** or higher (or your preferred package manager like Yarn/pnpm)

### Setup Instructions

1. **Clone the repository:**
```bash
git clone <repository-url>
cd <repository-name>

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory based on the provided `.env.example`:
```bash
cp .env.example .env

```


4. **Run the application (Development Mode):**
```bash
npm run dev

```


5. **Run Tests:**
```bash
npm test

```



---

## 🔀 Pull Request (PR) Rules & Conventions

To ensure complete traceability between our code changes and project management tracking, **every Pull Request must link to an Azure Board work item**.

### Mandatory PR Rule: Work Item Association (`AB#`)

* **Rule**: You must include the work item ID in the format `AB#<id>` in either the **PR Title** or the **PR Description**.
* **Example Valid PR Title**:
> `feat(auth): implement OAuth2 login flow AB#12345`


* **Example Valid PR Description**:
> Resolves a bug in the payment gateway retry mechanism.

> **Associated Work Item:** `AB#1234`



### Why is this required?

* Automatically links your Git commits and PR branches directly to the corresponding Azure DevOps work item.
* Ensures compliance with auditing and traceability standards.
* PRs missing the `AB#<id>` tag will fail automated branch validation checks and cannot be merged.

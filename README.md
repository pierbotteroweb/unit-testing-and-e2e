# 🧪 Angular Unit Testing App — For Dummies Edition

This Angular mini app was built to help you understand and practice **professional-grade unit tests** in a simple, hands-on way.

It includes real-life test examples for:

- API calls
- Service injections
- Component methods
- Lifecycle hooks (like `ngOnInit`)
- Conditional rendering
- Custom directives

No backend? No problem — we use a local `users.json` file to simulate API responses.

---

## 📂 App Structure Overview

| Concept                          | File(s)                                                  |
|----------------------------------|-----------------------------------------------------------|
| App Component                    | `app.component.ts` / `app.component.spec.ts`              |
| API Calls with Mock JSON         | `user.service.ts` / `user.service.spec.ts`                |
| Highlight Directive              | `highlight.directive.ts` / `highlight.directive.spec.ts` |
| Local Mock API                   | `assets/users.json`                                       |

---

## 📘 Testing Concepts (with Analogies, File References & Docs)

### ✅ Local API with JSON

- **What it does:** Simulates API responses without a backend.
- **Analogy:** It's like giving Angular a printed menu instead of waiting for the waiter.
- **Found in:** `assets/users.json` & used in `user.service.ts`
- 📚 [Working with HTTP and APIs](https://angular.io/guide/http)

---

### 🧪 Testing API Calls

- **What it does:** Mocks HTTP requests using `HttpClientTestingModule`.
- **Analogy:** You're calling for pizza, but your friend pretends to be the waiter. You're just testing your order logic!
- **Found in:** `user.service.spec.ts`
- 📚 [Testing HTTP Requests](https://angular.io/guide/http#testing-http-requests)

---

### 🧠 Service Injection Tests

- **What it does:** Tests if Angular properly injects the service and calls it.
- **Found in:** `app.component.spec.ts` and `user.service.spec.ts`
- 📚 [Testing Services](https://angular.io/guide/testing-services)

---

### 🌀 Lifecycle Hook Tests (`ngOnInit`)

- **What it does:** Tests if `ngOnInit()` triggers the service logic when the component loads.
- **Found in:** `app.component.spec.ts`
- 📚 [Testing Components Overview](https://angular.io/guide/testing-components-overview)

---

### ⚙️ Method Tests

- **What it does:** Tests internal component methods like data formatting, filtering, etc.
- **Found in:** `app.component.spec.ts`
- 📚 [Testing Components Overview](https://angular.io/guide/testing-components-overview)

---

### ❓ Conditional Tests

- **What it does:** Checks how the component behaves with different inputs (like empty users, or error cases).
- **Found in:** `app.component.spec.ts`
- 📚 [Component Testing Scenarios](https://angular.io/guide/testing-components-overview#component-testing-scenarios)

---

### ✨ Custom Directive Tests

- **What it does:** Validates style changes and DOM effects from a custom directive.
- **Analogy:** Like testing if your highlighter pen works correctly when you pass it over a name.
- **Found in:** `highlight.directive.spec.ts`
- 📚 [Testing Attribute Directives](https://angular.io/guide/testing-components-overview#testing-attribute-directives)

---

## ▶️ How to Run

### Run the App

```bash
ng serve



## 🤖 Powered by ChatGPT  
This project includes insights and suggestions generated with the help of [ChatGPT](https://chatgpt.com/c/67f04453-b9d8-8002-86d5-c1d0c3272d45).  
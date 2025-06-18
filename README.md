# Status Codes 📦

Centralized HTTP status code constants for TypeScript and Node.js.

## 📥 Installation

```bash
npm install @xcr/status-codes
```

## 📦 Usage

```ts
import { statusCode } from "statuskit";

console.log(statusCode.OK); // 200
console.log(statusCode.NotFound); // 404
```

## ✅ Available Codes

- `OK` - 200
- `Created` - 201
- `NoContent` - 204
- `BadRequest` - 400
- `Unauthorized` - 401
- `Forbidden` - 403
- `NotFound` - 404
- `Conflict` - 409
- `InternalServerError` - 500
- `ServiceUnavailable` - 503

## 🧱 Architecture

Follows a minimal clean architecture:
- `core/` holds domain-level constants.
- `index.ts` acts as an export interface.

## 📜 License

MIT

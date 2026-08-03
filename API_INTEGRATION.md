# API Integration

## Base URL

http://localhost:5000/api/v1

After deployment, the production backend URL will be used.

---

## Authentication

| Method | Endpoint | Used In |

| POST | /auth/register | Register Page |
| POST | /auth/login | Login Page |
| POST | /auth/logout | Logout Button |
| GET | /auth/me | Protected Layout |

---

## Services

| Method | Endpoint | Used In |

| GET | /services | Home Page |
| GET | /services/:id | Service Details |
| POST | /services | Create Service |
| PATCH | /services/:id | Update Service |
| DELETE | /services/:id | Delete Service |
| GET | /services/my-services | Technician Dashboard |

---

## Categories

| Method | Endpoint | Used In |

| GET | /categories | Home, Booking Form |
| POST | /categories | Admin Dashboard |
| PATCH | /categories/:id | Admin Dashboard |
| DELETE | /categories/:id | Admin Dashboard |

---

## Bookings

| Method | Endpoint | Used In |

| POST | /bookings | Create Booking |
| GET | /bookings | Customer Dashboard |
| PATCH | /bookings/:id/cancel | Cancel Booking |

---

## Payments

| Method | Endpoint | Used In |

| POST | /payments/create | Pay Now |
| GET | /payments/success | Payment Success Page |
| GET | /payments/cancel | Payment Cancel Page |

---

## Reviews

| Method | Endpoint | Used In |

| POST | /reviews | Leave Review |

---

## Technician

| Method | Endpoint | Used In |

| GET | /technician | Home Page |
| GET | /technician/profile | Technician Dashboard |
| PATCH | /technician/profile | Update Profile |
| PUT | /technician/availability | Availability |
| GET | /technician/bookings | Booking Management |
| PATCH | /technician/bookings/:id | Update Booking Status |

---

## Admin

| Method | Endpoint | Used In |

| GET | /admin/users | User Management |
| PATCH | /admin/users/:id | Ban / Unban User |
| GET | /admin/bookings | Booking Management |
| GET | /admin/dashboard | Dashboard Statistics |

---

## Frontend Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form
- Zod
- Axios
- Shadcn UI
- Sonner
- Cloudinary
- SSLCommerz

---

## Authentication

JWT authentication is used with HTTP-only cookies. Protected routes are handled using Next.js middleware.

---

## Payment Flow

Customer creates a booking.

↓

Technician accepts the booking.

↓

Customer completes payment using SSLCommerz.

↓

After successful payment, booking status changes to **PAID**.

↓

Technician starts the service.

↓

Technician marks the booking as **COMPLETED**.

↓

Customer can submit a review.
# 🍽️ OrderSphere  
### Connecting Cravings with Convenience   

OrderSphere is a modern full-stack food ordering web application designed to simplify online food ordering for customers and streamline restaurant operations for admins.

Built using **React.js, Spring Boot, and PostgreSQL**, the system follows a secure client-server architecture with REST APIs and efficient order management.

---

## ✨ Features

### 👤 Customer Panel
- 🔐 User Registration & Login
- 📋 Browse Food Menu
- 🛒 Add Items to Cart
- 📦 Place Orders
- 📊 View Order Details

### 🛠️ Admin Panel
- ➕ Add Food Items
- ✏️ Update / Delete Items
- 📑 View & Manage Orders

---

##  Tech Stack

-  Frontend: React.js  
-  Backend: Spring Boot (Java)  
-  Database: PostgreSQL  
-  Tools: IntelliJ IDEA, VS Code, DBeaver  

---

##  Architecture

1. User interacts with the React frontend  
2. Frontend sends REST API requests to Spring Boot  
3. Backend processes business logic  
4. PostgreSQL stores and retrieves data  
5. JSON response is returned to the frontend  

This ensures:
- Secure authentication  
- Efficient order processing  
- Clean separation of concerns  

---

##  Project Structure

```
OrderSphere/
│
├── frontend/      # React Application
├── backend/       # Spring Boot Application
├── database/      # SQL Schema
└── docs/          # Project Documentation
```

---

##  Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/OrderSphere.git
cd OrderSphere
```

---

### 2️⃣ Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Update `application.properties` with your PostgreSQL credentials.

Backend runs at:
```
http://localhost:8080
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

## 🛢️ Database Configuration

- Create a PostgreSQL database named:
```
ordersphere
```

- Configure:
  - Username
  - Password
  - Port (Default: 5432)

---

## 🔮 Future Enhancements

- 💳 Online Payment Integration (UPI / Cards)
- 📍 Real-Time Order Tracking
- 📱 Mobile Application (React Native)
- 🤖 AI-Based Food Recommendations
- 🏬 Multi-Restaurant Support


let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (useRole === "manager") {
    accessLevel = "Limited access granted";
} else  {
    accessLevel = "No access granted";
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!"
    } 
} else {
    userMessage = "Please log in to acces the system.";
}

let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manger";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated" ;

## Run the Application
npm run dev

## GitHub Link
[https://github.com/QuaziSamiha/Caffeine_Cozy.git]

## Open 
[http://localhost:3000] with your browser to see the result.

## ------------------------------ Sign In Information -------------------------------
# for Admin Role
email: hunter@gmail.com
password: 123456

# for User Role
email: byron@gmail.com
password: 123456

## ------------------------- You Can Sign Up as Normal User Role by default --------------------
## if you want to sign up as an admin, then you have to go SignUp Component and have to change 36 & 37 no line

## CSS Frameworks
1. Tailwind CSS
2. Daisy UI

1. Authentication System:
Developed a Sign Up page within the Next JS application.
Implemented authentication by using 'Firebase' logic and without utilizing a backend API. Authentication data  managed through context API.
Created separate authentication credentials for users and administrators.
* go to context folder within app folder

2. Dashboard Layout:
Upon successful login, users and administrators will be directed to a dashboard.
The dashboard layout has a sidebar positioned on the left and a navigation bar at the top.
* go to Dashboard folder within app folder

3. Sidebar Navigation:
User Access:
Users only have access to the "Product" and "Profile" sections within the sidebar.
Admin Access:
Administrators have access to the "Product," "Add Coffee," "Profile," and "Users List" sections within the sidebar.
Admin can add new product item.
* go to app --> component --> Sidebar folder

4. Product Page Design:
implemented a product page displaying product cards.
Each product card included an image container, product name, description, and price.
also included 'Details' button and based on user role 'Delete' & 'Update' button added
* go to app --> Dashboard --> Product
* go to app --> Dashboard --> Product --> ProductCard

5. Dynamic Product Viewing:
Developed a dynamic product view page.
Upon clicking on a product card, users will be directed to a dynamic page displaying detailed information about the selected product.
* go to app --> Dashboard --> Product --> ProductDetails --> [id] 

6. Admin Product Management:
Within the admin section, replicated the product page designed for users.
Additionally, included delete, and update products button there.
* go to app --> Dashboard --> Product
* go to app --> Dashboard --> Product --> ProductCard

7. Navbar Integration:
Implemented a logout button within the navbar.
* go to app --> component --> Navbar

8. Responsiveness:
The application is responsive across various devices and screen sizes.


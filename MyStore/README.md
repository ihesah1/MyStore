# MyStore 
## Breif Description :
##### My store application for shopping, on the home page a list of all the store’s products will appear. You can choose what you want and add it to the shopping cart. After adding it, it will appear in the shopping cart and you can specify the quantity of the product as you want, then to confirm the order, you must fill out your personal data form to confirm the order.

## Single-page application with Angular 
 - For Start The project :
	Run `npm install` to install dependencies
	Run `ng serve` to start application
# Components
- AllProducts component
- Product Component
- productDetails Component
- Header Component
- Navbar Component
- Cart Component
- Confirmation Component
# Services 
- Cart servic
- Product service
- Order Service

# Models 
- Cart Model
- Product Model 
- order Model
## Data Store in Localstorag :
- Localstorage to keep the data persistent.
## functionalities
- getProducts() to get all products from Api.	
- AddToCart() to add product to LocalStorage.
- getProductCart() to get all products addedd in local storage .
- getTotalCart() to get all total cart .
- addAmount() to add amount of product after you adding to cart .
- minsAmount() to minuse the amount.

## Style & CSS 
- Bootstrap 
npm i --save bootstrap --latest "for last version "

## Routing
- ### Use Angular routing in templates
	- `routerLink` used in product-details component to go back to all-products component 
	, in cart components to back to product list ,and in confirmation component.
# Use data from external API 
* product servise use HTTPClienr to send requests and retrieve their responses 
- The data :
https://fakestoreapi.com/products/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

